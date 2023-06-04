import React from "react";
import { Error } from "src/libs/error";

const messages = {
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

export const ErrorPage = ({ status }: Error) => (
  <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-indigo-600">{status}</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {messages[status].title}
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        {messages[status].message}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => window.location.assign(window.location.origin)}
        >
          ホームに戻る
        </button>
        <p className="text-sm font-semibold text-gray-900">
          お問い合わせ <span aria-hidden="true">&rarr;</span>
        </p>
      </div>
    </div>
  </main>
);
