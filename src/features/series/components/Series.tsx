import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
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
    <section className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="container mx-auto flex px-2 py-4">
          <ArrowSmallLeftIcon className="h-6 w-6" onClick={router.back} />
          <Text
            className="grid flex-1 place-items-center text-lg font-bold"
            component="p"
            ff="Hiragino Sans"
          >
            {series_title ?? data?.works[0].title}の作品一覧
          </Text>
        </div>
      </header>
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-6 pb-12 pt-4">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {data?.works.map((series_work, index) => (
              <SeriesItem
                key={series_work.id}
                isFirstHasEpisodeIndex={firstHasEpisodeIndex === index}
                series_work={series_work}
              />
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
};
