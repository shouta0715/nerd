import React from "react";
import { PrivacyItems } from "src/features/pages/privacy/contents";
import { PrivacyItem } from "src/features/pages/privacy/types";

const items: PrivacyItem[] = [
  {
    content: "本サービスの提供・運営のため",
    key: "purpose_1",
  },
  {
    content:
      "利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため",
    key: "purpose_2",
  },
  {
    content:
      "ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため",
    key: "purpose_3",
  },
  {
    content: "違法行為などを行ったユーザーに対する対応のため",
    key: "purpose_4",
  },
  {
    content: "上記の利用目的に付随する目的",
    key: "purpose_4",
  },
];

export const Purpose = () => {
  return (
    <>
      <p>本サービスが個人情報を収集・利用する目的は，以下のとおりです。</p>
      <PrivacyItems items={items} />
    </>
  );
};
