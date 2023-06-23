import React from "react";
import { PrivacyItems } from "src/features/pages/privacy/contents";
import { PrivacyItem } from "src/features/pages/privacy/types";

const items: PrivacyItem[] = [
  {
    content:
      "本サービスは，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。",
    key: "change_1",
  },
  {
    content:
      "利用目的の変更を行った場合には，変更後の目的について，本ウェブサイト上に公表するものとします。",
    key: "change_2",
  },
];

export const Change = () => {
  return <PrivacyItems items={items} />;
};
