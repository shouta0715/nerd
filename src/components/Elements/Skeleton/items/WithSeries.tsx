import React from "react";

import { WorkSkeleton } from "src/components/Elements/Skeleton/items/WorkSkeleton";
import { Text } from "src/components/Elements/Text";

export const WithSeries = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="mx-auto  mb-4 h-2  w-full max-w-md  animate-pulse bg-slate-200" />
      <WorkSkeleton />
      <div className="mt-20">
        <Text className="mb-4 text-xl font-bold" component="h1">
          シリーズ一覧
        </Text>
        <ul className="grid grid-cols-1 gap-y-12  md:gap-12 lg:grid-cols-2  2xl:grid-cols-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <WorkSkeleton
              // eslint-disable-next-line react/no-array-index-key
              key={`work-skelton-${index}`}
              is_short
              isButton
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
