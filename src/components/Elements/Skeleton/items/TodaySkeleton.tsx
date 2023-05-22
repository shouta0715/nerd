import React from "react";
import { TimerSkeleton } from "src/components/Elements/Skeleton/items/TimerSkeleton";

export const TodaySkeleton = () => (
  <div
    className=" flex-1  rounded-2xl  p-4 shadow-lg ring-1 ring-gray-900/5   md:px-6"
    role="status"
  >
    <div className="mx-auto flex animate-pulse flex-col items-center justify-between">
      <div className="mb-1 h-6 w-52 rounded-md bg-slate-200 md:mb-2" />
      <div className="mb-2 flex h-4 w-full  ">
        <div className="mr-4 h-4 w-1/12 rounded-md bg-slate-200" />
        <div className="flex-1 rounded-md bg-slate-200" />
      </div>
      <div className="flex flex-col">
        <div className="m-0 mx-auto mb-2.5 h-5  w-32 rounded-md bg-slate-200 px-10" />
        <TimerSkeleton />
        <div className="ml-auto mt-2 h-7 w-20 rounded-md bg-slate-200" />
      </div>
    </div>
  </div>
);
