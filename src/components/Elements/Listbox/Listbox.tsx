import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { Fragment } from "react";
import { Loader } from "src/components/Elements/Loader";

export type ListBoxOption = {
  id: string;
  name: string;
};

type Props<T, P> = {
  value: T | (() => T);
  onChange: (value: T) => void;
  isLoading: boolean;
  options: P[];
  buttonLabel: (value: T) => string;
};

export const ListBox = <T extends string, P extends ListBoxOption>({
  onChange,
  value,
  options,
  isLoading,
  buttonLabel,
}: Props<T, P>) => {
  return (
    <Listbox disabled={isLoading} onChange={onChange} value={value}>
      <div className="relative inline-block text-left">
        <Listbox.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-500">
          {buttonLabel(typeof value === "function" ? value() : value)}

          {isLoading ? (
            <Loader className="m-auto" size="md" theme="white" variant="dots" />
          ) : (
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 h-5 w-5 text-white"
            />
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                className={({ active }) =>
                  clsx(
                    "relative cursor-pointer select-none py-2 pl-7 pr-4 md:pl-8",
                    active ? "bg-indigo-100 text-indigo-900" : "text-gray-900"
                  )
                }
                value={option.id}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate text-sm ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-indigo-600">
                        <CheckIcon
                          aria-hidden="true"
                          className="h-4 w-4 md:h-5 md:w-5"
                        />
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
};
