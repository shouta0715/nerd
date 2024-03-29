import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

import { useQueryLiveChat } from "src/features/live/api/useQueryLiveChat";
import { useSubscription } from "src/features/live/hooks/useSubscription";
import { LiveTimer, Time } from "src/features/timer/types";
import { GetChatsQuery } from "src/gql/graphql";

import { useAutoScroll } from "src/hooks/useAutoScroll";

type Props = {
  episode_id: string;
  mode: LiveTimer["mode"];
  time: Time;
};

export const useLiveChats = ({ episode_id, mode, time }: Props) => {
  const {
    isWsError,
    wsErrorRefetch,
    isLoadingWsRefetch,
    isSubscription,
    handleReconnect,
    canTryReconnect,
    isSocketError,
  } = useSubscription({
    episode_id,
    mode,
    time,
  });
  const queryClient = useQueryClient();
  const { isSelfScroll, isBottom, prevScrollTop } = useAutoScroll();
  const { data, isPending, refetch, isRefetching } = useQueryLiveChat({
    episode_id,
    enabled: mode !== "finish",
  });

  useEffect(() => {
    if (!isBottom.current) return;

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [data?.chats?.length, isBottom, prevScrollTop]);

  const handleRefetch = async () => {
    if (mode !== "down" && mode !== "notRegister") return;

    const prevData = queryClient.getQueryData<GetChatsQuery>([
      "GetChats",
      { episode_id },
    ]);

    if (!prevData) return;

    const { data: refetchData } = await refetch();

    if (!refetchData || prevData.chats.length === refetchData?.chats.length)
      return;

    const newChats = refetchData.chats.filter(
      (chat) => !prevData.chats.some((prevChat) => prevChat.id === chat.id)
    );

    queryClient.setQueryData<GetChatsQuery>(["GetChats", { episode_id }], {
      chats: [...prevData.chats, ...newChats],
    });
  };

  return {
    data: data?.chats,
    handleRefetch,
    isPending,
    isBottom: !isSelfScroll,
    isRefetching,
    wsErrorRefetch,
    isWsError,
    isLoadingWsRefetch,
    isSubscription,
    handleReconnect,
    canTryReconnect,
    isSocketError,
  };
};
