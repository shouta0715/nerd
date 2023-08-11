import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Image } from "src/components/Elements/Image";
import {
  getEpisodeLink,
  getEpisodeQuery,
} from "src/features/episodes/utils/link";
import { getSeriesLink, getSeriesQuery } from "src/features/series/utils/link";
import {
  getWorksLink,
  getWorksQuery,
} from "src/features/works/common/utils/link";
import { GetDailyEpisodeRankingQuery } from "src/gql/graphql";

type Props = {
  index: number;
  top: boolean;
  episode: GetDailyEpisodeRankingQuery["daily_episodes_ranking"][0];
};

export const DailyEpisode: FC<Props> = ({ episode, top, index }) => {
  return (
    <li className="flex flex-col gap-y-8">
      <p className="flex items-center gap-x-2 font-semibold">
        <span className="block h-6 w-1.5 bg-gray-900" />第{index + 1}位
      </p>
      <div className="border-slate-20 xl:row-end-10 relative flex w-full  flex-1 animate-fadeUp flex-col rounded-2xl border shadow-lg ring-1 ring-gray-900/5">
        {top && (
          <Image
            alt="1番"
            className="absolute -left-3 -top-6  -rotate-12 lg:block"
            height={64}
            src="/king.png"
            width={64}
          />
        )}
        <div className="flex h-20 w-full items-center justify-center overflow-hidden rounded-t-xl bg-gray-800 p-6 text-white ">
          <h4 className="line-clamp-2 font-bold">
            {episode.work.series_title}
          </h4>
        </div>
        <div className="flex flex-1 flex-col justify-between gap-y-6 bg-white/10 p-6 leading-7">
          <div className="flex flex-col items-center justify-center gap-x-2">
            <p className="min-w-max">第{episode.number}話</p>
            <Link
              as={getEpisodeLink({
                as: true,
                id: episode.id,
                end_time: episode.end_time,
              })}
              className="line-clamp-3 flex font-semibold text-indigo-600 hover:text-indigo-500 hover:underline"
              href={{
                pathname: getEpisodeLink({
                  as: false,
                  id: episode.id,
                  end_time: episode.end_time,
                }),
                query: getEpisodeQuery({
                  episode,
                  title: episode.work.title,
                  work_id: episode.work.id,
                  series_id: episode.work.series_id,
                  today: false,
                }),
              }}
            >
              {episode.title}
            </Link>
          </div>
          <p className="flex justify-center">
            総コメント数
            <span className="px-4 font-bold">
              {episode.comments_aggregate.aggregate?.count}
            </span>
            件
          </p>
          <div className="grid justify-center gap-2">
            {episode.work.series_id && (
              <ButtonLink
                as={getSeriesLink({
                  series_id: episode.work.series_id,
                })}
                className="mx-auto flex max-w-max flex-col items-center justify-center py-2"
                href={{
                  pathname: getSeriesLink({
                    series_id: episode.work.series_id,
                  }),
                  query: getSeriesQuery({
                    title: episode.work.title,
                  }),
                }}
                size="xs"
                theme="primary"
              >
                シリーズ一覧へ
              </ButtonLink>
            )}
            <ButtonLink
              as={getWorksLink({
                id: episode.work.id,
                series_id: episode.work.series_id,
                as: true,
              })}
              className="mx-auto flex w-full max-w-max items-center justify-center py-2"
              href={{
                pathname: getWorksLink({
                  id: episode.work.id,
                  as: false,
                }),
                query: getWorksQuery({
                  series_id: episode.work.series_id,
                  title: episode.work.title,
                  series_title: episode.work.series_title,
                }),
              }}
              leftIcon={<Square3Stack3DIcon className="h-5 w-5" />}
              size="xs"
              theme="dark"
            >
              他のエピソードを見る
            </ButtonLink>
          </div>
        </div>
      </div>
    </li>
  );
};
