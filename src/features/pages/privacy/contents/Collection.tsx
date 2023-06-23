import React from "react";
import { PrivacyItems } from "src/features/pages/privacy/contents";
import { PrivacyItem } from "src/features/pages/privacy/types";

const items: PrivacyItem[] = [
  {
    content:
      "本サービスを匿名認証でコンテンツを投稿する場合、本サービスは以下の情報を取得します。",
    sub_contents: [
      {
        content: "IPアドレス",
        key: "privacy-1-1",
      },
    ],
    key: "privacy-1",
  },
  {
    content:
      "本サービスをGoogle認証で使用する場合、本サービスは以下の情報を取得します。",
    sub_contents: [
      {
        content: "Googleアカウントのメールアドレス",
        key: "privacy-2-1",
      },
      {
        content: "Googleアカウントのプロフィール画像",
        key: "privacy-2-2",
      },
      {
        content: "GoogleアカウントのユーザーID",
        key: "privacy-2-3",
      },
      {
        content: "Googleアカウントの氏名",
        key: "privacy-2-4",
      },
      {
        content: "IPアドレス",
        key: "privacy-2-5",
      },
    ],
    key: "privacy-2",
  },
];

export const Collection = () => {
  return <PrivacyItems items={items} />;
};
