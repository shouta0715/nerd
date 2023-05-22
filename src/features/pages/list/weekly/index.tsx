import dynamic from "next/dynamic";
import React from "react";
import { ListHeader } from "src/features/lists/components/ListHeader";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { WeeklyWorksList } from "src/features/lists/components/WeeklyWorksList";
import { GetWeeklyWorksQuery } from "src/graphql/work/workQuery.generated";
import { ListPage } from "src/libs/next/types";

const DynamicSearchButton = dynamic(
  () =>
    import("src/components/Elements/SearchButton").then(
      (mod) => mod.SearchButton
    ),
  {
    ssr: false,
  }
);

export const Weekly = ({
  data,
  autoCompleteData,
}: ListPage<GetWeeklyWorksQuery>) => (
  <section className="animate-fadeUp">
    <ListHeader autoCompleteData={autoCompleteData} />
    <div className="px-3 py-4 md:px-6">
      <ListTitle title="今週のアニメ" />
      <WeeklyWorksList data={data} />
    </div>
    <DynamicSearchButton />
  </section>
);
