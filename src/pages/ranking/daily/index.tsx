import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import {
  getDailyEpisode,
  getDailyWork,
  getRanking,
} from "src/features/ranking/common/api/router";
import { Ranking } from "src/features/ranking/common/components";
import { Meta } from "src/libs/meta";
import { NextSSG, NextSSGPage, DailyRankingPage } from "src/libs/next/types";
import { genBuildDate } from "src/utils/server/genBuildData";

const Page: NextSSGPage<DailyRankingPage> = ({ data }) => (
  <Ranking
    buildDate={data.buildDate}
    episodes={data.dailyEpisode.daily_episodes_ranking}
    interval="daily"
    totallingDate={data.totallingDate}
    works={data.dailyWork.daily_works_ranking}
  />
);

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "1日のランキング - Nerd");

export default Page;

export const getStaticProps: NextSSG<DailyRankingPage> = async () => {
  const { buildDate, totallingDate, _gte } = genBuildDate();
  const ranking = await getRanking();
  const dailyEpisode = await getDailyEpisode(_gte);
  const dailyWork = await getDailyWork(_gte);

  return {
    props: {
      data: {
        ranking,
        dailyEpisode,
        dailyWork,
        buildDate: `${buildDate}`,
        totallingDate: `${totallingDate}`,
      },
      error: null,
    },
  };
};
