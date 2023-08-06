/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNotificationState } from "src/components/Notification/store";
import { episodeChatsDocument } from "src/documents/chats";
import { LiveTimer, Time } from "src/features/timer/types";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { GetChatsQuery, SubscriptionChatsSubscription } from "src/gql/graphql";

import { client } from "src/libs/client/graphql";
import { getWsClient } from "src/libs/client/ws";
import { SUBSCRIPTION_CHATS } from "src/schema/chat/chatQuery";

import { useGlobalState, useWsClientState } from "src/store/global/globalStore";
import { getToken } from "src/utils/client/getToken";

type Props = {
  episode_id: string;
  mode: LiveTimer["mode"];
  time: Time;
};

type PageNation = {
  _lt: number;
  _gte: number;
};

const getKey = (episode_id: string) => ["GetChats", { episode_id }];

export const useSubscription = ({ episode_id, mode, time }: Props) => {
  const onNotification = useNotificationState((state) => state.onShow);
  const [isWsError, setIsWsError] = useState(false);
  const authLoading = useGlobalState((state) => state.authLoading);
  const queryClient = useQueryClient();
  const [prevPageNation, setPrevPageNation] = useState<PageNation | null>(null);
  const [isLoadingWsRefetch, setIsLoadingWsRefetch] = useState(false);
  const [wsClient, setWsClient, isSocketError, setIsSocketError] =
    useWsClientState((state) => [
      state.wsClient,
      state.setWsClient,
      state.isWsError,
      state.setIsWsError,
    ]);
  const [reConnectionCount, setReConnectionCount] = useState(0);
  const errorTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleAutoReconnect = useCallback(async () => {
    const token = await getToken();

    if (!token) return;

    console.log("reconnect websocket");
    const newClient = getWsClient({
      token,
      onConnected: () => {
        if (errorTimeout.current) clearTimeout(errorTimeout.current);
        setIsSocketError(false);
        onNotification({
          title: "リアルタイムで更新中です。",
          message: "自動で最新のコメントを読み込みます",
          type: "success",
        });
      },
      onError: () => {
        if (errorTimeout.current) clearTimeout(errorTimeout.current);
        errorTimeout.current = setTimeout(() => {
          onNotification({
            title: "リアルタイム接続に失敗しました",
            message: "右下のボタンを押すと、最新のコメントを読み込めます",
            type: "error",
          });
          setIsSocketError(true);
        }, 10000);
      },
    });

    setWsClient(newClient);
    setIsWsError(false);
    setReConnectionCount((prev) => prev + 1);
  }, [onNotification, setIsSocketError, setWsClient]);

  useEffect(() => {
    if (!wsClient || !episode_id || authLoading) return () => {};

    if (mode !== "up")
      return () => {
        wsClient.dispose();

        if (errorTimeout.current) {
          clearTimeout(errorTimeout.current);
          errorTimeout.current = null;
        }
      };

    if (isWsError || reConnectionCount > 7) return () => {};

    const initial_created_at = new Date().toISOString();

    wsClient.on("closed", (event: unknown) => {
      if (!(event instanceof CloseEvent) || mode !== "up") return;

      if (event.code === 1000) {
        if (errorTimeout.current) clearTimeout(errorTimeout.current);

        return;
      }

      if (event.code === 1006) handleAutoReconnect();
    });

    wsClient.subscribe<SubscriptionChatsSubscription>(
      {
        query: SUBSCRIPTION_CHATS,
        variables: {
          episode_id,
          initial_created_at,
        },
      },
      {
        next: ({ data }) => {
          const key = getKey(episode_id);
          const prevData = queryClient.getQueryData<GetChatsQuery>(key);

          if (!prevData) return;

          const newChats = data?.chats_stream.filter(
            (chat) =>
              !prevData.chats.some((prevChat) => prevChat.id === chat.id)
          );

          if (!newChats || newChats.length === 0) return;

          queryClient.setQueryData<GetChatsQuery>(key, {
            chats: [...prevData.chats, ...newChats],
          });
        },
        error: () => {
          if (errorTimeout.current) clearTimeout(errorTimeout.current);
          errorTimeout.current = setTimeout(() => {
            if (isWsError) return;
            onNotification({
              title: "リアルタイム接続に失敗しました",
              message: "右下のボタンを押すと、最新のコメントを読み込めます",
              type: "error",
            });
            setIsWsError(true);
          }, 10000);
        },
        complete: () => console.log("complete"),
      }
    );

    return () => {
      wsClient.dispose();

      if (errorTimeout.current) {
        clearTimeout(errorTimeout.current);
        errorTimeout.current = null;
      }
    };
  }, [
    authLoading,
    episode_id,
    handleAutoReconnect,
    isWsError,
    mode,
    onNotification,
    queryClient,
    reConnectionCount,
    wsClient,
  ]);

  const wsErrorRefetch = async () => {
    if ((!isWsError && !isSocketError) || mode !== "up") return;

    const key = getKey(episode_id);
    const number = timeToSecond(time);
    const newPageNation: PageNation = {
      _lt: number + 1,
      _gte: prevPageNation?._lt || 1,
    };

    const variables = { episode_id, get_limit: 100, ...newPageNation };

    try {
      setIsLoadingWsRefetch(true);
      const refetchData = await client.request(episodeChatsDocument, variables);
      const prevData = queryClient.getQueryData<GetChatsQuery>(key);

      if (!refetchData || !prevData) return;

      const newChats = refetchData.chats_by_episode_id.filter(
        (chat) => !prevData.chats.some((prevChat) => prevChat.id === chat.id)
      );

      const sortChats = [...prevData.chats, ...newChats].sort(
        (a, b) => a.comment_time - b.comment_time
      );

      queryClient.setQueryData<GetChatsQuery>(key, {
        chats: sortChats,
      });

      setPrevPageNation(newPageNation);
    } catch (_) {
      onNotification({
        title: "データ取得に失敗しました。",
        message: "通信環境の良いところで再度お試しください。",
        type: "error",
      });
    } finally {
      setIsLoadingWsRefetch(false);
    }
  };

  const handleReconnect = async () => {
    if (
      !episode_id ||
      authLoading ||
      reConnectionCount > 7 ||
      (!isWsError && !isSocketError)
    )
      return;

    handleAutoReconnect();
  };

  return {
    isWsError,
    isSocketError,
    wsErrorRefetch,
    isLoadingWsRefetch,
    isSubscription: mode === "up" && !isWsError && !isSocketError,
    handleReconnect,
    canTryReconnect:
      !(reConnectionCount > 7) && mode === "up" && (isWsError || isSocketError),
  };
};
