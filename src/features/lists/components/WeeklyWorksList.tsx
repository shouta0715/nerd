import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { SeriesError } from "src/components/Error/items/SeriesError";

import { useWeeklyWorks } from "src/features/lists/hooks/useWeeklyWorks";
import { GetWeeklyWorksQuery } from "src/gql/graphql";

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

  return filterWorks.length > 0 ? (
    <ul className="peer grid grid-cols-1 gap-y-12 md:gap-16 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
      {filterWorks?.map((work) => (
        <DynamicWorkItem key={`work-${work.id}`} work={work} />
      ))}
    </ul>
  ) : (
    <div className="py-10">
      <SeriesError />
    </div>
  );
};
