import { useState } from "react";
import { CommentsFilter } from "src/features/comments/types";
import { useLiveTimer } from "src/features/timer/hooks/useLiveTimer";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

export const useLive = (data: GetEpisodeQuery) => {
  const [isChat, setIsChat] = useState(true);
  const [filter, setFilter] = useState<CommentsFilter>("new");

  const { mode, time, isAlreadyFinished } = useLiveTimer({
    start_time: data?.episodes_by_pk?.start_time,
    end_time: data?.episodes_by_pk?.end_time,
  });

  console.log("time", time);

  return {
    isChat,
    setIsChat,
    mode,
    time,
    isAlreadyFinished,
    filter,
    setFilter,
  };
};
