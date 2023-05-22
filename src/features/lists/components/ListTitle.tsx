import { Combobox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import { AutoCompleteData } from "src/features/episodes/types";
import { ComboboxItem } from "src/features/lists/components/ComboboxItem";
import { useSearchInputState } from "src/store/input/searchInput";

type Props = {
  title: string;
  autoCompleteData: AutoCompleteData[];
};

export const ListTitle: FC<Props> = ({ title, autoCompleteData }) => {
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
    <Combobox
      as="div"
      className="flex flex-col py-8 md:flex-row md:items-center md:justify-between md:space-x-8"
      onChange={(value) => {
        setSearchInput(value);
        setComboboxValue(value);
      }}
      value={comboboxValue}
    >
      <Combobox.Label as="h2" className="text-lg font-bold  md:text-xl">
        {title}
      </Combobox.Label>
      <div className="relative mt-2 flex-1 md:mt-0">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white px-12 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(e) => {
            setComboboxValue(e.target.value);
            if (e.target.value === "") setSearchInput("");
          }}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            aria-hidden="true"
            className="h-5 w-5 text-gray-400"
          />
        </Combobox.Button>
        <Combobox.Button className="absolute inset-y-0 left-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="h-5 w-5 text-gray-400"
          />
        </Combobox.Button>

        {filteredData.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredData.map((item) => (
              <ComboboxItem key={item.episodeTitle} {...item} />
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};
