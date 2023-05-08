import React, { Suspense } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { BasicLayoutOnlyHeader } from "src/components/Layouts/BasicLayout";
import { PlayWork } from "src/features/works/components/PlayWork";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => (
  <Suspense fallback={<Skeleton theme="episode" />}>
    <PlayWork />
  </Suspense>
);

Page.getLayout = BasicLayoutOnlyHeader;
Page.getTitle = Meta(() => "Nerd");

export default Page;
