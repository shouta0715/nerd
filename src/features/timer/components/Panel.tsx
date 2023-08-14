import clsx from "clsx";
import React, { FC } from "react";

type Props = {
  character: string | number;
  big?: boolean;
};

export const Panel: FC<Props> = ({ character, big = false }) => (
  <div
    className={clsx(
      "relative flex  flex-col items-center justify-center rounded-xl bg-white font-futura  text-[#f8f5f5] shadow-[0_3px_4px_0_rgba(0,0,0,.2),inset_2px_4px_0_0_rgba(255,255,255,.08)]  ",
      big
        ? "h-[46px] w-[40px] text-xl"
        : "h-[36px] w-[32px] text-sm md:h-[46px] md:w-[40px]  md:text-xl"
    )}
  >
    <div className="z-0 h-1/2 w-full rounded-t-xl bg-[#3e403e] font-futura shadow-[0px_6px_6px_0_rgba(0,0,0,0.4)] md:shadow-[0px_10px_10px_0_rgba(0,0,0,0.4)]">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
        {character}
      </span>
    </div>
    <span className="inline-block h-[1px] w-full bg-black font-futura " />
    <div className="h-1/2 w-full rounded-b-xl bg-[#404240]">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
        {character}
      </span>
    </div>
  </div>
);
