/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { AnswerItem } from "src/features/pages/faq/answers";
import { ChatDifference } from "src/features/pages/faq/answers/ChatDifference";
import { DoNotFind } from "src/features/pages/faq/answers/DoNotFind";
import { LiveDifference } from "src/features/pages/faq/answers/LiveDifference";
import { LoginMeaning } from "src/features/pages/faq/answers/LoginMeaning";
import { LoginName } from "src/features/pages/faq/answers/LoginName";
import { NotChat } from "src/features/pages/faq/answers/NotChat";
import { PostedName } from "src/features/pages/faq/answers/PostedName";
import { Search } from "src/features/pages/faq/answers/Search";
import { SiteFor } from "src/features/pages/faq/answers/SiteFor";
import { TimeIsWrong } from "src/features/pages/faq/answers/TimeIsWrong";
import { Usage } from "src/features/pages/faq/answers/Usage";
import { WillRequest } from "src/features/pages/faq/answers/WillRequest";
import type { FaqProps } from "src/features/pages/faq/types";

const usageFaqs: FaqProps[] = [
  {
    question: "どんなサイトですか？",
    answer: <SiteFor />,

    defaultOpen: true,
  },
  {
    question: "このサイトはどうやって使うのですか？",
    answer: <Usage />,
  },
  {
    question: "チャットとコメントの違いは何ですか？",
    answer: (
      <div>
        <p className="mb-2">
          主な違いは、タイマーの時間に合わせてコメントが表示されるかどうかです。
        </p>
        <ChatDifference />
      </div>
    ),
  },
  {
    question: "当日放送と放送終了後の違いは何ですか？",
    answer: (
      <div>
        <p className="mb-2">
          主な違いは、コメントの投稿ができるかとリアルタイムでコメントが表示されるかです。
        </p>
        <LiveDifference />
      </div>
    ),
  },
  {
    question: "投稿名はどこで変更できますか？",
    answer: <PostedName />,
  },
  {
    question: "ログインすると何ができるようになりますか？",

    answer: <LoginMeaning />,
  },
  {
    question: "ログインしていても投稿名を変更できますか？",
    answer: <LoginName />,
  },
];

export const workFaqs: FaqProps[] = [
  {
    question: "どこで見たいアニメを検索できますか？",
    answer: <Search />,
  },
  {
    question: "再生してもチャットが表示されません",
    answer: <NotChat />,
  },

  {
    question: "検索しても見つからない",
    answer: <DoNotFind />,
  },
  {
    question: "アニメの追加要望を送りたい",
    answer: <WillRequest />,
  },
  {
    question: "今日放送のアニメの時間がずれている",
    answer: <TimeIsWrong />,
  },
];

export const Faq = () => (
  <div className="flex-1">
    <h2 className="text-center text-lg font-bold leading-10 tracking-tight text-gray-900 md:text-xl">
      よくある質問一覧
    </h2>
    <section className="mt-14">
      <h3 className="text-center  text-base leading-10 tracking-tight text-gray-900 md:text-lg">
        使い方のよくある質問
      </h3>
      <dl className="mt-2 space-y-6 divide-y divide-gray-900/10">
        {usageFaqs.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <AnswerItem {...item} key={`usage-faq-${index}`} />
        ))}
      </dl>
    </section>

    <section className="mt-14">
      <h3 className="text-center leading-10 tracking-tight text-gray-900 md:text-lg">
        作品に関するよくある質問
      </h3>
      <dl className="mt-2 space-y-6 divide-y divide-gray-900/10">
        {workFaqs.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <AnswerItem {...item} key={`detail-faq-${index}`} />
        ))}
      </dl>
    </section>

    <p className="mt-6 max-w-2xl py-6 text-base leading-7 text-gray-600">
      上記の質問で解決しない場合は、
      <a
        className="font-semibold text-indigo-600 hover:text-indigo-500"
        href="https://forms.gle/GMzgLTw6FA8S6jjS9"
        rel="noreferrer"
        target="_blank"
      >
        こちら
      </a>
      までお問い合わせください。
    </p>
  </div>
);
