import React from "react";
import { TermItems } from "src/features/pages/terms/contents";
import { TermItem } from "src/features/pages/terms/types";

const items: TermItem[] = [
  {
    content:
      "本規約は,ユーザーと本サービスとの間の本サービスの利用に関わる一切の関係に適用されるものとします。",
    key: "apply-1",
  },
  {
    content:
      "本サービスは本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。",
    key: "apply-2",
  },
  {
    content:
      "本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。",
    key: "apply-3",
  },
];

export const Apply = () => {
  return <TermItems items={items} />;
};
