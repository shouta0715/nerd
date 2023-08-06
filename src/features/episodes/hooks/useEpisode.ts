import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { useTimerState } from "src/features/timer/store";

export const useEpisode = () => {
  const router = useRouter();
  const { slug, episode, mode } = router.query;

  const { data, isPending } = useQueryEpisode(slug, episode);

  const interval = useTimerState((state) => state.interval);
  useEffect(() => interval.reset, [interval.reset]);

  return {
    data,
    isPending,
    isChat: mode === "chat",
  };
};
