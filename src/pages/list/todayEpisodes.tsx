import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { BasicListLayout } from "src/components/Layouts/BasicLayout";
import { AutoCompleteData } from "src/features/episodes/types";
import { getTodayEpisodes } from "src/features/lists/api/router";
import { ListHeader } from "src/features/lists/components/ListHeader";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { TodayEpisodeList } from "src/features/lists/components/TodayEpisodeList";

import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const DynamicSearchButton = dynamic(
  () =>
    import("src/components/Elements/SearchButton").then(
      (mod) => mod.SearchButton
    ),
  {
    ssr: false,
  }
);

type Props = {
  data: GetTodayEpisodesQuery;
  autoCompleteData: AutoCompleteData[];
};

const Page: NextPageWithLayout<Props> = ({ autoCompleteData, data }) => (
  <section className="min-h-screen animate-fadeUp bg-gray-50">
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

Page.getLayout = BasicListLayout;
Page.getTitle = Meta(() => "今日放送のアニメ一覧 - Nerd");

export default Page;

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
