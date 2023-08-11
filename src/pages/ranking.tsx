import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import {
  getDailyEpisode,
  getDailyWork,
  getRanking,
} from "src/features/ranking/common/api/router";
import { Ranking } from "src/features/ranking/common/components";
import { Meta } from "src/libs/meta";
import { NextSSG, NextSSGPage, RankingPage } from "src/libs/next/types";
import { genBuildDate } from "src/utils/server/genBuildData";

const Page: NextSSGPage<RankingPage> = ({ data }) => <Ranking {...data} />;

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "ランキング - Nerd");

export default Page;

export const getStaticProps: NextSSG<RankingPage> = async () => {
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
