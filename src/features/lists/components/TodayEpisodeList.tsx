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

export const TodayEpisodeList: FC<Props> = ({ data }) => {
  const { deferredFilterEpisodes } = useTodayEpisodes({ data });

  return (
    <>
      <ul className="peer grid grid-cols-1 flex-wrap gap-4  md:grid-cols-[repeat(auto-fill,_minmax(340px,1fr))] ">
        {deferredFilterEpisodes?.map((episode) => (
          <DynamicTodayEpisodeItem key={episode.id} episode={episode} />
        ))}
      </ul>
      <p className="peer-empty:decoration-slice-1 hidden text-center text-xl font-bold peer-empty:mt-8 peer-empty:block peer-empty:text-gray-500">
        今日放送のエピソードはありません。
      </p>
    </>
  );
};
