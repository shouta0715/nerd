import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import { SearchModal } from "src/components/Elements/SearchModal";
import { useSearch } from "src/hooks/useSearch";

export const SearchButton = () => {
  const { isSearchOpen, setIsSearchOpen, search, setSearch, submitHandler } =
    useSearch();

  return (
    <div className="sticky bottom-4 left-[86%] h-12 w-12 bg-transparent">
      <button
        className="grid h-12 w-12 place-items-center rounded-full border-none bg-indigo-500 shadow-md shadow-indigo-400 outline-none md:hidden"
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
    </div>
  );
};
