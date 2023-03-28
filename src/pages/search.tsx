import { NextPage } from "next";
import React, { Suspense } from "react";
import { SeriesSkelton } from "src/components/Elements/Loader/loaders/SeriesSkelton";
import { SearchButton } from "src/components/Elements/SearchButton";
import { SpSearchWorks } from "src/features/works/components/SpSearchWorks";

const Search: NextPage = () => (
  <>
    <Suspense fallback={<SeriesSkelton />}>
      <SpSearchWorks />
    </Suspense>
    <SearchButton />
  </>
);

export default Search;
