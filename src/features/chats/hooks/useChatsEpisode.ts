import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useInfiniteQueryChatsEpisode } from "src/features/chats/api/useInfiniteQueryChatsEpisode";
import { useChats } from "src/features/chats/hooks/useChats";

export const useChatsEpisode = (episode_id: string) => {
  const {
    entry,
    isBottom,
    isMenuOpen,
    time,
    setIsBottom,
    interval,
    bottomRef,
  } = useChats();
  const { data, fetchNextPage } = useInfiniteQueryChatsEpisode({
    episode_id,
    enabled: !!episode_id,
  });
  const chatCommentData = useMemo(() => {
    if (!data?.pages) return [];

    const flatData = data.pages.map((page) => page.chats_by_episode_id).flat();

    return flatData;
  }, [data?.pages]);

  const [filteredData, setFilteredData] = useState<typeof chatCommentData>([]);
  const deferredData = useDeferredValue(filteredData);

  useEffect(() => {
    if (!isBottom) return;

    entry?.target.scrollIntoView({ behavior: "smooth" });
  }, [deferredData.length, entry?.target, isBottom]);

  useEffect(() => {
    if (!chatCommentData) setFilteredData([]);
    if (entry) setIsBottom(entry.isIntersecting);
    if (isMenuOpen && !interval?.active) {
      setFilteredData((oldData) => [...oldData]);
    } else {
      setFilteredData(
        chatCommentData.filter((comment) => comment.comment_time <= time)
      );
    }

    if (time % 300 === 0 && time !== 0) {
      fetchNextPage({
        pageParam: {
          _gte: time,
          _lt: time + 300,
        },
      });
    }
  }, [
    chatCommentData,
    entry,
    entry?.target,
    fetchNextPage,
    interval?.active,
    isBottom,
    isMenuOpen,
    setIsBottom,
    time,
  ]);

  return { data: deferredData, bottomRef, isBottom, entry, time };
};
