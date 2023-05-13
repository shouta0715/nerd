import React from "react";
import { Faq } from "src/components/Elements/Faq";
import { BasicLayout } from "src/components/Layouts/BasicLayout";

import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <Faq />;

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "FAQ - Nerd");

export default Page;
