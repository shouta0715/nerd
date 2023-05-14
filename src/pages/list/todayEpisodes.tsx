import React from "react";
import { SsgError } from "src/components/Elements/error/SsgError";
import { BasicListLayout } from "src/components/Layouts/BasicLayout";
import { AutoCompleteData } from "src/features/episodes/types";
import { getTodayEpisodes } from "src/features/lists/api/router";
import { Today } from "src/features/pages/list/today";

import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import { InternalServerError } from "src/libs/error";
import { Meta } from "src/libs/meta";
import { NextSSG, NextSSGPage } from "src/libs/next/types";

type Props = {
  data: GetTodayEpisodesQuery;
  autoCompleteData: AutoCompleteData[];
};

const Page: NextSSGPage<Props> = ({ error, data }) =>
  error ? (
    <SsgError message="現在、今日のエピソードを更新しています。再度時間をおいてアクセスしてください。" />
  ) : (
    <Today {...data} />
  );

Page.getLayout = BasicListLayout;
Page.getTitle = Meta(() => "今日放送のアニメ一覧 - Nerd");

export default Page;

export const getStaticProps: NextSSG<Props> = async () => {
  const data = await getTodayEpisodes();
  const autoCompleteData: AutoCompleteData[] = data?.episodes
    .map((episode) => ({
      title: episode.work.series_title,
      episodeTitle: episode.title,
      number: episode.number,
      value: episode.title,
    }))
    .reverse();

  const error = data.episodes.some((episode) => episode.start_time === null)
    ? new InternalServerError().throwMessage()
    : null;

  return {
    props: {
      error,
      data: {
        data,
        autoCompleteData,
      },
    },
  };
};
