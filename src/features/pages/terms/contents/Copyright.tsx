import React from "react";
import { TermItems } from "src/features/pages/terms/contents";
import { TermItem } from "src/features/pages/terms/types";

const items: TermItem[] = [
  {
    content:
      "本アプリ内で表示されるアニメのデータは、それぞれの制作会社、著作権者が所有する著作権、商標権その他の知的財産権により保護されています。",
    key: "copy-1",
  },
  {
    content:
      "ユーザーは，自ら著作権等の必要な知的財産権を有するか，または必要な権利者の許諾を得た文章，画像や映像等の情報に関してのみ，本サービスを利用し，投稿ないしアップロードすることができるものとします。",
    key: "copy-2",
  },
  {
    content:
      "ユーザーが本サービスを利用して投稿ないしアップロードした文章，画像，映像等の著作権については，当該ユーザーその他既存の権利者に留保されるものとします。ただし，本サービスは，本サービスを利用して投稿ないしアップロードされた文章，画像，映像等について，本サービスの改良，品質の向上，または不備の是正等ならびに本サービスの周知宣伝等に必要な範囲で利用できるものとし，ユーザーは，この利用に関して，著作者人格権を行使しないものとします。",
    key: "copy-3",
  },
  {
    content:
      "前項本文に定めるもののほか，本サービスに関連して本サービスが著作権法上の権利を有する著作物を利用することがあります。",
    key: "copy-4",
  },
];

export const Copyright = () => {
  return <TermItems items={items} />;
};
