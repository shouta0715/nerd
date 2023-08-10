import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { RecommendPage } from "src/features/pages/recommend";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <RecommendPage />;

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "おすすめのアニメ - Nerd");

export default Page;
