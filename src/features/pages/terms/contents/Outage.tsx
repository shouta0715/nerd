import React from "react";
import { TermItems } from "src/features/pages/terms/contents";
import { TermItem } from "src/features/pages/terms/types";

const items: TermItem[] = [
  {
    content:
      "本サービスは，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。",
    key: "outage-1",
    sub_contents: [
      {
        content:
          "本サービスにかかるコンピューター，通信回線等が保守点検または更新を行う場合",
        key: "outage-1-1",
      },
      {
        content:
          "地震，落雷，火災，風水害，停電または天災などの不可抗力により，本サービスの提供が困難となった場合",
        key: "outage-1-2",
      },
      {
        content: "コンピューターまたは通信回線等が事故により停止した場合",
        key: "outage-1-3",
      },
      {
        content: "その他，本サービスが本サービスの提供が困難と判断した場合",
        key: "outage-1-4",
      },
    ],
  },
  {
    content:
      "本サービスは，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。",
    key: "outage-2",
  },
];

export const Outage = () => {
  return <TermItems items={items} />;
};
