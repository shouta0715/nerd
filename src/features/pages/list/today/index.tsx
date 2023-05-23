import dynamic from "next/dynamic";
import React from "react";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { TodayEpisodeList } from "src/features/lists/components/TodayEpisodeList";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
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

export const Today = ({
  data,
  autoCompleteData,
}: ListPage<GetTodayEpisodesQuery>) => (
  <section className="flex-1 animate-fadeUp py-4">
    <ListTitle
      autoCompleteData={autoCompleteData}
      title="今日放送のエピソード"
    />
    <TodayEpisodeList data={data} />
    <DynamicSearchButton />
  </section>
);
