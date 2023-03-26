import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
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
    <li
      className={`group relative flex items-center space-x-2 rounded-md border border-solid border-slate-200 bg-white p-3 shadow md:p-4 ${
        isFirstHasEpisodeIndex ? "col-start-1" : ""
      }`}
    >
      <span className="flex-1 font-bold">{series_work.series_title}</span>
      <ButtonLink
        as={`/works/play/${series_work.id}`}
        className="h-max border-indigo-50 bg-indigo-50 font-bold text-indigo-500 hover:bg-indigo-100"
        href={{
          pathname: `${`/works/play/${series_work.id}`}`,
          query: {
            work: [series_work.title, series_work.series_title],
          },
        }}
        size="sm"
      >
        視聴する
      </ButtonLink>
    </li>
  );
