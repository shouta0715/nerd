import Link from "next/link";
import React from "react";
import { AnswerItem } from "src/features/pages/Faq/answers";

import { DoNotFind } from "src/features/pages/Faq/answers/DoNotFind";
import { LoginMeaning } from "src/features/pages/Faq/answers/LoginMeaning";
import { LoginName } from "src/features/pages/Faq/answers/LoginName";
import { NotChat } from "src/features/pages/Faq/answers/NotChat";
import { PostedName } from "src/features/pages/Faq/answers/PostedName";
import { Search } from "src/features/pages/Faq/answers/Search";
import { SiteFor } from "src/features/pages/Faq/answers/SiteFor";
import { TimeIsWrong } from "src/features/pages/Faq/answers/TimeIsWrong";
import { WillRequest } from "src/features/pages/Faq/answers/WillRequest";
import type { FaqProps } from "src/features/pages/Faq/types";

export const faqs: FaqProps[] = [
  {
    question: "このサイトは何をするためのサイトですか？",
    answer: <SiteFor />,
    key: "faq-0",
    defaultOpen: true,
  },
  {
    question: "投稿名はどこで変更できますか？",
    answer: <PostedName />,
    key: "faq-1",
  },
  {
    question: "どこで見たいアニメを検索できますか？",
    answer: <Search />,
    key: "faq-2",
  },
  {
    question: "再生してもチャットが表示されません",
    answer: <NotChat />,
    key: "faq-3",
  },
  {
    question: "ログインすると何ができるようになりますか？",

    answer: <LoginMeaning />,
    key: "faq-4",
  },
  {
    question: "ログインしていても投稿名を変更できますか？",
    answer: <LoginName />,
    key: "faq-5",
  },
  {
    question: "検索しても見つからない",
    answer: <DoNotFind />,
    key: "faq-6",
  },
  {
    question: "アニメの追加要望を送りたい",
    answer: <WillRequest />,
    key: "faq-7",
  },
  {
    question: "今日放送のアニメの時間がずれている",
    answer: <TimeIsWrong />,
    key: "faq-8",
  },
];

export const Faq = () => (
  <div className="container mx-auto flex-1 bg-gray-50 py-4">
    <section className="px-3 font-hiragino-sans md:px-6">
      <h2 className="pb-4 text-center font-hiragino-sans text-xl font-bold">
        よくある質問
      </h2>
      <ul>
        {faqs.map((item) => (
          <AnswerItem {...item} key={item.key} />
        ))}
      </ul>
      <p className="mt-6 text-sm text-dimmed">
        上記の内容で解決しない場合は、お問い合わせフォームよりお問い合わせください。
        <Link className="text-sm text-indigo-500 underline" href="/">
          お問い合わせフォーム
        </Link>
      </p>
    </section>
  </div>
);
