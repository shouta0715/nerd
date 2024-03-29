/* eslint-disable react/no-array-index-key */
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { Text } from "src/components/Elements/Text";
import { WorkEpisodeItem } from "src/features/episodes/components/WorkEpisodeItem";
import { SeriesItem } from "src/features/series/components/SeriesItem";
import { useQuerySeriesWork } from "src/features/works/slug/api/useQuerySeriesWork";
import { NotFoundError } from "src/libs/error";
import { DetailTitle } from "src/libs/meta/OnlyTitle";
import { validateData } from "src/utils/client/validateData";

export const Work: FC = () => {
  const router = useRouter();
  const { slug, series, work } = router.query;
  const { data, isPlaceholderData, isPending } = useQuerySeriesWork({
    slug,
    series_id: series,
    work,
  });
  const firstHasEpisodeIndex = data?.works?.findIndex(
    (episode) => !episode.has_episodes
  );

  if (isPending) {
    return <Skeleton theme="withSeries" />;
  }

  validateData({
    trigger: !data?.works_by_pk,
    error: new NotFoundError(),
  });

  return (
    <>
      <DetailTitle title={data?.works_by_pk?.series_title} />
      <div className="flex h-full animate-fadeUp flex-col">
        <Text
          className="mb-4 grid place-content-center text-lg font-bold md:text-xl"
          component="h2"
        >
          {data?.works_by_pk?.series_title}
        </Text>

        {isPlaceholderData ? (
          <Skeleton theme="work" />
        ) : (
          <ul className="grid grid-cols-2  rounded-2xl border border-solid  border-slate-200 p-3 shadow-lg ring-1 ring-gray-900/5 md:grid-cols-3  md:p-4  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
            {data?.works_by_pk?.episodes.map((episode) => (
              <WorkEpisodeItem
                key={episode.id}
                episode={episode}
                series_id={data?.works_by_pk?.series_id}
                work_id={data?.works_by_pk?.id}
                work_title={data?.works_by_pk?.series_title}
              />
            ))}
          </ul>
        )}

        {series && (
          <div className="mt-20">
            <Text className="mb-4 text-xl font-bold" component="h1">
              {isPlaceholderData || isPending
                ? "シリーズ一覧"
                : data && data.works.length > 0 && "シリーズ一覧"}
            </Text>
            <ul className="grid grid-cols-1 gap-y-12  md:gap-12 lg:grid-cols-2  2xl:grid-cols-3">
              {isPlaceholderData
                ? Array.from({ length: 8 }).map((_, index) => (
                    <Skeleton
                      key={`work-skelton-${index}`}
                      props={{ is_short: true }}
                      theme="work"
                    />
                  ))
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
    </>
  );
};
