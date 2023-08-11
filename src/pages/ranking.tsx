import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => {
  return <div>ranking</div>;
};

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "ランキング - Nerd");

export default Page;
