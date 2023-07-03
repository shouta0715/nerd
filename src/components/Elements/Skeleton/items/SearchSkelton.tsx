/* eslint-disable react/no-array-index-key */
import React from "react";

const SearchSkeltonItem = () => {
  return <div className="h-6 w-full rounded-md bg-slate-200" />;
};

export const SearchSkelton = () => {
  return (
    <div className="flex animate-pulse flex-col gap-6">
      {Array.from({ length: 10 }).map((_, index) => (
        <SearchSkeltonItem
          key={`SearchWorksSkeltonItem${index}SearchWorksSkeltonItem`}
        />
      ))}
    </div>
  );
};
