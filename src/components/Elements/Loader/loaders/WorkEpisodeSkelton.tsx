/* eslint-disable react/no-array-index-key */
import React from "react";

export const WorkEpisodeSkelton = () => (
  <li className="flex h-full animate-pulse flex-col items-center p-2">
    <div className="mb-1 h-3 w-10 rounded-md bg-slate-200 px-2" />
    <div className="w-full space-y-2">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={`work-episode-desc-skelton-${index}`}
          className="h-2 w-full rounded-md bg-slate-200"
        />
      ))}
    </div>
  </li>
);
