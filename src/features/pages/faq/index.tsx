import React from "react";
import { AnswerItem } from "src/features/pages/faq/answers";
import { DoNotFind } from "src/features/pages/faq/answers/DoNotFind";
import { LoginMeaning } from "src/features/pages/faq/answers/LoginMeaning";
import { LoginName } from "src/features/pages/faq/answers/LoginName";
import { NotChat } from "src/features/pages/faq/answers/NotChat";
import { PostedName } from "src/features/pages/faq/answers/PostedName";
import { Search } from "src/features/pages/faq/answers/Search";
import { SiteFor } from "src/features/pages/faq/answers/SiteFor";
import { TimeIsWrong } from "src/features/pages/faq/answers/TimeIsWrong";
import { WillRequest } from "src/features/pages/faq/answers/WillRequest";
import type { FaqProps } from "src/features/pages/faq/types";

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
  <div className="flex-1 bg-white py-4">
    <div className=" px-3  md:px-6">
      <div className="divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          よくある質問
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((item) => (
            <AnswerItem {...item} key={item.key} />
          ))}
        </dl>
      </div>
    </div>
  </div>
);
