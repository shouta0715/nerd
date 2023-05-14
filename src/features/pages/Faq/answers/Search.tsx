import React from "react";
import { SearchModal } from "src/components/Elements/SearchModal";
import { useSearch } from "src/hooks/useSearch";

export const Search = () => {
  const { setIsSearchOpen, search, setSearch, submitHandler, isSearchOpen } =
    useSearch();

  return (
    <>
      <p className="hidden md:block">
        左の検索フォームにタイトルを入力すると、そのタイトルのアニメを検索できます。
      </p>
      <button
        className="mt-2 text-blue-500 underline md:hidden"
        onClick={() => setIsSearchOpen(true)}
      >
        こちらから検索できます。
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
