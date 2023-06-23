import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { Privacy } from "src/features/pages/privacy";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <Privacy />;

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "プライバシーポリシー - Nerd");

export default Page;
