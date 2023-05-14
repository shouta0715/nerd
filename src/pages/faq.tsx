import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { Faq } from "src/features/pages/faq";

import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <Faq />;

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "FAQ - Nerd");

export default Page;
