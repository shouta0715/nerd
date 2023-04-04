import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useChats } from "src/features/chats/hooks/useChats";
import { useInfiniteLiveChats } from "src/features/live/api/useInfiniteLiveChats";
import { LiveTimer } from "src/features/timer/types";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { GetChatsEpisodeQuery } from "src/graphql/chat/chatQuery.generated";

type Props = {
  time: LiveTimer["time"];
  episode_id: string;
  mode: LiveTimer["mode"];
  isTimerLoading: boolean;
};

type PageParam = {
  _gte: number;
  _lt: number;
};

type InfiniteLiveChats = {
  pageParam: PageParam[] | undefined[];
  pages: GetChatsEpisodeQuery[];
};

export const useLiveChats = ({
  time,
  episode_id,
  mode,
  isTimerLoading,
}: Props) => {
  const { isBottom, bottomRef, entry } = useChats();

  const queryClient = useQueryClient();

  const {
    data,
    fetchNextPage,
    refetch,
    isRefetching,
    isLoading,
    InitialPageParams,
  } = useInfiniteLiveChats({
    time,
    episode_id,
    mode,
    enabled: !isTimerLoading,
  });

  const [prevPageParam, setPrevPageParam] =
    useState<PageParam>(InitialPageParams);

  const chats = useMemo(() => {
    const NumberTime = timeToSecond(
      mode === "up" ? time : { hours: 0, minutes: 0, seconds: 0 }
    );
    if (!data?.pages) return [];

    if (mode === "down")
      return [...data.pages[0].chats_by_episode_id].reverse();

    const flatData = data.pages.map((page) => page.chats_by_episode_id).flat();

    const resultData = flatData.filter(
      (chat) => chat.comment_time <= NumberTime
    );

    return resultData;
  }, [data?.pages, mode, time]);

  const handleRefetch = async () => {
    if (mode === "up") {
      const NumberTime = timeToSecond(
        mode === "up" ? time : { hours: 0, minutes: 0, seconds: 0 }
      );

      const { _lt } = prevPageParam;

      const newPageParam = { _gte: _lt, _lt: NumberTime + 1 };
      setPrevPageParam(newPageParam);

      fetchNextPage({
        pageParam: newPageParam,
      });

      return;
    }

    if (mode === "down") {
      const prevData = queryClient.getQueryData<InfiniteLiveChats>([
        "LiveChats",
        { episode_id },
      ]);

      if (!prevData) return;

      const prevChats = prevData.pages[0].chats_by_episode_id;

      const { data: refetchData } = await refetch({
        refetchPage: (_, index) => index === 0,
      });

      const newData = refetchData?.pages[0];

      const newChats = newData?.chats_by_episode_id.filter((newChat) => {
        const isExist = prevChats.find(
          (prevChat) => prevChat.id === newChat.id
        );

        return !isExist;
      });

      if (!newChats) return;

      queryClient.setQueryData<InfiniteLiveChats>(
        ["LiveChats", { episode_id }],
        {
          ...prevData,
          pages: [
            {
              ...prevData.pages[0],
              chats_by_episode_id: [...newChats, ...prevChats],
            },
          ],
        }
      );
    }
  };

  return {
    data: chats,
    isBottom,
    handleRefetch,
    isRefetching,
    isLoading,
    bottomRef,
    entry,
  };
};
