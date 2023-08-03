import React, { FC } from "react";
import { SeriesError } from "src/components/Error/items/SeriesError";
import { useSeasonWorks } from "src/features/lists/hooks/useSeasonWorks";
import { WorkItem } from "src/features/works/components/WorkItem";
import { GetSeasonWorksQuery } from "src/gql/graphql";

type Props = { data: GetSeasonWorksQuery };

export const SeasonWorksList: FC<Props> = ({ data }) => {
  const { filterWorks } = useSeasonWorks({ data });

  return filterWorks?.length > 0 ? (
    <ul className="grid grid-cols-1 gap-y-12 md:gap-16 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
      {filterWorks?.map((work) => (
        <WorkItem key={`work-${work.id}`} work={work} />
      ))}
    </ul>
  ) : (
    <div className="py-10">
      <SeriesError />
    </div>
  );
};
