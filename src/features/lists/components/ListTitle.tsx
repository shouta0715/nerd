import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";

type Props = {
  title: string;
};

export const ListTitle: FC<Props> = ({ title }) => (
  <h2 className="mb-4 items-center ">
    <Text className="text-lg font-bold  md:text-xl" component="span">
      {title}
    </Text>
  </h2>
);
