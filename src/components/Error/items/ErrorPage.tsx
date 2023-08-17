import {
  ArrowSmallRightIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  ShieldExclamationIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Footer } from "src/components/Layouts/Footer";
import { Error } from "src/libs/error";

const messages = {
  0: {
    title: "Something went wrong",
    message: "何か問題が発生しました。ページをリロードしてみてください。",
  },
  400: {
    title: "Bad Request",
    message:
      "申し訳ありません。予期せぬエラーが発生しました。再度お試しください。",
  },
  401: {
    title: "Authorization Error",
    message:
      "申し訳ありません。ユーザー認証中にエラーが発生しました。再度お試しください。",
  },
  403: {
    title: "Authorization Error",
    message:
      "申し訳ありません。ユーザー認証中にエラーが発生しました。再度お試しください。",
  },
  404: {
    title: "Page not found",
    message: "お探しのページは見つかりませんでした。",
  },
  405: {
    title: "Method Not Allowed",
    message:
      "申し訳ありません。予期せぬエラーが発生しました。再度お試しください。",
  },
  500: {
    title: "Internal Server Error",
    message:
      "申し訳ありません。現在サーバエラーが発生しております。再度時間をおいてアクセスしてください.",
  },

  // GraphQLのエラー
  200: {
    title: "Page not found",
    message: "お探しのページは見つかりませんでした。",
  },
};

const faqs = [
  {
    name: "認証エラーとはなんですか？",
    description:
      "このサービスは匿名で利用するために初回アクセス時に自動で認証を行います。その際にエラーが発生した場合に表示されます。",
    icon: ShieldExclamationIcon,
    id: "auth",
  },
  {
    name: "何度も認証エラーが発生します。",
    description: "ブラウザのキャッシュまたは履歴を削除してください。",
    icon: WrenchScrewdriverIcon,
    id: "cache",
  },
  {
    name: "なぜページが見つかりませんか？",
    description:
      "お探しのページは削除されたか、移動した可能性があります。または、URLが間違っている可能性があります。",
    icon: MagnifyingGlassIcon,
    id: "search",
  },
  {
    name: "お問い合わせはどこにすればいいですか？",
    description: "お問い合わせは下記のお問い合わせボタンからお願いします。",
    icon: EnvelopeIcon,
    id: "contact",
  },
];

export const ErrorPage = ({ status }: Error) => (
  <div className="bg-white">
    <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
      <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
        {status === 0 ? (
          <p className="text-base font-semibold leading-8 text-red-600">
            何かがうまくいかなかったようです。
          </p>
        ) : (
          <p className="text-base font-semibold leading-8 text-red-600">
            {status === 200 ? 404 : status}
          </p>
        )}

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {messages[status].title}
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
          {messages[status].message}
        </p>
      </div>
      <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
        <h2 className="sr-only">よくある質問</h2>
        <ul className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
          {faqs.map((faq) => (
            <li key={faq.id} className="relative flex gap-x-6 py-6">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                <faq.icon
                  aria-hidden="true"
                  className="h-6 w-6 text-indigo-600"
                />
              </div>
              <div className="flex-auto">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  <p>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {faq.name}
                  </p>
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {faq.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => window.location.assign(window.location.origin)}
          >
            ホームに戻る
          </button>
          <a
            className="flex items-center justify-center gap-1 text-sm font-semibold leading-6 text-gray-900"
            href="https://forms.gle/GMzgLTw6FA8S6jjS9"
            rel="noreferrer"
            target="_blank"
          >
            お問い合わせ
            <ArrowSmallRightIcon aria-hidden="true" className="h-5 w-5 " />
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
