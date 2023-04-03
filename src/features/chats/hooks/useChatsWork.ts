import { useEffect, useMemo } from "react";
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

  const chats = useMemo(() => {
    if (!data?.pages) return [];

    const flatData = data.pages.map((page) => page.chats_by_work_id).flat();

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
  }, [
    chats,
    entry,
    entry?.target,
    fetchNextPage,
    interval?.active,
    isBottom,
    isMenuOpen,
    setIsBottom,
    time,
  ]);

  return { data: chats, bottomRef, isBottom, entry, time };
};
