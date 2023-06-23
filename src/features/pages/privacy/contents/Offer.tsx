import React from "react";
import { PrivacyItems } from "src/features/pages/privacy/contents";
import { PrivacyItem } from "src/features/pages/privacy/types";

const items: PrivacyItem[] = [
  {
    content:
      "本サービスは，次に掲げる場合を除いて，あらかじめユーザーの同意を得ることなく，第三者に個人情報を提供することはありません。ただし，個人情報保護法その他の法令で認められる場合を除きます。",
    key: "offer_1",
    sub_contents: [
      {
        content:
          "人の生命，身体または財産の保護のために必要がある場合であって，本人の同意を得ることが困難であるとき",
        key: "offer_1-1",
      },
      {
        content:
          "公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって，本人の同意を得ることが困難であるとき",
        key: "offer_1-2",
      },
      {
        content:
          "国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって，本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき",
        key: "offer_1-3",
      },
      {
        content:
          "予め次の事項を告知あるいは公表し，かつ本サービスが個人情報保護委員会に届出をしたとき",
        key: "offer_1-4",
        sub_contents: [
          {
            content: "利用目的に第三者への提供を含むこと",
            key: "offer_1-4-1",
          },
          {
            content: "第三者に提供されるデータの項目",
            key: "offer_1-4-2",
          },
          {
            content: "第三者への提供の手段または方法",
            key: "offer_1-4-3",
          },
          {
            content: "本人の求めに応じて個人情報の第三者への提供を停止すること",
            key: "offer_1-4-4",
          },
          {
            content: "本人の求めを受け付ける方法",
            key: "offer_1-4-5",
          },
        ],
      },
    ],
  },
  {
    content:
      "前項の定めにかかわらず，次に掲げる場合には，当該情報の提供先は第三者に該当しないものとします。",
    key: "offer_2",
    sub_contents: [
      {
        content:
          "当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合",
        key: "offer_2-1",
      },
      {
        content:
          "合併その他の事由による事業の承継に伴って個人情報が提供される場合",
        key: "offer_2-2",
      },
      {
        content:
          "個人情報を特定の者との間で共同して利用する場合であって，その旨並びに共同して利用される個人情報の項目，共同して利用する者の範囲，利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について，あらかじめ本人に通知し，または本人が容易に知り得る状態に置いた場合",
        key: "offer_2-3",
      },
    ],
  },
];

export const Offer = () => {
  return <PrivacyItems items={items} />;
};
