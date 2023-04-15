import { NextPage } from "next";
import React, { Suspense } from "react";
import { WorkSkelton } from "src/components/Elements/Loader/loaders/WorkSkelton";
import { Layout } from "src/components/Layout/Layout";
import { Series } from "src/features/series/components/Series";

const Index: NextPage = () => (
  <Layout>
    <section className="flex min-h-screen flex-col bg-gray-50">
      <Suspense
        fallback={
          <div className="space-y-2 p-2">
            <p className="mb-1 font-hiragino-sans font-semibold">
              シリーズ一覧
            </p>
            <p className="mx-auto h-2 w-1/2 animate-pulse bg-slate-200" />
            <WorkSkelton is_short />
          </div>
        }
      >
        <Series />
      </Suspense>
    </section>
  </Layout>
);

export default Index;
