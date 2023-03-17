import React, { FC } from "react";
import { NextEpisodeMenuSkelton } from "src/components/Layout/loading/NextEpisodeMenuSkelton";

const skeltonTimers = Array.from({ length: 3 }, (_, i) => i).map((i) => (
  <div
    key={`skelton-${i}-pin`}
    className="flex flex-col items-center justify-center"
  >
    <div className="mb-2 flex space-x-2">
      <div className="h-[30px] w-[33px] rounded-md bg-slate-200" />
      <div className="h-[30px] w-[33px] rounded-md bg-slate-200" />
    </div>
    <span className="h-2 w-10 rounded-md bg-slate-200" />
  </div>
));

export const EpisodeMenuSkelton: FC = () => (
  <div className="hidden bg-white lg:block">
    <section className="px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="mb-2 h-2 w-16 rounded-md bg-slate-200" />
        <div className="h-4 w-4 rounded-md bg-slate-200" />
      </div>
      <div className="mb-3 space-y-1">
        <div className="flex items-center">
          <div className="h-4 w-4 rounded-md bg-slate-200" />
          <div className="ml-1 h-4 w-24 rounded-md bg-slate-200" />
        </div>
        <div className="h-4 w-full rounded-md bg-slate-200" />
      </div>
      <div className="flex flex-col items-center space-y-1">
        <div className="h-2 w-16 rounded-md bg-slate-200" />
        <div className="flex space-x-4 md:space-x-6">{skeltonTimers}</div>
        <div className="grid w-full grid-cols-3 items-center justify-between">
          <div className="mx-auto h-10 w-10  rounded-full bg-slate-200" />
          <div className="h-4 w-full rounded-md bg-slate-200" />
          <div className="mx-auto h-10 w-10  rounded-full bg-slate-200" />
        </div>
      </div>
    </section>
    <div className="h-[1px] w-full bg-slate-200" />
    <NextEpisodeMenuSkelton />
  </div>
);
