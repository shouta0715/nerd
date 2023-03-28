import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";

import React, { FC } from "react";
import { EpisodeMenuSkelton } from "src/components/Layout/loading/EpisodeMenuSkelton";
import { TimerSkelton } from "src/components/Layout/loading/TimerSkelton";

export const EpisodeSkelton: FC = () => (
  <div className="flex flex-col bg-white">
    <div className="container contents lg:mx-auto lg:flex">
      <li className="w-full flex-1 rounded-md p-4  md:px-6">
        <header className="mx-auto flex animate-pulse flex-col items-center justify-between ">
          <div className="mb-1 h-6 w-52 rounded-md bg-slate-200 md:mb-2" />
          <div className="mb-2 flex h-4 w-full  ">
            <div className="mr-4 h-4 w-1/12 rounded-md bg-slate-200" />
            <div className="flex-1 rounded-md bg-slate-200" />
          </div>
          <div className="flex flex-col">
            <div className="m-0 mx-auto mb-2.5 h-5  w-32 rounded-md bg-slate-200 px-10" />
            <TimerSkelton />
          </div>
        </header>
        <nav className="container mx-auto mt-3 flex animate-pulse items-center justify-between border-0 border-b  border-solid border-slate-200 py-2 lg:flex-col lg:items-stretch">
          <div className="flex flex-1 items-center justify-between">
            <ArrowSmallLeftIcon className="h-6 w-6 text-slate-200" />
            <div className="ml-2 h-6 w-20 rounded-md bg-slate-200" />
            <div className="ml-2 h-6 w-20 rounded-md bg-slate-200" />
            <div className="h-8 w-8 " />
          </div>
          <EpisodeMenuSkelton />
        </nav>
      </li>
      <main className="flex-1 lg:w-[36rem] lg:flex-none lg:pb-16" />
    </div>
  </div>
);
