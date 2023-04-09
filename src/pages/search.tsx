import { NextPage } from "next";
import React, { Suspense } from "react";
import { WorkSkelton } from "src/components/Elements/Loader/loaders/WorkSkelton";
import { Layout } from "src/components/Layout/Layout";
import { SpSearchWorks } from "src/features/works/components/SpSearchWorks";

const Search: NextPage = () => (
  <Layout>
    <Suspense
      fallback={
        <div className="flex flex-col px-3 py-4 md:px-6">
          <div className="mx-auto  mb-4 h-2  w-full max-w-md  animate-pulse bg-slate-200" />
          <WorkSkelton />
        </div>
      }
    >
      <SpSearchWorks />
    </Suspense>
  </Layout>
);

export default Search;
