import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Input } from "src/components/Elements/Input";
import { useSearchWorks } from "src/features/works/hooks/useSearchWorks";
import { useSearchWorksState } from "src/features/works/store";

export const SearchWorksForm = () => {
  const { submitHandler, setSearch, search } = useSearchWorks();
  const [data, setData] = useSearchWorksState((state) => [
    state.data,
    state.setData,
  ]);

  return (
    <form className="hidden w-full space-x-4 md:flex" onSubmit={submitHandler}>
      <div className="relative flex-1">
        <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 stroke-indigo-500" />
        <Input
          className="peer rounded-full bg-gray-50 px-8 "
          onChange={(e) => setSearch(e.target.value)}
          placeholder="タイトルで検索..."
          type="text"
          value={search}
        />
        <button
          className="absolute right-2 top-1/2 block -translate-y-1/2 rounded-full bg-indigo-50 p-1 peer-placeholder-shown:hidden"
          onClick={() => {
            setSearch("");
            if (!data?.length) setData(null);
          }}
          type="button"
        >
          <XMarkIcon className=" h-3 w-3  cursor-pointer fill-white stroke-indigo-500 stroke-2" />
        </button>
      </div>
    </form>
  );
};
