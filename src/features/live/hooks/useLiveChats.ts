import { useEffect, useMemo, useRef } from "react";
import { useChats } from "src/features/chats/hooks/useChats";
import { useInfiniteLiveChats } from "src/features/live/api/useInfiniteLiveChats";
import { LiveTimer } from "src/features/timer/types";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";

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
  const { isMenuOpen, isBottom, bottomRef, entry, setIsBottom } = useChats();
  const NumberTime = timeToSecond(
    mode === "up" ? time : { hours: 0, minutes: 0, seconds: 0 }
  );

  const InitialLt = useRef<number | null>(
    mode === "up" ? Math.round(NumberTime / 100) * 100 + 200 : 0
  );

  const { data, fetchNextPage, refetch, isRefetching, isLoading } =
    useInfiniteLiveChats({
      time,
      episode_id,
      mode,
      enabled: !isTimerLoading,
    });

  const chats = useMemo(() => {
    if (!data?.pages) return [];

    if (mode === "down")
      return [...data.pages[0].chats_by_episode_id].reverse();

    const flatData = data.pages.map((page) => page.chats_by_episode_id).flat();

    const resultData = flatData.filter(
      (chat) => chat.comment_time <= NumberTime
    );

    return resultData;
  }, [NumberTime, data?.pages, mode]);

  useEffect(() => {
    if (entry) setIsBottom(entry.isIntersecting);

    if (NumberTime % 200 === 0 && NumberTime !== 0 && mode === "up") {
      fetchNextPage({
        pageParam: {
          _gte: InitialLt.current ?? NumberTime,
          _lt: NumberTime + 200,
        },
      });

      InitialLt.current = null;
    }
  }, [NumberTime, entry, fetchNextPage, mode, setIsBottom]);

  const handleRefetch = async () => {
    if (mode === "down" && NumberTime === 0) {
      await refetch({
        refetchPage: (_, index) => index === 0,
      });
    }
  };

  return {
    data: chats,
    isBottom,
    isMenuOpen,
    handleRefetch,
    isRefetching,
    isLoading,
    bottomRef,
    entry,
  };
};
