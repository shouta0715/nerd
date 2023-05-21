import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { Input } from "src/components/Elements/Input";
import { Modal } from "src/components/Modal";

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
}) => {
  return (
    <Modal
      onClose={() => setIsSearchOpen(false)}
      open={isSearchOpen}
      panelStyle="bg-transparent shadow-none p-0 sm:p-0 rounded-none"
    >
      <Modal.Content>
        <form className="flex w-full p-2" onSubmit={submitHandler}>
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
      </Modal.Content>
    </Modal>
  );
};
