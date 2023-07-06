import {
  ChatBubbleLeftRightIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Step } from "src/features/pages/usage/items";
import { EasyItem } from "src/features/pages/usage/items/EasyItem";
import { First } from "src/features/pages/usage/items/First";
import { Fourth } from "src/features/pages/usage/items/Fourth";
import type { EStep, Step as TStep } from "src/features/pages/usage/type";

const EasySteps: EStep[] = [
  {
    id: 1,
    description: "見るアニメを選ぶ！",
  },
  {
    id: 2,
    description: "チャットかコメントを選択！",
  },
  {
    id: 3,
    description: "チャットなら動画と一緒に再生して、コメントを投稿！",
  },
  {
    id: 4,
    description: "コメントなら感想を投稿！",
  },
  {
    id: 5,
    description: "投稿名を変更して、いろいろなアニメの感想を投稿！",
  },
];

const DetailSteps: TStep[] = [
  {
    id: 1,
    content: "見るアニメを検索し、エピソードまたはアニメを選択します。",
    element: <First />,
    stepContent: "Step 1. 検索",
    Icon: MagnifyingGlassIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 2,
    content:
      "チャットを選択し、動画配信サービスの再生ボタンと同時に再生ボタンをクリックします。該当の時間に他のユーザのコメントが表示されます。放送中のアニメはリアルタイムにコメントが反映されます。",
    stepContent: "Step 2. 再生",
    Icon: PlayIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 3,
    content: "画面下部のコメント欄に感想を入力し、感想を送信します。",
    stepContent: "Step 3. 投稿",
    Icon: PaperAirplaneIcon,
    iconBackground: "bg-yellow-500",
  },
  {
    id: 4,
    content:
      "動画が終了したら、コメントタブを選択し、アニメ全体の感想を投稿します。",
    element: <Fourth />,
    stepContent: "Step 4. 投稿",
    iconBackground: "bg-pink-500",
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 5,
    content:
      "投稿名を自由に変更して、いろいろなアニメの感想を投稿してみましょう。",
    stepContent: "Step 5. 変更",
    iconBackground: "bg-purple-500",
    Icon: HandThumbUpIcon,
  },
];

export const Usage = () => {
  return (
    <div className="grid flex-1 gap-14">
      <section>
        <h2 className=" text-center text-2xl font-bold leading-10 tracking-tight text-gray-900">
          簡単な使い方
        </h2>
        <ul className="mt-6" id="detail">
          {EasySteps.map((step, index) => (
            <EasyItem
              key={`step-easy-${step.id}`}
              index={index}
              {...step}
              firstStep={index !== EasySteps.length - 1}
            />
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-center text-2xl font-bold leading-10 tracking-tight text-gray-900">
          詳しい使い方
        </h2>
        <ul className="-mb-8 mt-6" id="detail">
          {DetailSteps.map((step, index) => (
            <Step
              key={`step-${step.id}`}
              {...step}
              firstStep={index !== DetailSteps.length - 1}
            />
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="text-center text-2xl font-bold leading-10 tracking-tight text-gray-900">
          ルール・注意事項
        </h2>
        <ol className="mt-10 list-inside list-decimal space-y-4 px-2">
          <li>不適切なコメントは禁止です。</li>
          <li>暴言や、誹謗中傷、個人情報、などの投稿は禁止です。</li>
          <li>関係のないアニメの感想を投稿は禁止です。</li>
          <li>悪意のあるネタバレは禁止です。</li>
        </ol>
      </section>
    </div>
  );
};
