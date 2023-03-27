import React, { FC } from "react";
import { useWeeklyWorks } from "src/features/lists/components/hooks/useWeeklyWorks";
import { WorkItem } from "src/features/works/components/WorkItem";
import { GetWeeklyWorksQuery } from "src/graphql/work/workQuery.generated";

type Props = { data: GetWeeklyWorksQuery };

export const WeeklyWorksList: FC<Props> = ({ data }) => {
  const { filterWorks } = useWeeklyWorks({ data });

  return (
    <>
      <ul className="peer grid grid-cols-1 gap-2 md:grid-cols-2  md:gap-4 lg:grid-cols-3">
        {filterWorks?.map((work) => (
          <WorkItem key={`work-${work.id}`} work={work} />
        ))}
      </ul>
      <p className="peer-empty:decoration-slice-1 hidden text-center text-xl font-bold peer-empty:mt-8 peer-empty:block peer-empty:text-gray-500">
        今週のアニメはありません。
      </p>
    </>
  );
};
