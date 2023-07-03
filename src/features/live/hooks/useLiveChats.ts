import { useQueryClient } from "@tanstack/react-query";

import { useQueryLiveChat } from "src/features/live/api/useQueryLiveChat";
import { useSubscription } from "src/features/live/hooks/useSubscription";
import { LiveTimer, Time } from "src/features/timer/types";
import { GetChatsQuery } from "src/graphql/chat/chatQuery.generated";
import { useAutoScroll } from "src/hooks/useAutoScroll";

type Props = {
  episode_id: string;
  mode: LiveTimer["mode"];
  time: Time;
};

export const useLiveChats = ({ episode_id, mode, time }: Props) => {
  const { isWsError, wsErrorRefetch, isLoadingWsRefetch } = useSubscription({
    episode_id,
    mode,
    time,
  });
  const queryClient = useQueryClient();
  const { isSelfScroll } = useAutoScroll();
  const { data, isLoading, refetch, isRefetching } = useQueryLiveChat({
    episode_id,
    enabled: mode !== "finish",
  });

  const handleRefetch = async () => {
    if (mode !== "down") return;

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
    isLoading,
    isBottom: !isSelfScroll,
    isRefetching,
    wsErrorRefetch,
    isWsError,
    isLoadingWsRefetch,
  };
};
