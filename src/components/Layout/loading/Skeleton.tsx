import React, { FC } from "react";
import { TimerSkelton } from "src/components/Layout/loading/TImerSkelton";

export const Skeleton: FC = () => (
  <li className="mx-auto max-w-lg flex-1 rounded-md p-4 shadow  md:px-6">
    <div className="mx-auto flex animate-pulse flex-col items-center justify-between">
      <div className="mb-1 h-6 w-52 rounded-md bg-slate-200 md:mb-2" />
      <div className="mb-2 flex h-4 w-full  ">
        <div className="mr-4 h-4 w-1/12 rounded-md bg-slate-200" />
        <div className="flex-1 rounded-md bg-slate-200" />
      </div>
      <div className="flex flex-col">
        <div className="m-0 mx-auto mb-2.5 h-5  w-32 rounded-md bg-slate-200 px-10" />
        <TimerSkelton />
        <div className="ml-auto mt-2 h-7 w-20 rounded-md bg-slate-200" />
      </div>
    </div>
  </li>
);
