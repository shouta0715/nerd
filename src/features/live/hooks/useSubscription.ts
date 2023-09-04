/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNotificationState } from "src/components/Notification/store";
import { episodeChatsDocument } from "src/documents/chats";
import { useSubscriptionsHandler } from "src/features/live/hooks/useSubscriptionsHandler";
import { LiveTimer, Time } from "src/features/timer/types";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import {
  GetChatsQuery,
  SubscriptionChatsSubscription,
  SubscriptionChatsSubscriptionVariables,
} from "src/gql/graphql";

import { client } from "src/libs/client/graphql";
import { SUBSCRIPTION_CHATS } from "src/schema/chat/chatQuery";

import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

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
  const {
    wsClient,
    errorTimeout,
    isWsError,
    reConnectionCount,
    handleAutoReconnect,
    handlerError,
    isSocketError,
    cleanup,
  } = useSubscriptionsHandler();
  const authLoading = useGlobalState((state) => state.authLoading);
  const queryClient = useQueryClient();
  const [prevPageNation, setPrevPageNation] = useState<PageNation | null>(null);
  const [isLoadingWsRefetch, setIsLoadingWsRefetch] = useState(false);
  const user = useUserState((state) => state.user);

  useEffect(() => {
    if (!wsClient || !episode_id || authLoading) return () => {};

    if (mode !== "up") return cleanup;
    if (isWsError || reConnectionCount > 7) return cleanup;

    wsClient.on("closed", (event: unknown) => {
      if (!(event instanceof CloseEvent) || mode !== "up") return;

      if (event.code === 1000) {
        if (errorTimeout.current) clearTimeout(errorTimeout.current);

        return;
      }

      if (event.code === 1006) handleAutoReconnect();
    });

    const initial_created_at = new Date().toISOString();
    const variables = { episode_id, initial_created_at };
    wsClient.subscribe<
      SubscriptionChatsSubscription,
      SubscriptionChatsSubscriptionVariables
    >(
      {
        query: SUBSCRIPTION_CHATS,
        variables,
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
        error: handlerError,
        complete: () => console.log("complete"),
      }
    );

    return cleanup;
  }, [
    authLoading,
    cleanup,
    episode_id,
    errorTimeout,
    handleAutoReconnect,
    handlerError,
    isWsError,
    mode,
    queryClient,
    reConnectionCount,
    user,
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
        title: "データ取得できませんでした。",
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
