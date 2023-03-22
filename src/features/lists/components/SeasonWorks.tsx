import React, { FC } from "react";
import { WorkItem } from "src/features/works/components/WorkItem";
import { useSeasonWorks } from "src/features/works/hooks/useSeasonWorks";

import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";

type Props = { data: GetSeasonWorksQuery };

export const SeasonWorksList: FC<Props> = ({ data }) => {
  const { filterWorks } = useSeasonWorks({ data });

  return (
    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4  lg:grid-cols-3">
      {filterWorks?.map((work) => (
        <WorkItem key={`work-${work.id}`} work={work} />
      ))}
    </ul>
  );
};
