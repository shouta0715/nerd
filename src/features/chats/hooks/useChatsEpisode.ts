import { useEffect, useMemo } from "react";
import { isPageParams } from "../types/index";
/* eslint-disable no-underscore-dangle */
import { useInfiniteQueryChatsEpisode } from "src/features/chats/api/useInfiniteQueryChatsEpisode";

import { isAvoidFetchNext } from "src/features/chats/utils";
import { useTimerState } from "src/features/timer/store";
import { useAutoScroll } from "src/hooks/useAutoScroll";

export const useChatsEpisode = (episode_id: string) => {
  const { isBottom, isSelfScroll, prevScrollTop } = useAutoScroll();
  const time = useTimerState((state) => state.getTime());
  const { data, fetchNextPage, isFetchingNextPage, isPending } =
    useInfiniteQueryChatsEpisode({
      episode_id,
      enabled: !!episode_id,
    });

  const chats = useMemo(() => {
    if (!data?.pages || time === 0) return [];

    const flatData = data.pages.flatMap((page) => page.chats_by_episode_id);

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

  return {
    data: chats,
    time,
    isPending,
    isSelfScroll,
  };
};
