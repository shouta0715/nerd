import Link from "next/link";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";

type Props = {
  title: string;
  href: string;
};

export const TopTitle: FC<Props> = ({ title, href }) => (
  <h2 className="mb-4 md:text-center lg:text-left">
    <Link scroll={false} passHref href={`${href}`}>
      <Text
        component="span"
        ff="Hiragino Sans"
        className="text-lg font-bold md:text-xl"
      >
        {title}
      </Text>
    </Link>
  </h2>
);
