/* eslint-disable react/no-array-index-key */
import React, { FC } from "react";
import { WorkEpisodeSkeleton } from "src/components/Elements/Skeleton/items/WorkEpisodeSkeleton";

type Props = {
  is_short?: boolean;
  isButton?: boolean;
};

export const WorkSkeleton: FC<Props> = ({
  is_short = false,
  isButton = false,
}) => (
  <div
    className=" grid w-full  grid-cols-2 space-y-1 rounded-2xl  border border-solid border-slate-200 p-3  shadow-lg ring-1 ring-gray-900/5 md:grid-cols-3 md:p-4 lg:grid-cols-4"
    role="status"
  >
    {Array.from({ length: is_short ? 8 : 24 }).map((_, index) => (
      <WorkEpisodeSkeleton key={`work-episode-skelton-${index}`} />
    ))}
    {isButton && (
      <div className="col-span-2 mx-auto mt-4 flex w-max animate-pulse justify-center md:col-span-3 lg:col-span-4">
        <div className=" h-3 w-[200px] rounded-md bg-slate-200" />
      </div>
    )}
  </div>
);
