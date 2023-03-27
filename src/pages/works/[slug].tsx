import { NextPage } from "next";
import React, { Suspense } from "react";
import { Layout } from "src/components/Layout/Layout";
import { WorkSkelton } from "src/components/Layout/loading/WorkSkelton";
import { Work } from "src/features/works/components/Work";

const Index: NextPage = () => (
  <Layout>
    <section className="flex-1 bg-gray-50">
      <Suspense
        fallback={
          <div className="container mx-auto flex flex-col  px-6 py-4">
            <div className="mx-auto  mb-4 h-2  w-full max-w-md  animate-pulse bg-slate-200" />
            <WorkSkelton />
          </div>
        }
      >
        <Work />
      </Suspense>
    </section>
  </Layout>
);
export default Index;
