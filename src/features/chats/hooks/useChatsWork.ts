import { useEffect, useMemo } from "react";
import { useInfiniteQueryChatsWork } from "src/features/chats/api/useInfiniteQueryChatsWork";
import { useChats } from "src/features/chats/hooks/useChats";

export const useChatsWork = (work_id: number) => {
  const { entry, isBottom, time, bottomRef } = useChats();
  const { data, isLoading } = useInfiniteQueryChatsWork({
    work_id,
    enabled: !!work_id,
  });

  const chats = useMemo(() => {
    if (!data?.pages) return [];

    const flatData = data.pages.flatMap((page) => page.chats_by_work_id);

    const resultData = flatData.filter((chat) => chat.comment_time <= time);

    if (time === 0) return [];

    return resultData;
  }, [data?.pages, time]);

  useEffect(() => {
    if (!isBottom) return;

    entry?.target.scrollIntoView({ behavior: "smooth" });
  }, [entry?.target, isBottom, chats.length]);

  // useEffect(() => {
  //   if (time % 300 === 0 && time !== 0 && !isFetchingNextPage) {
  //     fetchNextPage({
  //       pageParam: {
  //         _gte: time,
  //         _lt: time + 300,
  //       },
  //     });
  //   }
  // }, [fetchNextPage, isFetchingNextPage, time]);

  return { data: chats, bottomRef, isBottom, entry, time, isLoading };
};
