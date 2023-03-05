import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Skeleton } from "src/components/Layout/loading/Skeleton";
import { useTodayEpisodes } from "src/features/episodes/hooks/useTodayEpisodes";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  data: GetTodayEpisodesQuery;
};

const DynamicTodayEpisodeItem = dynamic(
  () => import("src/features/episodes/components/TodayEpisodeItem"),
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);

export const TodayEpisodes: FC<Props> = ({ data }) => {
  const { deferredFilterEpisodes } = useTodayEpisodes({ data });

  return (
    <ul className="flex flex-wrap gap-4">
      {deferredFilterEpisodes?.map((episode) => (
        <DynamicTodayEpisodeItem episode={episode} key={episode.id} />
      ))}
    </ul>
  );
};
