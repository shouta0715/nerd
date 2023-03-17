import Link from "next/link";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";

type Props = {
  title: string;
  href: string;
};

export const TopTitle: FC<Props> = ({ title, href }) => (
  <h2 className="mb-4 md:text-center lg:text-left">
    <Link href={`${href}`} passHref scroll={false}>
      <Text
        className="text-lg font-bold md:text-xl"
        component="span"
        ff="Hiragino Sans"
      >
        {title}
      </Text>
    </Link>
  </h2>
);
