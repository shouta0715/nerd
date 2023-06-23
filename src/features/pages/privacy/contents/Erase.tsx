import React from "react";
import { PrivacyItems } from "src/features/pages/privacy/contents";
import { PrivacyItem } from "src/features/pages/privacy/types";

const items: PrivacyItem[] = [
  {
    content:
      "ユーザーは，本サービスの保有する自己の個人情報が誤った情報である場合には，本サービスが定める手続きにより，本サービスに対して個人情報の訂正，追加または削除（以下，「訂正等」といいます。）を請求することができます。",
    key: "erase_1",
  },
  {
    content:
      "本サービスは，ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には，遅滞なく，当該個人情報の訂正等を行うものとします。",
    key: "erase_2",
  },
  {
    content:
      "本サービスは，本サービスの利用に伴い，ユーザーが本サービス上に入力した情報を，ユーザーが退会した後も，本サービスが定める期間保存することができるものとします。",
    key: "erase_3",
  },
];

export const Erase = () => {
  return <PrivacyItems items={items} />;
};
