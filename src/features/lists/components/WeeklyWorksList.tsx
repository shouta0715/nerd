import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";

import { useWeeklyWorks } from "src/features/lists/hooks/useWeeklyWorks";
import { GetWeeklyWorksQuery } from "src/graphql/work/workQuery.generated";

type Props = { data: GetWeeklyWorksQuery };

const DynamicWorkItem = dynamic(
  () =>
    import("src/features/works/components/WorkItem").then(
      (mod) => mod.WorkItem
    ),
  {
    ssr: false,
    loading: () => <Skeleton theme="work" />,
  }
);

export const WeeklyWorksList: FC<Props> = ({ data }) => {
  const { filterWorks } = useWeeklyWorks({ data });

  return (
    <>
      <ul className="peer grid grid-cols-1 gap-2 md:grid-cols-2  md:gap-4 lg:grid-cols-3">
        {filterWorks?.map((work) => (
          <DynamicWorkItem key={`work-${work.id}`} work={work} />
        ))}
      </ul>
      <p className="peer-empty:decoration-slice-1 hidden text-center text-xl font-bold peer-empty:mt-8 peer-empty:block peer-empty:text-gray-500">
        今週のアニメはありません。
      </p>
    </>
  );
};
