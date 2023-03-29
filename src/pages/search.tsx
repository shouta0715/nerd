import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { SeriesSkelton } from "src/components/Elements/Loader/loaders/SeriesSkelton";
import { SpSearchWorks } from "src/features/works/components/SpSearchWorks";

const DynamicSearchButton = dynamic(
  () =>
    import("src/components/Elements/SearchButton").then(
      (mod) => mod.SearchButton
    ),
  {
    ssr: false,
  }
);

const Search: NextPage = () => (
  <>
    <Suspense fallback={<SeriesSkelton />}>
      <SpSearchWorks />
    </Suspense>
    <DynamicSearchButton />
  </>
);

export default Search;
