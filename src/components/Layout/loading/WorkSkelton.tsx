/* eslint-disable react/no-array-index-key */
import React from "react";
import { WorkEpisodeSkelton } from "src/components/Layout/loading/WorkEpisodeSkelton";

export const WorkSkelton = ({ is_short = false }) => (
  <ul className="mx-auto grid w-full grid-cols-2 space-y-1 rounded-md border border-solid border-slate-200 bg-white p-3 shadow md:grid-cols-3 md:p-4 lg:grid-cols-4">
    {Array.from({ length: is_short ? 8 : 24 }).map((_, index) => (
      <WorkEpisodeSkelton key={`work-episode-skelton-${index}`} />
    ))}
  </ul>
);
