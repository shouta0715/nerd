import { useEffect, useMemo } from "react";
import { useInfiniteQueryChatsEpisode } from "src/features/chats/api/useInfiniteQueryChatsEpisode";
import { useChats } from "src/features/chats/hooks/useChats";

export const useChatsEpisode = (episode_id: string) => {
  const { entry, isBottom, time, bottomRef } = useChats();
  const { data, fetchNextPage, isFetchingNextPage } =
    useInfiniteQueryChatsEpisode({
      episode_id,
      enabled: !!episode_id,
    });

  const chats = useMemo(() => {
    if (!data?.pages) return [];

    const flatData = data.pages.flatMap((page) => page.chats_by_episode_id);

    const resultData = flatData.filter((chat) => chat.comment_time <= time);

    if (time === 0) return [];

    return resultData;
  }, [data?.pages, time]);

  useEffect(() => {
    if (!isBottom) return;

    entry?.target.scrollIntoView({ behavior: "smooth" });
  }, [entry?.target, isBottom, chats.length]);

  useEffect(() => {
    if (time % 300 === 0 && time !== 0 && !isFetchingNextPage) {
      fetchNextPage({
        pageParam: {
          _gte: time,
          _lt: time + 300,
        },
      });
    }
  }, [fetchNextPage, isFetchingNextPage, time]);

  return { data: chats, bottomRef, isBottom, entry, time };
};
