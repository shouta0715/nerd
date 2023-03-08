import { Box } from "@mantine/core";
import { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { AutoCompleteData } from "src/features/episodes/types";
import { getTodayEpisodes } from "src/features/lists/api/router";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { TodayEpisodeList } from "src/features/lists/components/TodayEpisodeList";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  data: GetTodayEpisodesQuery;
  autoCompleteData: AutoCompleteData[];
};

const DynamicListHeader = dynamic(() =>
  import("src/features/lists/components/ListHeader").then(
    (mod) => mod.ListHeader
  )
);

const TodayEpisodes: NextPage<Props> = ({ autoCompleteData, data }) => (
  <Box component="section">
    <DynamicListHeader autoCompleteData={autoCompleteData} />
    <Box className="container mx-auto">
      <div className="p-6">
        <ListTitle title="今日放送のエピソード" />
        <TodayEpisodeList data={data} />
      </div>
    </Box>
  </Box>
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
