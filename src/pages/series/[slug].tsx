import React, { Suspense } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { BasicLayout } from "src/components/Layouts/BasicLayout";
import { Series } from "src/features/series/components/Series";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => (
  <section className="flex min-h-screen flex-col bg-gray-50">
    <Suspense
      fallback={
        <div className="space-y-2 p-2">
          <p className="font-hiragino-sans mb-1 font-semibold">シリーズ一覧</p>
          <p className="mx-auto h-2 w-1/2 animate-pulse bg-slate-200" />
          <Skeleton props={{ is_short: true }} theme="work" />
        </div>
      }
    >
      <Series />
    </Suspense>
  </section>
);

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "Nerd");

export default Page;
