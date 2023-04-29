import { useRouter } from "next/router";
import { useState } from "react";
import { CommentsFilter } from "src/features/comments/types";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { useLiveTimer } from "src/features/timer/hooks/useLiveTimer";

export const useLive = () => {
  const router = useRouter();
  const { slug, episode } = router.query;

  const { data, isLoading, isPlaceholderData } = useQueryEpisode(slug, episode);

  const [isChat, setIsChat] = useState(true);
  const [filter, setFilter] = useState<CommentsFilter>("new");

  const { mode, time, isTimeLoading, isAlreadyFinished } = useLiveTimer({
    start_time: data?.episodes_by_pk?.start_time,
    end_time: data?.episodes_by_pk?.end_time,
  });

  return {
    data,
    isLoading,
    isChat,
    setIsChat,
    isPlaceholderData,
    mode,
    time,
    isTimeLoading,
    isAlreadyFinished,
    filter,
    setFilter,
  };
};
