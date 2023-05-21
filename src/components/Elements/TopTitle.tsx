import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";

type Props = {
  title: string;
  buildDate: string;
};

export const TopTitle: FC<Props> = ({ title, buildDate }) => (
  <div className="mb-4 flex items-center justify-between">
    <h2 className="flex-1">
      <Text className="text-lg font-bold md:text-xl" component="span">
        {title}
      </Text>
    </h2>
    <p>
      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        <svg
          aria-hidden="true"
          className="h-1.5 w-1.5 fill-green-500"
          viewBox="0 0 6 6"
        >
          <circle cx={3} cy={3} r={3} />
        </svg>
        {buildDate}に更新
      </span>
    </p>
  </div>
);
