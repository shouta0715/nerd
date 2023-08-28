import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import {
  getWeeklyEpisode,
  getWeeklyWork,
} from "src/features/ranking/common/api/router";

import { Ranking } from "src/features/ranking/common/components";
import { Meta } from "src/libs/meta";
import { NextSSG, NextSSGPage, WeeklyRankingPage } from "src/libs/next/types";
import { genBuildDate } from "src/utils/server/genBuildData";

const Page: NextSSGPage<WeeklyRankingPage> = ({ data }) => (
  <Ranking
    buildDate={data.buildDate}
    episodes={data.weeklyEpisode.weekly_episodes_ranking}
    interval="weekly"
    totallingDate={data.totallingDate}
    works={data.weeklyWork.weekly_works_ranking}
  />
);

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "ランキング - Nerd");

export default Page;

export const getStaticProps: NextSSG<WeeklyRankingPage> = async () => {
  const { buildDate, oneWeekAgoGte, oneWeekAgoStr } = genBuildDate();
  const weeklyEpisode = await getWeeklyEpisode(oneWeekAgoGte);
  const weeklyWork = await getWeeklyWork(oneWeekAgoGte);

  return {
    props: {
      data: {
        weeklyEpisode,
        weeklyWork,
        buildDate: `${buildDate}`,
        totallingDate: `${oneWeekAgoStr}`,
      },
      error: null,
    },
  };
};
