/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { LiveTimer, Time } from "src/features/timer/types";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { SUBSCRIPTION_CHATS } from "src/graphql/chat/chatQuery";
import {
  GetChatsQuery,
  SubscriptionChatsSubscription,
  useGetChatsEpisodeQuery,
} from "src/graphql/chat/chatQuery.generated";
import { client as gqlClient } from "src/libs/graphqlClient";

import { useGlobalState, useWsClientState } from "src/store/global/globalStore";

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
  const wsClient = useWsClientState((state) => state.wsClient);

  useEffect(() => {
    if (!wsClient || !episode_id || authLoading) return () => {};

    if (mode !== "up" || isWsError) return () => wsClient.dispose();

    const initial_created_at = new Date().toISOString();

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
          if (isWsError) return;
          onNotification({
            title: "リアルタイム接続に失敗しました",
            message: "右下のボタンを押すと、最新のコメントを読み込めます",
            type: "error",
          });
          setIsWsError(true);
        },
        complete: () => console.log("complete"),
      }
    );

    return () => wsClient.dispose();
  }, [
    authLoading,
    episode_id,
    isWsError,
    mode,
    onNotification,
    queryClient,
    wsClient,
  ]);

  const wsErrorRefetch = async () => {
    if (!isWsError || mode !== "up") return;

    const key = getKey(episode_id);
    const number = timeToSecond(time);
    const newPageNation: PageNation = {
      _lt: number + 1,
      _gte: prevPageNation?._lt || 1,
    };
    const fetcher = useGetChatsEpisodeQuery.fetcher(gqlClient, {
      episode_id,
      get_limit: 100,
      ...newPageNation,
    });

    try {
      setIsLoadingWsRefetch(true);
      const refetchData = await fetcher();
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
    } catch (error) {
      onNotification({
        title: "データ取得に失敗しました。",
        message: "通信環境の良いところで再度お試しください。",
        type: "error",
      });
    } finally {
      setIsLoadingWsRefetch(false);
    }
  };

  return {
    isWsError,
    wsErrorRefetch,
    isLoadingWsRefetch,
    isSubscription: !isWsError && mode === "up",
  };
};
