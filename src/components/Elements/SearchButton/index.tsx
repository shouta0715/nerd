import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSearch } from "src/components/Elements/SearchButton/useSearch";
import { SearchModal } from "src/components/Modal/Search";

export const SearchButton = () => {
  const { isSearchOpen, setIsSearchOpen, search, setSearch, submitHandler } =
    useSearch();

  return (
    <>
      <div className="sticky bottom-8 left-[86%] z-40 h-12 w-12 bg-transparent md:hidden">
        <button
          className="grid h-12 w-12 place-items-center rounded-full border-none bg-indigo-600 shadow-md shadow-indigo-400 outline-none md:hidden"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <MagnifyingGlassIcon
            aria-label="search"
            className="h-6 w-6 stroke-white stroke-2"
          />
        </button>
      </div>
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
