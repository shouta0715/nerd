import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";
import { SearchModal } from "src/components/Elements/SearchModal";
import { useSearch } from "src/hooks/useSearch";

export const SearchButton = () => {
  const { isSearchOpen, setIsSearchOpen, search, setSearch, submitHandler } =
    useSearch();

  return (
    <>
      <button
        className="fixed bottom-4 right-4 z-10 grid h-12 w-12 place-items-center rounded-full border-none  bg-indigo-500 shadow-md shadow-indigo-400 outline-none md:hidden"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <MagnifyingGlassIcon className="h-6 w-6 stroke-white stroke-2" />
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
