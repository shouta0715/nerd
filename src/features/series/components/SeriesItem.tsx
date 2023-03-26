import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { FC } from "react";
import { WorkItem } from "src/features/works/components/WorkItem";
import { GetSeriesQuery } from "src/graphql/work/workQuery.generated";

type Props = {
  series_work: GetSeriesQuery["works"][0];
  isFirstHasEpisodeIndex: boolean;
};

export const SeriesItem: FC<Props> = ({
  series_work,
  isFirstHasEpisodeIndex,
}) =>
  series_work.has_episodes ? (
    <WorkItem work={series_work} />
  ) : (
    <Link
      as={`/works/play/${series_work.id}`}
      className={`group relative flex items-center rounded-md border border-solid border-slate-200 bg-white p-3 shadow hover:shadow-none md:p-4 ${
        isFirstHasEpisodeIndex ? "col-start-1" : ""
      }`}
      href={{
        pathname: `${`/works/play/${series_work.id}`}`,
        query: {
          work: [series_work.title, series_work.series_title],
        },
      }}
    >
      <CubeTransparentIcon className="absolute right-4 h-6 w-6 stroke-gray-300 transition-transform group-hover:rotate-90 group-hover:stroke-indigo-500" />
      <div className="absolute top-0 right-0 h-[2px] w-0 group-hover:animate-border-width" />
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:animate-border-width" />
      <div className="absolute right-0 bottom-0 h-full w-[2px] group-hover:animate-border-height" />
      <div className="absolute top-0 left-0 h-full w-[2px] group-hover:animate-border-height" />
      <span className="block h-max w-full pr-10">
        {series_work.series_title}
      </span>
    </Link>
  );
