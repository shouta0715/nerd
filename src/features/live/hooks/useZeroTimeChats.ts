import { useQueryZeroTimeChats } from "src/features/live/api/useQueryZeroTimeChats";
import { useTimerState } from "src/features/timer/store/timerStore";

export const useZeroTimeChats = (episode_id: string) => {
  const isCountDown = useTimerState((state) => state.isCountDown);

  const { data, fetchNextPage, isFetchingNextPage } = useQueryZeroTimeChats(
    episode_id,
    !!episode_id && isCountDown
  );

  return {
    data,
    fetchNextPage,
    isFetchingNextPage,
  };
};
