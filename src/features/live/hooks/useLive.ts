import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { useTimerState } from "src/features/timer/store/timerStore";

export const useLive = () => {
  const router = useRouter();
  const { slug, episode } = router.query;
  const { data, isLoading, isPlaceholderData } = useQueryEpisode(slug, episode);
  const [isThread, setIsThread] = useState(false);
  const globalInterval = useTimerState((state) => state.interval);

  useEffect(() => globalInterval.stop, [globalInterval]);

  return {
    data,
    isLoading,
    isThread,
    setIsThread,
    isPlaceholderData,
  };
};
