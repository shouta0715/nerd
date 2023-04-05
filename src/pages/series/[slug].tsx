import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { SeriesSkelton } from "src/components/Elements/Loader/loaders/SeriesSkelton";
import { Layout } from "src/components/Layout/Layout";
import { Series } from "src/features/series/components/Series";

const DynamicSearchButton = dynamic(
  () =>
    import("src/components/Elements/SearchButton").then(
      (mod) => mod.SearchButton
    ),
  {
    ssr: false,
  }
);

const Index: NextPage = () => (
  <Layout>
    <section className="flex min-h-screen flex-col bg-gray-50">
      <Suspense fallback={<SeriesSkelton />}>
        <Series />
      </Suspense>
    </section>
    <DynamicSearchButton />
  </Layout>
);

export default Index;
