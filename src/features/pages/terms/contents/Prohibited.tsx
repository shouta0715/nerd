import React from "react";
import { TermItems } from "src/features/pages/terms/contents";
import { TermItem } from "src/features/pages/terms/types";

const items: TermItem[] = [
  {
    content: "法令または公序良俗に違反する行為",
    key: "prohibited-1",
  },
  {
    content: "犯罪行為に関連する行為",
    key: "prohibited-2",
  },
  {
    content:
      "本サービス，本サービスの他のユーザー，または第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為。その他、本サービスの運営の妨げとなる行為",
    key: "prohibited-3",
  },
  {
    content: "本サービスの運営を妨害するおそれのある行為",
    key: "prohibited-4",
  },
  {
    content: "他のユーザーに関する個人情報等を収集または蓄積する行為",
    key: "prohibited-5",
  },
  {
    content: "不正アクセスをし，またはこれを試みる行為",
    key: "prohibited-6",
  },
  {
    content: "他のユーザーに成りすます行為",
    key: "prohibited-7",
  },
  {
    content:
      "本サービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為",
    key: "prohibited-8",
  },
  {
    content:
      "本サービス，本サービスの他のユーザーまたは第三者の知的財産権，肖像権，プライバシー，名誉その他の権利または利益を侵害する行為",
    key: "prohibited-9",
  },
  {
    content:
      "以下の表現を含み，または含むと本サービスが判断する内容を本サービス上に投稿し，または送信する行為",
    key: "prohibited-10",
    sub_contents: [
      {
        content: "過度に暴力的な表現",
        key: "prohibited-10-1",
      },
      {
        content: "露骨な性的表現",
        key: "prohibited-10-2",
      },
      {
        content:
          "人種，国籍，信条，性別，社会的身分，門地等による差別を助長する表現",
        key: "prohibited-10-3",
      },
      {
        content: "自殺，自傷行為を助長する表現",
        key: "prohibited-10-4",
      },
      {
        content: "薬物の不適切な利用を助長する表現",
        key: "prohibited-10-5",
      },
      {
        content: "明らかに関係のないアニメの感想を投稿する行為",
        key: "prohibited-10-6",
      },
      {
        content: "明らかなネタバレを含むアニメの感想を投稿する行為",
        key: "prohibited-10-7",
      },
      {
        content: "その他反社会的な内容を含み他人に不快感を与える表現",
        key: "prohibited-10-8",
      },
    ],
  },
  {
    content: "以下を目的とし、または目的とすると運営者が判断する行為",
    key: "prohibited-11",
    sub_contents: [
      {
        content: "営業、宣伝、広告、勧誘、その他営利を目的とする行為",
        key: "prohibited-11-1",
      },
      {
        content: "性行為やわいせつな行為を目的とする行為",
        key: "prohibited-11-2",
      },
      {
        content: "面識のない異性との出会いや交際を目的とする行為",
        key: "prohibited-11-3",
      },
      {
        content:
          "本サービス，本サービスの他のユーザー，または第三者に不利益，損害または不快感を与えることを目的とする行為",
        key: "prohibited-11-4",
      },
      {
        content: "前各号の行為を誘引し，または助長する行為",
        key: "prohibited-11-5",
      },
      {
        content: "その他反社会的な内容を含み他人に不快感を与える表現",
        key: "prohibited-11-6",
      },
    ],
  },
  {
    content: "宗教活動または宗教団体への勧誘行為",
    key: "prohibited-12",
  },
  {
    content: "その他，運営者が不適切と判断する行為",
    key: "prohibited-13",
  },
];

export const Prohibited = () => {
  return (
    <>
      <p>
        以下の内容のいずれかに該当する行為または該当すると運営者が判断する行為をしてはなりません。
      </p>
      <TermItems items={items} />
    </>
  );
};
