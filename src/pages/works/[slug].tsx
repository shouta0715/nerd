import React, { Suspense } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { Work } from "src/features/works/components/Work";

import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => (
  <section className="flex-1">
    <Suspense
      fallback={
        <div className="flex flex-col px-3 py-4 md:px-6">
          <div className="mx-auto  mb-4 h-2  w-full max-w-md  animate-pulse bg-slate-200" />
          <Skeleton theme="work" />
        </div>
      }
    >
      <Work />
    </Suspense>
  </section>
);

Page.getLayout = BasicLayout;

export default Page;
