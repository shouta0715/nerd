import React from "react";
import { useSearch } from "src/components/Elements/SearchButton/useSearch";
import { SearchModal } from "src/components/Modal/Search";

export const First = () => {
  const { isSearchOpen, setIsSearchOpen, search, setSearch, submitHandler } =
    useSearch();

  return (
    <>
      <button
        className="mt-1 text-sm text-indigo-500 underline md:hidden"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        検索はこちら
      </button>
      <SearchModal
        isSearchOpen={isSearchOpen}
        search={search}
        setIsSearchOpen={setIsSearchOpen}
        setSearch={setSearch}
        submitHandler={submitHandler}
      />
    </>
  );
};
