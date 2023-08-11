import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Image } from "src/components/Elements/Image";
import { getSeriesLink, getSeriesQuery } from "src/features/series/utils/link";
import {
  getSlugWorkLink,
  getSlugWorkQuery,
} from "src/features/works/common/utils/link";
import { GetDailyWorkRankingQuery } from "src/gql/graphql";

type Props = {
  work: GetDailyWorkRankingQuery["daily_works_ranking"][0];
  top: boolean;
  index: number;
};

export const DailyWork: FC<Props> = ({ work, top, index }) => {
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
          <h4 className="line-clamp-2 font-bold">{work.series_title}</h4>
        </div>
        <div
          className={clsx(
            "flex flex-1 flex-col items-center  gap-x-2 gap-y-6 bg-white/10 p-6 "
          )}
        >
          <p>
            総コメント数
            <span className="px-4 font-bold">
              {work.comments_aggregate.aggregate?.count}
            </span>
            件
          </p>
          <ButtonLink
            as={getSlugWorkLink({
              id: work.id,
              as: true,
            })}
            className="h-max border-white bg-indigo-600 py-1.5 font-bold text-white hover:bg-indigo-500"
            href={{
              pathname: getSlugWorkLink({
                id: work.id,
                as: false,
              }),
              query: getSlugWorkQuery({
                title: work.title,
                series_id: work.series_id,
                series_title: work.series_title,
              }),
            }}
            leftIcon={<ChevronDoubleRightIcon className="h-5 w-5" />}
            size="sm"
          >
            視聴する
          </ButtonLink>
          {work.series_id && (
            <ButtonLink
              as={getSeriesLink({
                series_id: work.series_id,
              })}
              className="mx-auto flex max-w-max flex-col items-center justify-center py-2"
              href={{
                pathname: getSeriesLink({
                  series_id: work.series_id,
                }),
                query: getSeriesQuery({
                  title: work.title,
                }),
              }}
              size="xs"
              theme="primary"
            >
              シリーズ一覧へ
            </ButtonLink>
          )}
        </div>
      </div>
    </li>
  );
};
