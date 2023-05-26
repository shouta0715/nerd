import dynamic from "next/dynamic";
import React from "react";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { SeasonWorksList } from "src/features/lists/components/SeasonWorks";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";
import { ListPage } from "src/libs/next/types";

const DynamicSearchButton = dynamic(() =>
  import("src/components/Elements/SearchButton").then((mod) => mod.SearchButton)
);

export const Season = ({
  data,
  autoCompleteData,
}: ListPage<GetSeasonWorksQuery>) => (
  <section className="flex-1 animate-fadeUp">
    <ListTitle autoCompleteData={autoCompleteData} title="今期のアニメ" />
    <SeasonWorksList data={data} />
    <DynamicSearchButton />
  </section>
);
