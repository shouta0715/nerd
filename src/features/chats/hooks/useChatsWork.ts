import { useEffect, useMemo } from "react";
import { useInfiniteQueryChatsWork } from "src/features/chats/api/useInfiniteQueryChatsWork";

import { isPageParams } from "src/features/chats/types";
import { isAvoidFetchNext } from "src/features/chats/utils";
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
    if (
      isFetchingNextPage ||
      time < 300 ||
      !data?.pageParams ||
      data.pageParams.length > 36
    )
      return;

    const lastPageParam = data?.pageParams.at(-1);

    if (!isPageParams(lastPageParam) || isAvoidFetchNext(time, lastPageParam))
      return;

    fetchNextPage();
  }, [data?.pageParams, fetchNextPage, isFetchingNextPage, time]);

  return { data: chats, isSelfScroll, time, isPending };
};
