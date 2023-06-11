import React from "react";
import { Loader } from "src/components/Elements/Loader";
import { EpisodeMenuSkeleton } from "src/components/Elements/Skeleton/items/EpisodeMenuSkeleton";
import { TimerSkeleton } from "src/components/Elements/Skeleton/items/TimerSkeleton";

export const EpisodeSkeleton = () => (
  <>
    <div className="sticky top-8 hidden h-[calc(100dvh-65px)] w-[28rem] shrink-0 flex-col gap-4 bg-white/20 pt-10 lg:flex">
      <div className=" rounded-2xl bg-white/60 pb-4  shadow-lg ring-1 ring-gray-900/5">
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
        <div className="flex flex-1 animate-pulse items-center justify-around">
          <div className="ml-2 h-6 w-20 rounded-md bg-slate-200" />
          <div className="ml-2 h-6 w-20 rounded-md bg-slate-200" />
        </div>
      </div>
      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <EpisodeMenuSkeleton />
      </div>
      <div className="animate-pulse rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <div>
          <div className="fixed bottom-0 left-0 z-[1] w-full border-t border-solid border-slate-200 bg-white p-2 lg:relative lg:border-0 lg:bg-transparent lg:p-0">
            <div className="flex flex-1 flex-col justify-center gap-4">
              <div className="flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-slate-200" />
                <div className="h-2 w-10 rounded-md bg-slate-200" />
              </div>
              <div className="mx-auto h-4 w-full rounded-md bg-slate-200" />
            </div>

            <div className="mx-auto mt-4 hidden h-2 w-3/4 place-items-center rounded-md bg-slate-200 text-sm text-dimmed lg:grid" />
          </div>
        </div>
      </div>
    </div>
    <div className="flex w-full flex-1 flex-col  bg-white/20 lg:min-h-[calc(100dvh-65px)] lg:py-10">
      <div className="block w-full bg-white/80 py-4 lg:hidden">
        {/* Mobile Design */}
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
        <div className="flex flex-1 animate-pulse items-center justify-around">
          <div className="ml-2 h-6 w-20 rounded-md bg-slate-200" />
          <div className="ml-2 h-6 w-20 rounded-md bg-slate-200" />
        </div>

        <div />
      </div>
      <div />
      <div className="flex flex-1 flex-col pb-[59px] lg:rounded-lg lg:shadow-lg">
        <Loader className="m-auto" size="xl" variant="dots" />
      </div>
      <div className="animate-pulse border-t p-4 lg:hidden">
        <div className="flex items-center gap-6">
          <div className="h-6 w-6 rounded-full bg-slate-200" />
          <div className="h-4 w-4/5 rounded-md  bg-slate-200" />
        </div>
      </div>
    </div>
  </>
);
