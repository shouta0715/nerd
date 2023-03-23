import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";

type Props = {
  title: string;
};

export const TopTitle: FC<Props> = ({ title }) => (
  <h2 className="mb-4 md:text-center lg:text-left">
    <Text
      className="text-lg font-bold md:text-xl"
      component="span"
      ff="Hiragino Sans"
    >
      {title}
    </Text>
  </h2>
);
