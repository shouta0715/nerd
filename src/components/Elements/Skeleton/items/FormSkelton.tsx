import React from "react";

export const FormSkelton = () => {
  return (
    <>
      <div className="z-[1] hidden w-full border-slate-200 bg-white lg:relative lg:block">
        <div className="flex flex-1 flex-col justify-center gap-4">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-slate-200" />
            <div className="h-2 w-10 rounded-md bg-slate-200" />
          </div>
          <div className="mx-auto h-4 w-full rounded-md bg-slate-200" />
        </div>

        <div className="mx-auto mt-4 hidden h-2 w-3/4 place-items-center rounded-md bg-slate-200 text-sm text-dimmed lg:grid" />
      </div>
      <div className="fixed bottom-0 w-full animate-pulse border-t p-4 lg:hidden">
        <div className="flex items-center gap-6">
          <div className="h-6 w-6 rounded-full bg-slate-200" />
          <div className="h-4 w-4/5 rounded-md  bg-slate-200" />
        </div>
      </div>
    </>
  );
};
