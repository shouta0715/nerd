import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";

type Props = {
  title: string;
  buildDate: string;
};

export const TopTitle: FC<Props> = ({ title, buildDate }) => (
  <div className="mb-4 flex items-center justify-between">
    <h2 className="flex-1">
      <Text
        className="text-lg font-bold md:text-xl"
        component="span"
        ff="Hiragino Sans"
      >
        {title}
      </Text>
    </h2>
    <p>
      <Text
        className="rounded-md bg-pink-50 p-2 text-xs font-semibold text-pink-500"
        component="span"
        ff="Hiragino Sans"
        size="xs"
      >
        {buildDate}更新
      </Text>
    </p>
  </div>
);
