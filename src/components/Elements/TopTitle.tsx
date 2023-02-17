import { Text, Title } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  title: string;
  href: string;
};

export const TopTitle: FC<Props> = ({ title, href }) => (
  <Title order={2} size="h3" className="mb-4">
    <Link passHref href={`${href}`}>
      <Text component="span" ff="Hiragino Sans" className="text-lg md:text-xl">
        {title}
      </Text>
    </Link>
  </Title>
);
