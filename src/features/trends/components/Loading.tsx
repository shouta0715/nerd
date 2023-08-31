import React from "react";
import { Skeleton } from "src/components/Elements/Skeleton";
import { Text } from "src/components/Elements/Text";

export const Loading = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-8 pb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex-1">
          <Text className="text-lg font-bold md:text-xl" component="span">
            トレンド
          </Text>
        </h2>
        <p>
          <span className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
            <svg
              aria-hidden="true"
              className="h-1.5 w-1.5 fill-gray-500"
              viewBox="0 0 6 6"
            >
              <circle cx={3} cy={3} r={3} />
            </svg>
            読み込み中...
          </span>
        </p>
      </div>

      <div className="">
        <Skeleton theme="trends" />
      </div>
    </div>
  );
};
