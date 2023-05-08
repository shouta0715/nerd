import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { Request } from "src/features/request/components/Request";

import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <Request />;

Page.getLayout = BasicLayout;

export default Page;
