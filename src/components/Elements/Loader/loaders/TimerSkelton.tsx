import React, { FC } from "react";

const skeltonTimers = Array.from({ length: 3 }, (_, i) => i).map((i) => (
  <div
    key={`skelton-${i}`}
    className="flex flex-col items-center justify-center"
  >
    <div className="mb-2 flex space-x-2">
      <div className="h-[46px] w-[40px] rounded-xl bg-slate-200" />
      <div className="h-[46px] w-[40px] rounded-xl bg-slate-200" />
    </div>
    <span className="h-2 w-10 rounded-md bg-slate-200" />
  </div>
));
export const TimerSkelton: FC = () => (
  <div className="flex animate-pulse space-x-4 md:space-x-6">
    {skeltonTimers}
  </div>
);
