import React, { Suspense } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { Work } from "src/features/works/slug/components/Work";
import { Meta } from "src/libs/meta";

import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => (
  <section className="flex-1">
    <Suspense fallback={<Skeleton theme="withSeries" />}>
      <Work />
    </Suspense>
  </section>
);

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "Nerd");

export default Page;
