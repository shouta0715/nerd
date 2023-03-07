import { useIntersection } from "@mantine/hooks";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useOpenState } from "../../episodes/store/index";
import { useInfiniteQueryChatComments } from "src/features/comments/api/useInfiniteQueryChatComments";
import { useTimerState } from "src/features/timer/store/timerStore";

type Args = {
  episode_id: string;
};

export const useChatComments = ({ episode_id }: Args) => {
  const { data, fetchNextPage, isLoading } = useInfiniteQueryChatComments({
    episode_id,
    enabled: !!episode_id,
  });
  const time = useTimerState((state) => state.getTime());
  const isMenuOpen = useOpenState((state) => state.isMenuOpen);
  const interval = useTimerState((state) => state.interval);
  const { ref, entry } = useIntersection({
    root: null,
    rootMargin: "100px",
    threshold: 1,
  });
  const [isBottom, setIsBottom] = useState<boolean>(true);

  const chatCommentData = useMemo(() => {
    if (!data?.pages) return [];

    const flatData = data.pages
      .map((page) => page.chat_comments_by_episode_id)
      .flat();

    return flatData;
  }, [data?.pages]);

  const [filteredData, setFilteredData] = useState<typeof chatCommentData>([]);
  const deferredData = useDeferredValue(filteredData);

  useEffect(() => {
    if (!entry) return;

    setIsBottom(entry.isIntersecting);
  }, [entry]);

  useEffect(() => {
    if (!isBottom) return;

    entry?.target.scrollIntoView({ behavior: "smooth" });
  }, [deferredData.length, entry?.target, isBottom]);

  useEffect(() => {
    if (!chatCommentData) setFilteredData([]);

    if (isMenuOpen && !interval?.active) {
      setFilteredData((oldData) => [...oldData]);
    } else {
      setFilteredData(
        chatCommentData.filter((comment) => comment.comment_time <= time)
      );
    }
    // eslint-disable-next-line no-useless-return
    if (time % 300 !== 0 || time === 0) return;

    fetchNextPage({
      pageParam: {
        _gte: time,
        _lt: time + 300,
      },
    });
  }, [chatCommentData, fetchNextPage, interval?.active, isMenuOpen, time]);

  return {
    data: deferredData,
    isLoading,
    bottomRef: ref,
    isBottom,
    setIsBottom,
    entry,
  };
};
