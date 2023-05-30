import React from "react";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { WeeklyWorksList } from "src/features/lists/components/WeeklyWorksList";
import { GetWeeklyWorksQuery } from "src/graphql/work/workQuery.generated";
import { ListPage } from "src/libs/next/types";

export const Weekly = ({
  data,
  autoCompleteData,
}: ListPage<GetWeeklyWorksQuery>) => (
  <section className="animate-fadeUp pb-8">
    <ListTitle autoCompleteData={autoCompleteData} title="今週のアニメ" />
    <WeeklyWorksList data={data} />
  </section>
);
