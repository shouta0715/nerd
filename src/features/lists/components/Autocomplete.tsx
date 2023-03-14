import { Combobox, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { FC, Fragment } from "react";
import { AutoCompleteItem } from "src/components/Elements/AutoCompleteItem";
import { AutoCompleteData } from "src/features/episodes/types";
import { useSearchInputState } from "src/store/input/searchInput";

type Props = {
  autoCompleteData: AutoCompleteData[];
};

export const Autocomplete: FC<Props> = ({ autoCompleteData }) => {
  const setSearchInput = useSearchInputState((state) => state.setSearchInput);
  const searchInput = useSearchInputState((state) => state.searchInput);

  const filteredData = autoCompleteData.filter(
    (item) =>
      item.title.includes(searchInput.toLowerCase().trim()) ||
      item.episodeTitle?.includes(searchInput.toLowerCase().trim())
  );

  return (
    <div className="relative w-full">
      <Combobox
        value={searchInput}
        onChange={(value) => {
          setSearchInput(value);
        }}
      >
        <div className="peer relative mx-auto w-full max-w-md">
          <button className="absolute inset-y-0 left-0 flex items-center pl-2">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-indigo-400"
              onClick={() => setSearchInput("")}
            />
          </button>
          <Combobox.Input
            className="  block  w-full appearance-none rounded-full border  border-gray-300 py-2 px-8 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  "
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
          <button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <XMarkIcon
              className="h-5 w-5 text-gray-400"
              onClick={() => setSearchInput("")}
            />
          </button>
        </div>
        <Transition
          as={Fragment}
          show={searchInput !== "" && filteredData.length !== 0}
          enter="transition ease-out duration-100 origin-top"
          enterFrom="opacity-0 scale-y-0"
          enterTo="opacity-100 scale-y-1"
          leave="transition ease-in duration-75 origin-top"
          leaveFrom="opacity-100 scale-y-1"
          leaveTo="opacity-0 scale-y-0 "
        >
          <Combobox.Options className="group absolute top-10 left-1/2 z-50 max-h-96 w-full max-w-md -translate-x-1/2 overflow-y-hidden rounded-md border bg-white p-2 text-black hover:!block peer-[&:not(:focus-within)]:hidden ">
            {filteredData.map((item) => (
              <Combobox.Option
                className="h-max bg-white"
                key={item.title}
                value={item.title}
              >
                <AutoCompleteItem
                  title={item.title}
                  number={item.number}
                  episodeTitle={item.episodeTitle}
                />
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
};
