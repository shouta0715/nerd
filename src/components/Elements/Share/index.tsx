import clsx from "clsx";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import TwitterIcon from "public/icons/TwitterIcon.svg";

type Props = {
  title: string;
  url: string;
  text: string;
};

export const ShareButton: FC<Props> = ({ title, url, text }) => {
  const baseUrl = "https://twitter.com/intent/tweet";
  // twitterのハッシュタグのルールに従って、タイトルから空白と記号を削除
  const titleHashTag = title.replace(/[\s\W]+/g, "");

  const hashtags = ["Nerd", titleHashTag];

  const params = new URLSearchParams({
    hashtags: hashtags.join(","),
    text,
    url,
  });

  const shareUrl = `${baseUrl}?${params.toString()}`;

  return (
    <a
      className={twMerge(
        clsx(
          "flex min-w-max items-center justify-center gap-2 rounded-full border px-2 py-1 font-semibold hover:bg-gray-100"
        )
      )}
      href={shareUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <TwitterIcon />
      <span className="text-xs">シェア</span>
    </a>
  );
};
