import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { SearchWorks } from "src/features/works/search/components/SearchWorks";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <SearchWorks />;

Page.getLayout = BasicLayout;

export default Page;
