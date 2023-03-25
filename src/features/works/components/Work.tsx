import { PlusIcon, ShareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Loader } from "src/components/Elements/Loader/Loader";
import { Text } from "src/components/Elements/Text";
import { WorkEpisodeItem } from "src/features/episodes/components/WorkEpisodeItem";
import { useQuerySeriesWork } from "src/features/works/api/useQuerySeriesWork";
import { WorkItem } from "src/features/works/components/WorkItem";

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
      <div className="w-full">
        <Loader className="mx-auto" />
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col px-6 py-4">
      <div>
        <Text
          className="mb-4 grid place-content-center text-xl font-bold"
          component="h1"
          ff="Hiragino Sans"
        >
          {data?.works_by_pk?.series_title}
        </Text>
        <ul className="mx-auto grid grid-cols-2 space-y-1 rounded-md border border-solid border-slate-200 bg-white p-3 shadow md:grid-cols-3 md:p-4 lg:grid-cols-4">
          {isPlaceholderData
            ? "Loading..."
            : data?.works_by_pk?.episodes.map((episode) => (
                <WorkEpisodeItem key={episode.id} episode={episode} />
              ))}
          <div className="col-span-2 flex w-full items-center justify-between border-t px-2 pt-4 md:col-span-3 lg:col-span-4">
            <div className="flex items-center justify-center space-x-2">
              <button className="mb-1 border-none">
                <PlusIcon className="h-5 w-5 stroke-2 md:h-6 md:w-6" />
              </button>
              <Text className="text-xs" component="span">
                マイリスト
              </Text>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <button className="mb-1 border-none">
                <ShareIcon className=" h-5 w-5 stroke-2 md:h-6 md:w-6" />
              </button>
              <Text className="text-xs" component="span">
                シェア
              </Text>
            </div>
          </div>
        </ul>
      </div>
      {series && (
        <div className="mt-6">
          <Text
            className="mb-4 grid text-xl font-bold"
            component="h1"
            ff="Hiragino Sans"
          >
            シリーズ一覧
          </Text>
          <ul className="grid grid-cols-1 gap-2  md:gap-4 lg:grid-cols-2">
            {isPlaceholderData
              ? "Loading"
              : data?.works.map((series_work, index) =>
                  series_work.has_episodes ? (
                    <WorkItem key={series_work.id} work={series_work} />
                  ) : (
                    <Link
                      key={series_work.id}
                      as={`/works/play/${series_work.id}`}
                      className={`
                      ${index === firstHasEpisodeIndex ? "col-start-1" : ""}
                    `}
                      href={{
                        pathname: `${`/works/play/${series_work.id}`}`,
                        query: {
                          work: [series_work.title, series_work.series_title],
                        },
                      }}
                    >
                      {series_work.series_title}
                    </Link>
                  )
                )}
          </ul>
        </div>
      )}
    </div>
  );
};
