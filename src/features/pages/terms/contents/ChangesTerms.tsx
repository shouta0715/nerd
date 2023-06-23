import React from "react";
import { TermItems } from "src/features/pages/terms/contents";
import { TermItem } from "src/features/pages/terms/types";

const items: TermItem[] = [
  {
    content:
      "本サービスは以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。",
    key: "change-1",
    sub_contents: [
      {
        content: "本規約の変更がユーザーの一般の利益に適合するとき。",
        key: "change-1-1",
      },
      {
        content:
          "本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。",
        key: "change-1-2",
      },
    ],
  },
  {
    content:
      "本サービスは、本規約を変更する場合には、変更後の本規約の施行時期及び内容を本サービス所定の方法で周知し、または通知します。",
    key: "change-2",
  },
];

export const ChangesTerms = () => {
  return <TermItems items={items} />;
};
