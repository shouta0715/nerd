import {
  ChatBubbleLeftRightIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Step } from "src/features/pages/usage/items";
import { First } from "src/features/pages/usage/items/First";
import { Fourth } from "src/features/pages/usage/items/Fourth";
import type { Step as TStep } from "src/features/pages/usage/type";

const Steps: TStep[] = [
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
      "チャットを選択し、動画配信サービスの再生ボタンと同時に再生ボタンをクリックします。該当の時間に他のユーザのコメントが表示されます。",
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
    <div className="flex-1 bg-white py-4">
      <section className="px-3 md:px-6">
        <h2 className="text-center text-2xl font-bold leading-10 tracking-tight text-gray-900">
          使い方
        </h2>
        <ul className="-mb-8 mt-10">
          {Steps.map((step, index) => (
            <Step
              key={`step-${step.id}`}
              {...step}
              firstStep={index !== Steps.length - 1}
            />
          ))}
        </ul>
      </section>
      <section className="mt-10 px-3 md:px-6">
        <h2 className="text-center text-2xl font-bold leading-10 tracking-tight text-gray-900">
          ルール・注意事項
        </h2>
        <ol className="mt-10 list-inside list-decimal space-y-4 px-2">
          <li className="text-gray-500">不適切なコメントは禁止です。</li>
          <li>暴言や、誹謗中傷、個人情報、などの投稿は禁止です。</li>
          <li>関係のないアニメの感想を投稿は禁止です。</li>
          <li>悪意のあるネタバレは禁止です。</li>
        </ol>
      </section>
    </div>
  );
};
