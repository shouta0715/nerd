import React from "react";
import { TimerSkeleton } from "src/components/Elements/Skeleton/items/TimerSkeleton";

export const HeaderSkelton = () => {
  return (
    <div className="flex animate-pulse flex-col items-center justify-between p-4  md:px-6">
      <div className="mb-1 h-6 w-52 rounded-md bg-slate-200 md:mb-2" />
      <div className="mb-2 flex h-4 w-full  ">
        <div className="mr-4 h-4 w-1/12 rounded-md bg-slate-200" />
        <div className="flex-1 rounded-md bg-slate-200" />
      </div>
      <div className="flex flex-col">
        <div className="m-0 mx-auto mb-2.5 h-5  w-32 rounded-md bg-slate-200 px-10" />
        <TimerSkeleton />
      </div>
    </div>
  );
};
