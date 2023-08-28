import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { getRanking } from "src/features/ranking/common/api/router";
import { AllRanking } from "src/features/ranking/common/components/AllRanking";
import { Meta } from "src/libs/meta";
import { NextSSG, NextSSGPage, AllRankingPage } from "src/libs/next/types";
import { genBuildDate } from "src/utils/server/genBuildData";

const Page: NextSSGPage<AllRankingPage> = ({ data }) => (
  <AllRanking {...data} />
);

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "ランキング - Nerd");

export default Page;

export const getStaticProps: NextSSG<AllRankingPage> = async () => {
  const { buildDate, totallingDate } = genBuildDate();
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
