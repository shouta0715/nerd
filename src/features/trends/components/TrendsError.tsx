import React from "react";
import { FallbackProps } from "react-error-boundary";
import { Text } from "src/components/Elements/Text";
import { ErrorMessage } from "src/components/Error/items/ErrorMessage";

export const TrendsError = (error: FallbackProps) => {
  return (
    <div className="flex flex-1 flex-col gap-y-8 pb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex-1">
          <Text className="text-lg font-bold md:text-xl" component="span">
            トレンド
          </Text>
        </h2>
        <p>
          <span className="inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
            <svg
              aria-hidden="true"
              className="h-1.5 w-1.5 fill-red-500"
              viewBox="0 0 6 6"
            >
              <circle cx={3} cy={3} r={3} />
            </svg>
            エラーだよ
          </span>
        </p>
      </div>

      <ErrorMessage {...error} />
    </div>
  );
};
