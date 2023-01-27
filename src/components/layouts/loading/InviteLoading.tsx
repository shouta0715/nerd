/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";

type Props = {
  length: number;
};

export const InviteLoading: FC<Props> = ({ length = 1 }) => (
  <ul className="w-full p-4 md:p-6">
    {Array.from({ length }).map((_, i) => (
      <li
        key={`skelton-${i}`}
        className="animate-pulse overflow-x-hidden border-x-0 border-y-0 border-b border-solid border-slate-200 p-2  md:p-4"
      >
        <div className="flex h-12 w-full items-center justify-between">
          <div className="h-10 w-10 rounded-full bg-slate-200" />
          <div className="h-5 w-8 rounded-full bg-slate-200" />
        </div>
        <div className="mx-auto mb-4 h-4 w-3/4 rounded bg-slate-200" />
        <div className="mb-4 space-y-3">
          {Array.from({ length: 4 }).map((__, j) => (
            <div
              key={`skelton-contents-${j}`}
              className="mx-auto h-2 w-3/4 rounded bg-slate-200"
            />
          ))}
        </div>
        <div className="mx-auto mb-2 h-2 w-1/4 rounded bg-slate-200" />
        <div className="mb-6 flex items-center justify-center">
          <div className="mr-6 flex">
            <div className="mr-2 h-[46px] w-[40px] rounded bg-slate-200 md:h-[55px] md:w-[50px]" />
            <div className="h-[46px] w-[40px] rounded bg-slate-200 md:h-[55px] md:w-[50px]" />
          </div>
          <div className="mr-6 flex ">
            <div className="mr-2 h-[46px] w-[40px] rounded bg-slate-200 md:h-[55px] md:w-[50px]" />
            <div className="h-[46px] w-[40px] rounded bg-slate-200 md:h-[55px] md:w-[50px]" />
          </div>
          <div className=" flex">
            <div className="mr-2 h-[46px] w-[40px] rounded bg-slate-200 md:h-[55px] md:w-[50px]" />
            <div className="h-[46px] w-[40px] rounded bg-slate-200 md:h-[55px] md:w-[50px]" />
          </div>
        </div>
      </li>
    ))}
  </ul>
);
