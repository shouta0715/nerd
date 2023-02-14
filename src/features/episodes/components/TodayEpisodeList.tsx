import React, { FC } from "react";

import { useQueryTodayEpisodes } from "src/features/episodes/api/useQueryTodayEpisodes";
import { TodayEpisodeItem } from "src/features/episodes/components/TodayEpisodeItem";
import { Episode } from "src/features/episodes/types";

export const TodayEpisodeList: FC = () => {
  const { data } = useQueryTodayEpisodes();

  const sortFn = (target: Episode, next: Episode) => {
    const targetDate = new Date(target.start_time);
    const nextDate = new Date(next.start_time);

    return targetDate.getTime() - nextDate.getTime();
  };

  return (
    <ul className="flex flex-wrap gap-4 md:gap-6">
      {data?.episodes?.sort(sortFn).map((episode) => (
        <TodayEpisodeItem episode={episode} key={episode.id} />
      ))}
    </ul>
  );
};
