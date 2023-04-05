import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { useQuerySeries } from "src/features/series/api/useQuerySeries";
import { SeriesItem } from "src/features/series/components/SeriesItem";

export const Series: FC = () => {
  const router = useRouter();
  const { slug, series_title } = router.query;
  const { data } = useQuerySeries({ slug: slug ?? null });
  const firstHasEpisodeIndex = data?.works?.findIndex(
    (episode) => !episode.has_episodes
  );

  return (
    <div className="container mx-auto flex h-full animate-fadeUp flex-col  px-6 py-4">
      <p className="mb-1 font-hiragino-sans font-semibold">シリーズ一覧</p>
      <Text
        className="mb-4 grid place-content-center text-lg font-bold md:text-xl"
        component="h1"
        ff="Hiragino Sans"
      >
        {series_title ?? data?.works[0].title}
      </Text>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {data?.works.map((series_work, index) => (
          <SeriesItem
            key={series_work.id}
            isFirstHasEpisodeIndex={firstHasEpisodeIndex === index}
            series_work={series_work}
          />
        ))}
      </ul>

      <Link
        className="fixed bottom-4 right-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-indigo-500  shadow-md shadow-indigo-400 md:hidden"
        href="/search"
      >
        <MagnifyingGlassIcon className="h-6 w-6 stroke-white stroke-2" />
      </Link>
    </div>
  );
};
