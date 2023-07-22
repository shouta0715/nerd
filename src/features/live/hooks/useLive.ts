import { useRouter } from "next/router";
import { useState } from "react";
import { CommentsFilter } from "src/features/comments/types";
import { useLiveTimer } from "src/features/timer/hooks/useLiveTimer";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

export const useLive = (data: GetEpisodeQuery) => {
  const router = useRouter();
  const { mode: chatMode } = router.query;

  const [filter, setFilter] = useState<CommentsFilter>("new");

  const { mode, time, isAlreadyFinished } = useLiveTimer({
    start_time: data?.episodes_by_pk?.start_time,
    end_time: data?.episodes_by_pk?.end_time,
  });

  return {
    isChat: chatMode === "chat",
    mode,
    time,
    isAlreadyFinished,
    filter,
    setFilter,
  };
};
