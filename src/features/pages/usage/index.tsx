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
import { Tables } from "src/features/pages/usage/items/Tables";
import { chatTables, liveTables } from "src/features/pages/usage/tableItems";
import type { Step as TStep } from "src/features/pages/usage/type";

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

const faqs = [
  {
    question: "どんなサービスですか？",
    answer: "アニメの感想を投稿できるサービスです。",
  },
  {
    question: "どんな機能がありますか？",
    answer:
      "アニメの感想を投稿できるチャットとコメントの2つの機能と、テレビ放送中のアニメの感想をリアルタイムで投稿できる機能があります。",
  },
  {
    question: "放送中のアニメはなにができますか？",
    answer:
      "Youtubeのライブ配信のように、リアルタイムでコメントを投稿できます。",
  },
];

export const Usage = () => {
  return (
    <div className="grid flex-1 gap-14">
      <section>
        <h2 className="text-center text-lg font-bold leading-10 tracking-tight text-gray-900 md:text-xl">
          はじめに
        </h2>
        <div>
          <dl className="my-6 space-y-10">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  Q. {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  A. {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col gap-y-8">
          <Tables
            tableContents={chatTables.contents}
            tableHeaders={chatTables.header}
            title={chatTables.title}
          />
          <Tables
            tableContents={liveTables.contents}
            tableHeaders={liveTables.header}
            title={liveTables.title}
          />
        </div>
      </section>
      <section>
        <h2 className="text-center text-lg font-bold leading-10 tracking-tight text-gray-900 md:text-xl">
          使い方
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
        <h2 className="text-center text-lg font-bold leading-10 tracking-tight text-gray-900 md:text-xl">
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
