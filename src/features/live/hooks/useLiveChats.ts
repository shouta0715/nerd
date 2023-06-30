import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import { useInfiniteLiveChats } from "src/features/live/api/useInfiniteLiveChats";
import { LiveTimer } from "src/features/timer/types";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { GetChatsEpisodeQuery } from "src/graphql/chat/chatQuery.generated";
import { useAutoScroll } from "src/hooks/useAutoScroll";

type Props = {
  time: LiveTimer["time"];
  episode_id: string;
  mode: LiveTimer["mode"];
};

type PageParam = {
  _gte: number;
  _lt: number;
};

type InfiniteLiveChats = {
  pageParam: PageParam[] | undefined[];
  pages: GetChatsEpisodeQuery[];
};

export const useLiveChats = ({ time, episode_id, mode }: Props) => {
  const queryClient = useQueryClient();
  const { isSelfScroll } = useAutoScroll();
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
    enabled: mode !== "finish",
  });

  const [prevPageParam, setPrevPageParam] =
    useState<PageParam>(InitialPageParams);

  const chats = useMemo(() => {
    if (!data?.pages) return [];

    if (mode === "down")
      return [...data.pages[0].chats_by_episode_id].reverse();

    return data.pages.flatMap((page) => page.chats_by_episode_id);
  }, [data?.pages, mode]);

  const handleRefetch = async () => {
    if (mode === "up") {
      const NumberTime = timeToSecond(
        mode === "up" ? time : { hours: 0, minutes: 0, seconds: 0 }
      );

      const { _lt } = prevPageParam;

      const newPageParam = { _gte: _lt, _lt: NumberTime + 1 };
      setPrevPageParam(newPageParam);

      const prevData = queryClient.getQueryData<InfiniteLiveChats>([
        "LiveChats",
        { episode_id },
      ]);
      const { data: refetchData } = await fetchNextPage({
        pageParam: newPageParam,
      });

      if (
        !prevData ||
        !refetchData ||
        !refetchData.pages.at(-1)?.chats_by_episode_id.length
      )
        return;

      const maybeSelfMutatedIds = refetchData.pages
        .at(-1)
        ?.chats_by_episode_id.map((chat) => chat.id);

      const filteredDuplicatedData = prevData.pages.map((page, index) => {
        if (index !== prevData.pages.length - 1) return page;

        // 最後のindexの時は、自分自身のデータを除外する
        const chats_by_episode_id = page.chats_by_episode_id.filter(
          (chat) => !maybeSelfMutatedIds?.includes(chat.id)
        );

        return { chats_by_episode_id };
      });

      queryClient.setQueryData<InfiniteLiveChats>(
        ["LiveChats", { episode_id }],
        {
          pageParam: refetchData.pageParams as PageParam[],
          pages: [
            ...filteredDuplicatedData,
            {
              chats_by_episode_id:
                refetchData.pages[refetchData.pages.length - 1]
                  .chats_by_episode_id,
            },
          ],
        }
      );

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
    handleRefetch,
    isRefetching,
    isLoading,
    isBottom: !isSelfScroll,
  };
};
