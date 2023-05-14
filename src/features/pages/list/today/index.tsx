import dynamic from "next/dynamic";
import React from "react";
import { ListHeader } from "src/features/lists/components/ListHeader";
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
  <section className="flex-1 animate-fadeUp bg-gray-50">
    <ListHeader autoCompleteData={autoCompleteData} />
    <div className="container mx-auto">
      <div className="px-3 py-4 md:px-6">
        <ListTitle title="今日放送のエピソード" />
        <TodayEpisodeList data={data} />
      </div>
    </div>
    <DynamicSearchButton />
  </section>
);
