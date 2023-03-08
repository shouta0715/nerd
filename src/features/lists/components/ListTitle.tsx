import { Text, Title } from "@mantine/core";
import React, { FC } from "react";

type Props = {
  title: string;
};

export const ListTitle: FC<Props> = ({ title }) => (
  <Title
    order={2}
    size="h3"
    className="mb-3 items-center text-base md:text-2xl"
  >
    <Text component="span">{title}</Text>
  </Title>
);
