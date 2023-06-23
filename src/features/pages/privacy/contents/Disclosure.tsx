import React from "react";
import { PrivacyItems } from "src/features/pages/privacy/contents";
import { PrivacyItem } from "src/features/pages/privacy/types";

const items: PrivacyItem[] = [
  {
    content:
      "本サービスは,本人から個人情報の開示を求められたときは,本人に対し,遅滞なくこれを開示します。ただし,開示することにより次のいずれかに該当する場合は,その全部または一部を開示しないこともあり,開示しない決定をした場合には,その旨を遅滞なく通知します。",
    key: "disclosure_1",
    sub_contents: [
      {
        content:
          "本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合",
        key: "disclosure_1-1",
      },
      {
        content: "本サービスの運営に著しい支障を及ぼすおそれがある場合",
        key: "disclosure_1-2",
      },
      {
        content: "その他法令に違反することとなる場合",
        key: "disclosure_1-3",
      },
    ],
  },
  {
    content:
      "前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません",
    key: "disclosure_2",
  },
];

export const Disclosure = () => {
  return <PrivacyItems items={items} />;
};
