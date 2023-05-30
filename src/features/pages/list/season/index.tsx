import React from "react";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { SeasonWorksList } from "src/features/lists/components/SeasonWorks";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";
import { ListPage } from "src/libs/next/types";

export const Season = ({
  data,
  autoCompleteData,
}: ListPage<GetSeasonWorksQuery>) => (
  <section className="flex-1 animate-fadeUp pb-8">
    <ListTitle autoCompleteData={autoCompleteData} title="今期のアニメ" />
    <SeasonWorksList data={data} />
  </section>
);
