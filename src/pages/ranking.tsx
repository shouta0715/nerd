import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { getRanking } from "src/features/ranking/common/api/router";
import { Ranking } from "src/features/ranking/common/components";
import { Meta } from "src/libs/meta";
import { NextSSG, NextSSGPage, RankingPage } from "src/libs/next/types";
import { genBuildDate, getTotallingDate } from "src/utils/server/genBuildData";

const Page: NextSSGPage<RankingPage> = ({ data }) => <Ranking {...data} />;

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "ランキング - Nerd");

export default Page;

export const getStaticProps: NextSSG<RankingPage> = async () => {
  const buildDate = genBuildDate();
  const totallingDate = getTotallingDate();
  const ranking = await getRanking();

  return {
    props: {
      data: {
        ranking,
        buildDate: `${buildDate}`,
        totallingDate: `${totallingDate}`,
      },
      error: null,
    },
  };
};
