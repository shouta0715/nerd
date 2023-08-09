import { useEffect, useMemo } from "react";
import { fetchInfiniteNextPage } from "src/features/chats/common/utils/infinite";
import { useInfiniteQueryChatsWork } from "src/features/chats/works/api/useInfiniteQueryChatsWork";
import { useTimerState } from "src/features/timer/store";
import { useAutoScroll } from "src/hooks/useAutoScroll";

export const useChatsWork = (work_id: number) => {
  const { isBottom, isSelfScroll, prevScrollTop } = useAutoScroll();
  const time = useTimerState((state) => state.getTime());
  const { data, isPending, fetchNextPage, isFetchingNextPage } =
    useInfiniteQueryChatsWork({
      work_id,
      enabled: !!work_id,
    });

  const chats = useMemo(() => {
    if (!data?.pages || time === 0) return [];

    const flatData = data.pages.flatMap((page) => page.chats_by_work_id);

    const resultData = flatData.filter((chat) => chat.comment_time <= time);

    return resultData;
  }, [data?.pages, time]);

  useEffect(() => {
    if (chats.length === 0 && prevScrollTop.current !== null) {
      prevScrollTop.current = null;

      return;
    }

    if (!isBottom.current) return;

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [isBottom, chats.length, prevScrollTop]);

  useEffect(() => {
    fetchInfiniteNextPage({
      pageParams: data?.pageParams,
      isFetchingNextPage,
      time,
      fetchNextPage,
    });
  }, [data?.pageParams, fetchNextPage, isFetchingNextPage, time]);

  return { data: chats, isSelfScroll, time, isPending };
};
