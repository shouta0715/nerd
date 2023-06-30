import { useEffect, useMemo } from "react";
import { useInfiniteQueryChatsWork } from "src/features/chats/api/useInfiniteQueryChatsWork";

import { isPageParams } from "src/features/chats/types";
import { isAvoidFetchNext, multipleOf300 } from "src/features/chats/utils";
import { useTimerState } from "src/features/timer/store";
import { useAutoScroll } from "src/hooks/useAutoScroll";

export const useChatsWork = (work_id: number) => {
  const { isBottom, isSelfScroll, prevScrollTop } = useAutoScroll();
  const time = useTimerState((state) => state.getTime());
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQueryChatsWork({
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

    if (lastPageParam === undefined) {
      (async () => {
        fetchNextPage({
          pageParam: {
            _gte: 300,
            _lt: multipleOf300(time),
          },
        });
      })();

      return;
    }

    if (!isPageParams(lastPageParam) || isAvoidFetchNext(time, lastPageParam))
      return;

    // eslint-disable-next-line no-underscore-dangle
    const lastChatTime = lastPageParam._lt;

    (async () => {
      fetchNextPage({
        pageParam: {
          _gte: lastChatTime,
          _lt: multipleOf300(time),
        },
      });
    })();
  }, [data?.pageParams, fetchNextPage, isFetchingNextPage, time]);

  return { data: chats, isSelfScroll, time, isLoading };
};
