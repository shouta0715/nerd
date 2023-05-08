import { NextPage } from "next";
import React, { Suspense } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { Layout } from "src/components/Layout/Layout";
import { Work } from "src/features/works/components/Work";

const Index: NextPage = () => (
  <Layout>
    <section className="flex-1 bg-gray-50">
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
  </Layout>
);
export default Index;
