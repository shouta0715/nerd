import React from "react";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { TodayEpisodeList } from "src/features/lists/components/TodayEpisodeList";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import { ListPage } from "src/libs/next/types";

export const Today = ({
  data,
  autoCompleteData,
}: ListPage<GetTodayEpisodesQuery>) => (
  <section className="flex-1 animate-fadeUp pb-8">
    <ListTitle
      autoCompleteData={autoCompleteData}
      title="今日放送のエピソード"
    />
    <TodayEpisodeList data={data} />
  </section>
);
