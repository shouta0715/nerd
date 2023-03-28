import { NextPage } from "next";
import React, { Suspense } from "react";
import { SearchButton } from "src/components/Elements/SearchButton";
import { SpSearchWorks } from "src/features/works/components/SpSearchWorks";

const Search: NextPage = () => (
  <>
    <Suspense>
      <SpSearchWorks />
    </Suspense>
    <SearchButton />
  </>
);

export default Search;
