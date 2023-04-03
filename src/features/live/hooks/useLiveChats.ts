import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useOpenState } from "src/features/episodes/store";
import { useInfiniteLiveChats } from "src/features/live/api/useInfiniteLiveChats";
import { LiveTimer } from "src/features/timer/types";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { useInterSection } from "src/hooks/useInterSection";

type Props = {
  time: LiveTimer["time"];
  episode_id: string;
  mode: LiveTimer["mode"];
  isTimerLoading: boolean;
};

export const useLiveChats = ({
  time,
  episode_id,
  mode,
  isTimerLoading,
}: Props) => {
  const NumberTime = timeToSecond(
    mode === "up" ? time : { hours: 0, minutes: 0, seconds: 0 }
  );
  const { data, fetchNextPage, refetch, isRefetching, isLoading } =
    useInfiniteLiveChats({
      time,
      episode_id,
      mode,
      enabled: !isTimerLoading,
    });

  const { ref, entry } = useInterSection({
    root: null,
    rootMargin: "100px",
    threshold: 1,
  });
  const [isBottom, setIsBottom] = useState<boolean>(true);
  const isMenuOpen = useOpenState((state) => state.isMenuOpen);

  const chatCommentData = useMemo(() => {
    if (!data?.pages) return [];

    if (mode === "down")
      return [...data.pages[0].chats_by_episode_id].reverse();

    const flatData = data.pages.map((page) => page.chats_by_episode_id).flat();

    return flatData;
  }, [data?.pages, mode]);

  const [filteredData, setFilteredData] = useState<typeof chatCommentData>([]);
  const deferredData = useDeferredValue(filteredData);

  useEffect(() => {
    if (
      mode === "down" &&
      chatCommentData.length > 0 &&
      filteredData.length === 0
    ) {
      setFilteredData(chatCommentData);
    }
  }, [chatCommentData, filteredData.length, mode]);

  useEffect(() => {
    if (!isBottom) return;

    entry?.target.scrollIntoView({ behavior: "smooth" });
  }, [deferredData.length, entry?.target, isBottom]);

  useEffect(() => {
    if (!chatCommentData) setFilteredData([]);
    if (entry) setIsBottom(entry.isIntersecting);
    if (mode === "up") {
      setFilteredData(
        chatCommentData.filter((comment) => comment.comment_time <= NumberTime)
      );
    }
    if (NumberTime % 100 === 0 && NumberTime !== 0 && mode === "up") {
      fetchNextPage({
        pageParam: {
          _gte: NumberTime,
          _lt: NumberTime + 100,
        },
      });
    }
  }, [NumberTime, chatCommentData, entry, fetchNextPage, mode]);

  const handleRefetch = async () => {
    const { data: newData } = await refetch({
      refetchPage: (page, index) => index === 0,
    });

    if (mode === "down") {
      // 前のデータに追加 重複はフィルターで消す
      const newDataFlat = newData?.pages[0].chats_by_episode_id;
      if (!newDataFlat) return;

      setFilteredData((prev) => {
        const newFilteredData = [...prev, ...newDataFlat].filter(
          (comment, index, self) =>
            index === self.findIndex((t) => t.id === comment.id)
        );

        return newFilteredData;
      });
    }
  };

  return {
    data: deferredData,
    isBottom,
    isMenuOpen,
    handleRefetch,
    isRefetching,
    isLoading,
    ref,
    entry,
    setFilteredData,
  };
};
