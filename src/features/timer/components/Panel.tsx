import React, { FC } from "react";

type Props = {
  character: string | number;
};

export const Panel: FC<Props> = ({ character }) => (
  <div className="relative flex h-[46px] w-[40px] flex-col items-center justify-center rounded-xl bg-white text-2xl text-[#f8f5f5] shadow-[0_3px_4px_0_rgba(0,0,0,.2),inset_2px_4px_0_0_rgba(255,255,255,.08)] ">
    <div className="z-0 h-1/2 w-full  rounded-t-xl bg-[#3e403e] shadow-[0px_6px_6px_0_rgba(0,0,0,0.4)] md:shadow-[0px_10px_10px_0_rgba(0,0,0,0.4)]">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
        {character}
      </span>
    </div>
    <span className="inline-block h-[1px] w-full bg-black " />
    <div className="h-1/2 w-full rounded-b-xl bg-[#404240]">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
        {character}
      </span>
    </div>
  </div>
);
