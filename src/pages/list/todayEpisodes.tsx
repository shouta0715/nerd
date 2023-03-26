import { GetStaticProps, NextPage } from "next";
import React from "react";
import { AutoCompleteData } from "src/features/episodes/types";
import { getTodayEpisodes } from "src/features/lists/api/router";
import { ListHeader } from "src/features/lists/components/ListHeader";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { TodayEpisodeList } from "src/features/lists/components/TodayEpisodeList";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  data: GetTodayEpisodesQuery;
  autoCompleteData: AutoCompleteData[];
};

const TodayEpisodes: NextPage<Props> = ({ autoCompleteData, data }) => (
  <section className="min-h-screen animate-fadeUp bg-gray-50">
    <ListHeader autoCompleteData={autoCompleteData} />
    <div className="container mx-auto">
      <div className="p-6">
        <ListTitle title="今日放送のエピソード" />
        <TodayEpisodeList data={data} />
      </div>
    </div>
  </section>
);

export default TodayEpisodes;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getTodayEpisodes();
  const autoCompleteData: AutoCompleteData[] = data?.episodes
    .map((episode) => ({
      title: episode.work.series_title,
      episodeTitle: episode.title,
      number: episode.number,
      value: episode.title,
    }))
    .reverse();

  return {
    props: {
      data,
      autoCompleteData,
    },
  };
};
