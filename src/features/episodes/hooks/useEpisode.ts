import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { useTimerState } from "src/features/timer/store/timerStore";

export const useEpisode = () => {
  const router = useRouter();
  const { slug, episode } = router.query;
  const { data, isLoading } = useQueryEpisode(slug, episode);
  const [isChat, setIsChat] = useState(true);

  const interval = useTimerState((state) => state.interval);
  useEffect(() => interval.reset, [interval.reset]);

  return {
    data,
    isLoading,
    isChat,
    setIsChat,
    interval,
  };
};
