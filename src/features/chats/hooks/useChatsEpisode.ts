import { useEffect, useMemo } from "react";
import { isPageParams } from "../types/index";
/* eslint-disable no-underscore-dangle */
import { useInfiniteQueryChatsEpisode } from "src/features/chats/api/useInfiniteQueryChatsEpisode";

import { isAvoidFetchNext, multipleOf300 } from "src/features/chats/utils";
import { useTimerState } from "src/features/timer/store";
import { useAutoScroll } from "src/hooks/useAutoScroll";

export const useChatsEpisode = (episode_id: string) => {
  const { isBottom, isSelfScroll } = useAutoScroll();
  const time = useTimerState((state) => state.getTime());
  const { data, fetchNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQueryChatsEpisode({
      episode_id,
      enabled: !!episode_id,
    });

  const chats = useMemo(() => {
    if (!data?.pages) return [];

    const flatData = data.pages.flatMap((page) => page.chats_by_episode_id);

    const resultData = flatData.filter((chat) => chat.comment_time <= time);

    if (time === 0) return [];

    return resultData;
  }, [data?.pages, time]);

  useEffect(() => {
    if (!isBottom.current) return;

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [isBottom, chats.length]);

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

  return {
    data: chats,
    time,
    isLoading,
    isSelfScroll,
  };
};
