import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CommentsFilter } from "src/features/comments/types";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { useTimerState } from "src/features/timer/store/timerStore";
// いいね順 or 新着順

export const useEpisode = () => {
  const router = useRouter();
  const { slug, episode } = router.query;
  const { data, isLoading } = useQueryEpisode(slug, episode);
  const [isChat, setIsChat] = useState(true);
  const [filter, setFilter] = useState<CommentsFilter>("new");

  const interval = useTimerState((state) => state.interval);
  useEffect(() => interval.reset, [interval.reset]);

  return {
    data,
    isLoading,
    isChat,
    setIsChat,
    filter,
    setFilter,
  };
};
