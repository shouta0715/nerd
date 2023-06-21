import React from "react";
import { TermItems } from "src/features/pages/terms/contents";
import { TermItem } from "src/features/pages/terms/types";

const items: TermItem[] = [
  {
    content:
      "本サービスは，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，投稿データを削除し，ユーザーに対して本サービスの全部もしくは一部の利用を制限しまたはユーザーとしての登録を抹消することができるものとします。",
    key: "usage-limit-1",
    sub_contents: [
      {
        content: "本規約のいずれかの条項に違反した場合",
        key: "usage-limit-1-1",
      },
      {
        content: "登録事項に虚偽の事実があることが判明した場合",
        key: "usage-limit-1-2",
      },
      {
        content: "料金等の支払債務の不履行があった場合",
        key: "usage-limit-1-3",
      },
      {
        content: "本サービスからの連絡に対し，一定期間返答がない場合",
        key: "usage-limit-1-4",
      },
      {
        content: "本サービスについて，最終の利用から一定期間利用がない場合",
        key: "usage-limit-1-5",
      },
      {
        content: "その他，運営者が本サービスの利用を適当でないと判断した場合",
        key: "usage-limit-1-6",
      },
    ],
  },
  {
    content:
      "前項各号のいずれかに該当した場合，ユーザーは，当然に本サービスに対する一切の債務について期限の利益を失い，その時点において負担する一切の債務を直ちに一括して弁済しなければなりません。",
    key: "usage-limit-2",
  },
  {
    content:
      "本サービスは，本条に基づき本サービスが行った行為によりユーザーに生じた損害について，一切の責任を負いません。",
    key: "usage-limit-3",
  },
];

export const UsageLimit = () => {
  return <TermItems items={items} />;
};
