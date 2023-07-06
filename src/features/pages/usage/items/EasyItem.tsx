import clsx from "clsx";
import React from "react";
import { EStep } from "src/features/pages/usage/type";

type Props = {
  firstStep: boolean;
  index: number;
} & EStep;

const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-purple-500",
];

export const EasyItem = ({ firstStep, description, index }: Props) => {
  return (
    <li className={clsx(firstStep ? "pb-10" : "", "relative")}>
      {firstStep ? (
        <div
          aria-hidden="true"
          className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-200"
        />
      ) : null}
      <p className="group relative flex items-center">
        <span className="flex h-9 items-center">
          <span
            className={clsx(
              "relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-white",
              colors[index]
            )}
          >
            {index + 1}
          </span>
        </span>
        <span className="ml-4 flex w-full min-w-0 flex-col">
          <span className="text-base text-gray-800">{description}</span>
        </span>
      </p>
    </li>
  );
};
