import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  number?: number;
  subtitle?: string;
};
const sliceTitle = (value: string) => {
  if (value.length > 20) {
    return `${value.slice(0, 20)}...`;
  }

  return value;
};

export const genTitle = ({ title = "Nerd", number, subtitle }: Props) => {
  if (number && subtitle) {
    return `${sliceTitle(title)} 第${number}話「${sliceTitle(subtitle)}」`;
  }

  return title;
};

export const DetailTitle = ({ title = "Nerd", number, subtitle }: Props) => {
  return (
    <Head>
      <title>{`${genTitle({
        title,
        number,
        subtitle,
      })} - Nerd`}</title>
      <meta
        content={`${genTitle({
          title,
          number,
          subtitle,
        })}の感想を一緒にシェアしよう！`}
        name="twitter:description"
      />
    </Head>
  );
};
