import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useInfiniteQueryChatsWork } from "src/features/chats/api/useInfiniteQueryChatsWork";
import { useChats } from "src/features/chats/hooks/useChats";

export const useChatsWork = (work_id: number) => {
  const {
    entry,
    isBottom,
    isMenuOpen,
    time,
    setIsBottom,
    interval,
    bottomRef,
  } = useChats();
  const { data, fetchNextPage } = useInfiniteQueryChatsWork({
    work_id,
    enabled: !!work_id,
  });
  const chatCommentData = useMemo(() => {
    if (!data?.pages) return [];

    const flatData = data.pages.map((page) => page.chats_by_work_id).flat();

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
    setIsBottom,
    time,
  ]);

  return { data: deferredData, bottomRef, isBottom, entry, time };
};
