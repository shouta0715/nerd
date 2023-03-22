import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useOpenState } from "../../episodes/store/index";

import { useInfiniteQueryChats } from "src/features/comments/api/useInfiniteQueryChatComments";
import { useTimerState } from "src/features/timer/store/timerStore";
import { useInterSection } from "src/hooks/useInterSection";

type Args = {
  episode_id: string;
};

export const useChats = ({ episode_id }: Args) => {
  const { data, fetchNextPage, isLoading } = useInfiniteQueryChats({
    episode_id,
    enabled: !!episode_id,
  });
  const time = useTimerState((state) => state.getTime());
  const isMenuOpen = useOpenState((state) => state.isMenuOpen);
  const interval = useTimerState((state) => state.interval);
  const { ref, entry } = useInterSection({
    root: null,
    rootMargin: "100px",
    threshold: 1,
  });
  const [isBottom, setIsBottom] = useState<boolean>(true);

  const chatCommentData = useMemo(() => {
    if (!data?.pages) return [];

    const flatData = data.pages.map((page) => page.chats_by_episode_id).flat();

    return flatData;
  }, [data?.pages]);

  const [filteredData, setFilteredData] = useState<typeof chatCommentData>([]);
  const deferredData = useDeferredValue(filteredData);

  useEffect(() => {
    if (!chatCommentData) setFilteredData([]);
    if (entry) setIsBottom(entry.isIntersecting);
    if (isBottom) entry?.target.scrollIntoView({ behavior: "smooth" });

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
    fetchNextPage,
    interval?.active,
    isBottom,
    isMenuOpen,
    time,
  ]);

  return {
    data: deferredData,
    isLoading,
    bottomRef: ref,
    isBottom,
    setIsBottom,
    entry,
    interval,
    time,
  };
};
