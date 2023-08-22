import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { Request } from "src/features/request/common/components/Request";
import { Meta } from "src/libs/meta";

import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <Request />;

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "アニメの追加リクエスト - Nerd");

export default Page;
