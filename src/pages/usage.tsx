import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { Usage } from "src/features/pages/usage";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <Usage />;

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "使い方 - Nerd");

export default Page;
