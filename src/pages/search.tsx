import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { SpSearchWorks } from "src/features/works/components/SpSearchWorks";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <SpSearchWorks />;

Page.getLayout = BasicLayout;

export default Page;
