import {
  ArrowSmallLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
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
    <section className="flex min-h-screen animate-fadeUp flex-col">
      <header className="sticky top-0 z-10 border-b bg-white/95">
        <div className="relative flex w-full items-center space-x-4 py-3 pl-2 pr-4">
          <button className="flex justify-center " onClick={router.back}>
            <ArrowSmallLeftIcon className="h-6 w-11 text-black" />
          </button>
          <Text
            className="grid flex-1 place-items-center text-base font-bold md:text-lg"
            component="p"
            ff="Hiragino Sans"
          >
            {series_title ?? data?.works[0].title}
          </Text>
          <Link
            className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text font-bold text-transparent"
            href="/"
          >
            Nerd
          </Link>
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
      <Link
        className="fixed bottom-4 right-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-indigo-500  shadow-md shadow-indigo-400 md:hidden"
        href="/search"
      >
        <MagnifyingGlassIcon className="h-6 w-6 stroke-white stroke-2" />
      </Link>
    </section>
  );
};
