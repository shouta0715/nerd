import React from "react";
import { TermItems } from "src/features/pages/terms/contents";
import { TermItem } from "src/features/pages/terms/types";

const items: TermItem[] = [
  {
    content: "本規約の解釈にあたっては，日本法を準拠法とします。",
    key: "governing-1",
  },
  {
    content:
      "本サービスに関して紛争が生じた場合には，本サービスの運営者の所在地を管轄する裁判所を専属的合意管轄とします。",
    key: "governing-2",
  },
];

export const Governing = () => {
  return <TermItems items={items} />;
};
