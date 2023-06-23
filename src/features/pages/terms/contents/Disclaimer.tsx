import React from "react";
import { TermItems } from "src/features/pages/terms/contents";
import { TermItem } from "src/features/pages/terms/types";

const items: TermItem[] = [
  {
    content:
      "本サービスは，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。",
    key: "disclaimer-1",
  },
  {
    content:
      "本サービスは，本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。ただし，本サービスに関する本サービスとユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。",
    key: "disclaimer-2",
  },
  {
    content:
      "前項ただし書に定める場合であっても，本サービスは，本サービスに起因してユーザーに生じた損害のうち特別な事情から生じた損害（本サービスまたはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。",
    key: "disclaimer-3",
  },
  {
    content:
      "本サービスは，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。",
    key: "disclaimer-4",
  },
];

export const Disclaimer = () => {
  return <TermItems items={items} />;
};
