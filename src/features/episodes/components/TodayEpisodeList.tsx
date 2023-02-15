import dynamic from "next/dynamic";
import React, { FC } from "react";
import { useQueryTodayEpisodes } from "src/features/episodes/api/useQueryTodayEpisodes";

const DynamicTodayEpisodeItem = dynamic(
  () => import("src/features/episodes/components/TodayEpisodeItem")
);

export const TodayEpisodeList: FC = () => {
  const { data } = useQueryTodayEpisodes();

  return (
    <ul className="flex flex-wrap gap-2 md:gap-4">
      {data?.episodes?.slice(0, 8).map((episode) => (
        <DynamicTodayEpisodeItem episode={episode} key={episode.id} />
      ))}
    </ul>
  );
};
