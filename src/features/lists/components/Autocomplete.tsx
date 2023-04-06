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
  const [comboboxValue, setComboboxValue] = React.useState("");

  const filteredData = autoCompleteData.filter(
    (item) =>
      item.title.toLowerCase().includes(comboboxValue.toLowerCase().trim()) ||
      item.episodeTitle
        ?.toLowerCase()
        .includes(comboboxValue.toLowerCase().trim())
  );

  return (
    <div className="relative w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchInput(comboboxValue);
        }}
      >
        <Combobox
          onChange={(value) => {
            setSearchInput(value);
            setComboboxValue(value);
          }}
          value={comboboxValue}
        >
          <div className="peer relative mx-auto w-full max-w-md">
            <button className="absolute inset-y-0 left-0 flex items-center pl-2">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-indigo-400"
                onClick={() => setSearchInput("")}
                type="submit"
              />
            </button>
            <Combobox.Input
              className=" w-full appearance-none rounded-full border  border-gray-300 px-8 py-1.5 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onChange={(e) => {
                setComboboxValue(e.target.value);
                if (e.target.value === "") setSearchInput("");
              }}
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <XMarkIcon
                className="h-5 w-5 text-gray-400"
                onClick={() => {
                  setSearchInput("");
                  setComboboxValue("");
                }}
              />
            </button>
          </div>
          <Transition
            as={Fragment}
            enter="transition-all ease-out duration-100 origin-top"
            enterFrom="scale-y-0"
            enterTo=" scale-y-1"
            leave="transition ease-in duration-75 origin-top"
            leaveFrom=" scale-y-1"
            leaveTo=" scale-y-0 "
            show={filteredData.length !== 0}
          >
            <Combobox.Options className="absolute left-1/2 top-[2.625rem]  z-20 block max-h-72 w-full max-w-md -translate-x-1/2 overflow-y-auto rounded-md border bg-white p-2 text-black shadow-md hover:!block peer-[&:not(:focus-within)]:hidden ">
              {filteredData.map((item) => (
                <Combobox.Option
                  key={item.title}
                  className="bg-white"
                  value={item.title}
                >
                  <AutoCompleteItem
                    episodeTitle={item.episodeTitle}
                    number={item.number}
                    title={item.title}
                  />
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </Combobox>
      </form>
    </div>
  );
};
