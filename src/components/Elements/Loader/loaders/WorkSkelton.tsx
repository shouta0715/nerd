/* eslint-disable react/no-array-index-key */
import React from "react";
import { WorkEpisodeSkelton } from "src/components/Elements/Loader/loaders/WorkEpisodeSkelton";

export const WorkSkelton = ({ is_short = false, isButton = false }) => (
  <ul className=" grid w-full grid-cols-2 space-y-1 rounded-md border border-solid border-slate-200 bg-white p-3 shadow md:grid-cols-3 md:p-4 lg:grid-cols-4">
    {Array.from({ length: is_short ? 8 : 24 }).map((_, index) => (
      <WorkEpisodeSkelton key={`work-episode-skelton-${index}`} />
    ))}
    {isButton && (
      <div className="col-span-2 mx-auto mt-4 flex w-max animate-pulse justify-center md:col-span-3 lg:col-span-4">
        <div className=" h-3 w-[200px] rounded-md bg-slate-200" />
      </div>
    )}
  </ul>
);
