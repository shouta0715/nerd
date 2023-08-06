import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { WorkItem } from "src/features/works/components/WorkItem";
import {
  getSlugWorkLink,
  getSlugWorkQuery,
} from "src/features/works/utils/link";
import { GetSeriesQuery } from "src/gql/graphql";

type Props = {
  series_work: GetSeriesQuery["works"][0];
  isFirstHasEpisodeIndex: boolean;
};

export const SeriesItem: FC<Props> = ({
  series_work,
  isFirstHasEpisodeIndex,
}) =>
  series_work.has_episodes ? (
    <WorkItem isSeriesPage work={series_work} />
  ) : (
    <li
      className={`group relative flex animate-fadeUp flex-col items-center space-x-2 rounded-2xl   border border-solid  border-slate-200 bg-white bg-white/70 p-3  shadow-lg ring-1 ring-gray-900/5 md:p-4 ${
        isFirstHasEpisodeIndex ? "col-start-1" : ""
      }`}
    >
      <span className="mb-2.5 inline-block flex-1 font-bold">
        {series_work.series_title}
      </span>
      <ButtonLink
        as={getSlugWorkLink({
          id: series_work.id,
          as: true,
        })}
        className="h-max border-white bg-indigo-500 font-bold text-white hover:bg-indigo-600"
        href={{
          pathname: getSlugWorkLink({
            id: series_work.id,
            as: false,
          }),
          query: getSlugWorkQuery({
            title: series_work.title,
            series_id: series_work.series_id,
            series_title: series_work.series_title,
          }),
        }}
        leftIcon={<ChevronDoubleRightIcon className="h-5 w-5" />}
        size="sm"
      >
        視聴する
      </ButtonLink>
    </li>
  );
