import React from "react";
import { PrivacyItems } from "src/features/pages/privacy/contents";
import { PrivacyItem } from "src/features/pages/privacy/types";

const items: PrivacyItem[] = [
  {
    content:
      "本サービスは,本人から,個人情報が,利用目的の範囲を超えて取り扱われているという理由,または不正の手段により取得されたものであるという理由により,その利用の停止または消去（以下,「利用停止等」といいます。）を求められた場合には,遅滞なく必要な調査を行います。",
    key: "stop_1",
  },
  {
    content:
      "前項の調査結果に基づき,その請求に応じる必要があると判断した場合には,遅滞なく,当該個人情報の利用停止等を行います。",
    key: "stop_2",
  },
  {
    content:
      "前2項にかかわらず,利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって,ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は,この代替策を講じるものとします。",
    key: "stop_3",
  },
];

export const Stop = () => {
  return <PrivacyItems items={items} />;
};
