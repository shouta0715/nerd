import React from "react";
import { TermItems } from "src/features/pages/terms/contents";
import { TermItem } from "src/features/pages/terms/types";

const items: TermItem[] = [
  {
    content:
      "本サービスは以下の条件をすべて満たす方に限り、ご利用いただくことができます。",
    sub_contents: [
      {
        content: "本規約に同意し,遵守すること。",
        key: "registration-1-1",
      },
      {
        content: "以前に本規約に違反したことのない方",
        key: "registration-1-2",
      },
    ],
    key: "registration-1",
  },
  {
    content:
      "本サービスは，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。",
    key: "registration-2",
    sub_contents: [
      {
        content: "本規約に違反したことがある者からの申請である場合",
        key: "registration-2-1",
      },
      {
        content: "その他，運営者が利用登録を相当でないと判断した場合",
        key: "registration-2-2",
      },
    ],
  },
];

export const Registration = () => {
  return <TermItems items={items} />;
};
