import React, { Suspense } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { BasicLayoutOnlyHeader } from "src/components/Layouts/BasicLayout";
import { Episode } from "src/features/episodes/components/Episode";

import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => (
  <Suspense fallback={<Skeleton theme="episode" />}>
    <Episode />
  </Suspense>
);

Page.getLayout = BasicLayoutOnlyHeader;

export default Page;
