import { Transition } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment } from "react";
import { Input } from "src/components/Elements/Input";

type Props = {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const SearchModal: FC<Props> = ({
  isSearchOpen,
  setIsSearchOpen,
  search,
  setSearch,
  submitHandler,
}) => (
  <Transition
    className="fixed inset-0 z-50 flex place-items-center   bg-black/50 md:hidden"
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
      className="relative mx-auto  w-4/5 max-w-md rounded-md bg-white"
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <form className="flex w-full " onSubmit={submitHandler}>
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 stroke-indigo-500" />
          <Input
            className="peer rounded-r-none px-8"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="タイトルで検索"
            type="text"
            value={search}
          />
          <button
            className="absolute right-2 top-1/2 block -translate-y-1/2 rounded-full bg-indigo-50 p-1 peer-placeholder-shown:hidden"
            onClick={() => setSearch("")}
            type="button"
          >
            <XMarkIcon className=" h-3 w-3  cursor-pointer fill-white stroke-indigo-500 stroke-2" />
          </button>
        </div>
        <button className="grid w-10 place-items-center rounded-md rounded-l-none bg-indigo-500">
          <MagnifyingGlassIcon className="h-6 w-6 stroke-white stroke-2" />
        </button>
      </form>
    </Transition.Child>
    <Transition.Child
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <button
        className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 translate-y-20 place-items-center rounded-full bg-white"
        onClick={() => setIsSearchOpen(false)}
      >
        <XMarkIcon className="h-6 w-6 stroke-2" />
      </button>
    </Transition.Child>
  </Transition>
);
