import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";
import { Loader } from "src/components/Elements/Loader";

export type ListBoxOption = {
  id: string;
  name: string;
};

type Props<T, P> = {
  filter: T;
  setFilter: (value: T) => void;
  isLoading: boolean;
  options: P[];
  buttonLabel: (value: T) => string;
};

export const ListBox = <T extends string, P extends ListBoxOption>({
  setFilter,
  filter,
  options,
  isLoading,
  buttonLabel,
}: Props<T, P>) => (
  <Listbox disabled={isLoading} onChange={setFilter} value={filter}>
    <div className="">
      <Listbox.Button className="relative cursor-default  rounded-lg bg-indigo-600  py-2 pl-3 pr-12 text-left text-sm font-semibold text-white shadow-md">
        <span className="block truncate">{buttonLabel(filter)}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          {isLoading ? (
            <Loader className="m-auto" size="sm" theme="white" variant="dots" />
          ) : (
            <ChevronDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-white"
            />
          )}
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className=" absolute mt-1 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {options.map((option) => (
            <Listbox.Option
              key={option.id}
              className={({ active }) =>
                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                  active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
                }`
              }
              value={option.id}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? "font-medium" : "font-normal"
                    }`}
                  >
                    {option.name}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                      <CheckIcon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
);
