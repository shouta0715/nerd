import { useEffect, useMemo } from "react";
import { useInfiniteQueryChatsEpisode } from "src/features/chats/api/useInfiniteQueryChatsEpisode";
import { useChats } from "src/features/chats/hooks/useChats";

export const useChatsEpisode = (episode_id: string) => {
  const { entry, isBottom, time, setIsBottom, bottomRef } = useChats();
  const { data, fetchNextPage } = useInfiniteQueryChatsEpisode({
    episode_id,
    enabled: !!episode_id,
  });
  const chats = useMemo(() => {
    if (!data?.pages) return [];

    const flatData = data.pages.map((page) => page.chats_by_episode_id).flat();

    const resultData = flatData.filter((chat) => chat.comment_time <= time);

    if (time === 0) return [];

    return resultData;
  }, [data?.pages, time]);

  useEffect(() => {
    if (!isBottom) return;

    entry?.target.scrollIntoView({ behavior: "smooth" });
  }, [entry?.target, isBottom, chats.length]);

  useEffect(() => {
    if (entry) setIsBottom(entry.isIntersecting);

    if (time % 300 === 0 && time !== 0) {
      fetchNextPage({
        pageParam: {
          _gte: time,
          _lt: time + 300,
        },
      });
    }
  }, [entry, fetchNextPage, setIsBottom, time]);

  return { data: chats, bottomRef, isBottom, entry, time };
};
