import { Loader } from "@mantine/core";
import React, { FC } from "react";

export const EpisodeMenuSkelton: FC = () => (
  <>
    <Loader className="h-8 w-8" />
    <div className="hidden lg:block">
      <section className="px-4 py-2">
        <div className="mb-2 h-2 w-16 rounded-md bg-slate-200" />
        <div className="mb-3 space-y-1">
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-md bg-slate-200" />
            <div className="ml-1 h-4 w-24 rounded-md bg-slate-200" />
          </div>
          <div className="h-4 w-full rounded-md bg-slate-200" />
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="h-2 w-16 rounded-md bg-slate-200" />
          <div className="flex place-items-center">
            <div className="mr-2 h-4 w-4 rounded-md bg-slate-200" />
            <div className="h-2 w-32 rounded-md bg-slate-200" />
          </div>
          <div className="h-4 w-full rounded-md bg-slate-200" />
        </div>
      </section>
      <div className="h-[1px] w-full bg-slate-200" />
      <section className="px-4 py-2">
        <div className="mb-2 h-2 w-16 rounded-md bg-slate-200" />
        <div className="mb-2 h-3 w-4/5 rounded-md bg-slate-200" />
        <div className="mb-2 h-2 w-1/2 rounded-md bg-slate-200" />
        <div className="flex place-items-center">
          <div className="mr-2 h-4 w-4 rounded-md bg-slate-200" />
          <div className="h-4 w-20 rounded-md bg-slate-200" />
        </div>
      </section>
    </div>
  </>
);
