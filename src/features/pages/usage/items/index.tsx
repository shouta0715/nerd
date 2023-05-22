import clsx from "clsx";
import React from "react";
import type { Step as TStep } from "src/features/pages/usage/type";

export const Step = ({
  element,
  stepContent,
  Icon,
  content,
  iconBackground,
  firstStep,
}: Omit<TStep, "id"> & {
  firstStep: boolean;
}) => {
  return (
    <li>
      <div className="relative pb-8">
        {firstStep ? (
          <span
            aria-hidden="true"
            className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
          />
        ) : null}
        <div className="relative flex space-x-3">
          <div>
            <span
              className={clsx(
                iconBackground,
                "flex h-8 w-8 items-center justify-center rounded-full"
              )}
            >
              <Icon aria-hidden="true" className="h-5 w-5 text-white" />
            </span>
          </div>
          <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
            <div className="text-sm text-gray-500">
              <p>{content}</p>
              {element}
            </div>

            <div className="whitespace-nowrap text-right text-sm text-gray-500">
              {stepContent}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
