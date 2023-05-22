import React, { FC } from "react";
import { useSeasonWorks } from "src/features/lists/hooks/useSeasonWorks";
import { WorkItem } from "src/features/works/components/WorkItem";

import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";

type Props = { data: GetSeasonWorksQuery };

export const SeasonWorksList: FC<Props> = ({ data }) => {
  const { filterWorks } = useSeasonWorks({ data });

  return (
    <>
      <ul className="peer grid grid-cols-1  gap-y-12 md:grid-cols-2 md:gap-16  lg:grid-cols-3">
        {filterWorks?.map((work) => (
          <WorkItem key={`work-${work.id}`} work={work} />
        ))}
      </ul>
      <p className="peer-empty:decoration-slice-1 hidden text-center text-xl font-bold peer-empty:mt-8 peer-empty:block peer-empty:text-gray-500">
        今期のアニメはありません。
      </p>
    </>
  );
};
