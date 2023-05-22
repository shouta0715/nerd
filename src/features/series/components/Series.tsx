import { useRouter } from "next/router";
import React, { FC } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { Text } from "src/components/Elements/Text";
import { useQuerySeries } from "src/features/series/api/useQuerySeries";
import { SeriesItem } from "src/features/series/components/SeriesItem";
import { NotFoundError } from "src/libs/error";
import { DetailTitle } from "src/libs/meta/OnlyTitle";
import { validateData } from "src/utils/validateData";

export const Series: FC = () => {
  const router = useRouter();
  const { slug, series_title } = router.query;
  const { data, isLoading } = useQuerySeries({ slug: slug ?? null });
  const firstHasEpisodeIndex = data?.works?.findIndex(
    (episode) => !episode.has_episodes
  );

  if (isLoading) {
    return (
      <div className="space-y-4 px-3 py-4 md:px-6">
        <p className=" mb-1 font-semibold">シリーズ一覧</p>
        <p className="mx-auto h-2 w-1/2 animate-pulse rounded-md bg-slate-200" />
        <Skeleton theme="work" />
      </div>
    );
  }

  validateData({
    trigger: !data?.works[0],
    error: new NotFoundError(),
  });

  return (
    <>
      <DetailTitle title={`シリーズ一覧 ${data?.works?.[0].series_title}`} />
      <div className=" flex h-full animate-fadeUp flex-col  px-3 py-4 md:px-6">
        <p className=" mb-1 font-semibold">シリーズ一覧</p>
        <Text
          className="mb-4 grid place-content-center text-lg font-bold md:text-xl"
          component="h1"
        >
          {series_title ?? data?.works[0]?.title}
        </Text>

        <ul className="grid grid-cols-1 gap-2  md:gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {data?.works.map((series_work, index) => (
            <SeriesItem
              key={series_work.id}
              isFirstHasEpisodeIndex={firstHasEpisodeIndex === index}
              series_work={series_work}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
