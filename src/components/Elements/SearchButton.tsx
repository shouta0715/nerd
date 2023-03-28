import { Transition } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React from "react";
import { Input } from "src/components/Elements/Input/Input";

export const SearchButton = () => {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search) {
      router.push({
        pathname: "/search",
        query: {
          q: search,
        },
      });
    }
  };

  return (
    <>
      <button
        className="fixed bottom-4 right-4 z-10 grid h-12 w-12 place-items-center rounded-full border-none  bg-indigo-500 shadow-md shadow-indigo-400 outline-none md:hidden"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <MagnifyingGlassIcon className="h-6 w-6 stroke-white stroke-2" />
      </button>
      <Transition
        className="fixed inset-0 z-50 flex   place-items-center bg-black/20 md:hidden"
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsSearchOpen(false);
        }}
        show={isSearchOpen}
      >
        <Transition.Child
          className="mx-auto w-4/5 max-w-md rounded-md bg-white"
          enter="transition-all duration-200"
          enterFrom="opacity-0 scale-0"
          enterTo="opacity-100 scale-100"
          leave="transition-all duration-150"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-0"
        >
          <div className="flex flex-col space-y-2 p-4">
            <header>
              <h2 className="text-center text-xl font-bold">検索</h2>
            </header>
            <form className="w-full space-x-4" onSubmit={submitHandler}>
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 stroke-indigo-500" />
                <Input
                  className="peer px-8"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="タイトルで検索"
                  type="text"
                  value={search}
                />
                <button
                  className="absolute top-1/2 right-2 block -translate-y-1/2 rounded-full bg-indigo-50 p-1 peer-placeholder-shown:hidden"
                  onClick={() => setSearch("")}
                  type="button"
                >
                  <XMarkIcon className=" h-3 w-3  cursor-pointer fill-white stroke-indigo-500 stroke-2" />
                </button>
              </div>
            </form>
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
};
