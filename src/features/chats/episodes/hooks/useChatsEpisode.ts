import { useEffect, useMemo } from "react";
import { fetchInfiniteNextPage } from "src/features/chats/common/utils/infinite";
import { useInfiniteQueryChatsEpisode } from "src/features/chats/episodes/api/useInfiniteQueryChatsEpisode";
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
    fetchInfiniteNextPage({
      pageParams: data?.pageParams,
      isFetchingNextPage,
      time,
      fetchNextPage,
    });
  }, [data?.pageParams, fetchNextPage, isFetchingNextPage, time]);

  return {
    data: chats,
    time,
    isPending,
    isSelfScroll,
  };
};
