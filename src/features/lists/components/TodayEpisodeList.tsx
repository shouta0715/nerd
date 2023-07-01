import dynamic from "next/dynamic";
import React, { FC } from "react";
import { SeriesError } from "src/components/Elements/Error/items/SeriesError";
import { Skeleton } from "src/components/Elements/Skeleton";

import { useTodayEpisodes } from "src/features/episodes/hooks/useTodayEpisodes";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  data: GetTodayEpisodesQuery;
};

const DynamicTodayEpisodeItem = dynamic(
  () => import("src/features/episodes/components/TodayEpisodeItem"),
  {
    ssr: false,
    loading: () => <Skeleton theme="today" />,
  }
);

export const TodayEpisodeList: FC<Props> = ({ data }) => {
  const { deferredFilterEpisodes } = useTodayEpisodes({ data });

  return deferredFilterEpisodes.length > 0 ? (
    <ul className="peer grid grid-cols-1 flex-row flex-wrap gap-12  md:grid-cols-[repeat(auto-fill,_minmax(400px,1fr))] ">
      {deferredFilterEpisodes?.map((episode) => (
        <DynamicTodayEpisodeItem key={episode.id} episode={episode} />
      ))}
    </ul>
  ) : (
    <div className="py-10">
      <SeriesError />
    </div>
  );
};
