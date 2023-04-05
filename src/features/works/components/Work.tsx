import { useRouter } from "next/router";
import React, { FC } from "react";
import { WorkSkelton } from "src/components/Elements/Loader/loaders/WorkSkelton";
import { Text } from "src/components/Elements/Text";
import { WorkEpisodeItem } from "src/features/episodes/components/WorkEpisodeItem";
import { SeriesItem } from "src/features/series/components/SeriesItem";
import { useQuerySeriesWork } from "src/features/works/api/useQuerySeriesWork";

export const Work: FC = () => {
  const router = useRouter();
  const { slug, series, work } = router.query;
  const { data, isPlaceholderData, isLoading } = useQuerySeriesWork({
    slug,
    series_id: series,
    work,
  });
  const firstHasEpisodeIndex = data?.works?.findIndex(
    (episode) => !episode.has_episodes
  );

  if (isLoading) {
    return (
      <div className="container mx-auto flex flex-col px-3 py-4 md:px-6">
        <div className="mx-auto  mb-4 h-2  w-full max-w-md  animate-pulse bg-slate-200" />
        <WorkSkelton />
      </div>
    );
  }

  return (
    <div className="container mx-auto flex h-full animate-fadeUp flex-col  px-3 py-4 md:px-6">
      <Text
        className="mb-4 grid place-content-center text-lg font-bold md:text-xl"
        component="h1"
        ff="Hiragino Sans"
      >
        {data?.works_by_pk?.series_title}
      </Text>

      {isPlaceholderData ? (
        <WorkSkelton />
      ) : (
        <ul className="grid grid-cols-2 space-y-1 rounded-md border border-solid border-slate-200 bg-white p-3 shadow md:grid-cols-3 md:p-4 lg:grid-cols-4">
          {data?.works_by_pk?.episodes.map((episode) => (
            <WorkEpisodeItem key={episode.id} episode={episode} />
          ))}
        </ul>
      )}

      {series && (
        <div className="mt-6">
          <Text
            className="mb-4 text-xl font-bold"
            component="h1"
            ff="Hiragino Sans"
          >
            シリーズ一覧
          </Text>
          <ul className="grid grid-cols-1 gap-2  md:gap-4 lg:grid-cols-[repeat(auto-fit,minmax(calc(50%-1rem),1fr))]">
            {isPlaceholderData
              ? "Loading"
              : data?.works.map((series_work, index) => (
                  <SeriesItem
                    key={series_work.id}
                    isFirstHasEpisodeIndex={firstHasEpisodeIndex === index}
                    series_work={series_work}
                  />
                ))}
          </ul>
        </div>
      )}
    </div>
  );
};
