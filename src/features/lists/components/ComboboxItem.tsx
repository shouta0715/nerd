import { Combobox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";
import { Text } from "src/components/Elements/Text";
import { AutoCompleteData } from "src/features/episodes/types";
import { getIsStatus } from "src/features/timer/utils/getIsStatus";

export const ComboboxItem = ({
  episodeTitle,
  title,
  number,
  end_time,
  start_time,
}: AutoCompleteData) => {
  return (
    <Combobox.Option
      className={({ active }) =>
        clsx(
          "relative cursor-default select-none py-2 pl-3 pr-9",
          active ? "bg-indigo-600 text-white" : "text-gray-900"
        )
      }
      value={title}
    >
      {({ active, selected }) => (
        <>
          <div className="flex items-center">
            {end_time && start_time && (
              <span
                aria-hidden="true"
                className={clsx(
                  "mt-1.5 inline-block h-2 w-2 flex-shrink-0 self-start rounded-full",
                  getIsStatus({ end_time, start_time }) === "down"
                    ? "bg-indigo-500"
                    : getIsStatus({ end_time, start_time }) === "up"
                    ? "bg-orange-500"
                    : "bg-pink-500"
                )}
              />
            )}

            <span
              className={clsx("ml-3 truncate", selected && "font-semibold")}
            >
              <Text className="text-sm font-medium">{title}</Text>
              {episodeTitle && (
                <div className="flex ">
                  <Text
                    className={`mr-1 text-dimmed ${
                      active ? "text-white" : "text-dimmed"
                    }`}
                    size="xs"
                  >
                    {number}.
                  </Text>
                  <Text
                    className={`${active ? "text-white" : "text-dimmed"}`}
                    size="xs"
                  >
                    {episodeTitle}
                  </Text>
                </div>
              )}
              <span className="sr-only">
                {` ${title} ${
                  episodeTitle ? `${number} ${episodeTitle}` : ""
                } `}
              </span>
            </span>
          </div>

          {selected && (
            <span
              className={clsx(
                "absolute inset-y-0 right-0 flex items-center pr-4",
                active ? "text-white" : "text-indigo-600"
              )}
            >
              <CheckIcon aria-hidden="true" className="h-5 w-5" />
            </span>
          )}
        </>
      )}
    </Combobox.Option>
  );
};
