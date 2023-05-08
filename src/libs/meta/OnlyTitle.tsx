import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  number?: number;
  subtitle?: string;
};

export const DetailTitle = ({ title = "Nerd", number, subtitle }: Props) => {
  const sliceTitle = (value: string) => {
    if (value.length > 20) {
      return `${value.slice(0, 20)}...`;
    }

    return value;
  };

  const genTitle = () => {
    if (number && subtitle) {
      return `${sliceTitle(title)} 第${number}話「${sliceTitle(subtitle)}」`;
    }

    return title;
  };

  return (
    <Head>
      <title>{`${genTitle()} - Nerd`}</title>
    </Head>
  );
};
