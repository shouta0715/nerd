import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Error } from "src/libs/error";

const messages = {
  400: {
    message:
      "申し訳ありません。予期せぬエラーが発生しました。再度お試しください。",
  },
  401: {
    message:
      "申し訳ありません。ユーザー認証中にエラーが発生しました。再度お試しください。",
  },
  403: {
    message:
      "申し訳ありません。ユーザー認証中にエラーが発生しました。再度お試しください。",
  },
  404: {
    message: "お探しのページは見つかりませんでした。",
  },
  405: {
    message:
      "申し訳ありません。予期せぬエラーが発生しました。再度お試しください。",
  },
  500: {
    message:
      "申し訳ありません。現在サーバエラーが発生しております。再度時間をおいてアクセスしてください.",
  },

  // GraphQLのエラー
  200: {
    message: "お探しのページは見つかりませんでした。",
  },
};

export const ErrorPage = ({ status }: Error) => (
  <div className="flex min-h-screen flex-col items-center justify-center p-3 md:p-6">
    <ExclamationTriangleIcon className="mb-20 h-28 w-28 stroke-current text-red-500" />
    <p className="grid place-items-center text-xl font-bold">
      {messages[status].message}
    </p>

    <button
      className=" mt-20 text-xl font-bold text-indigo-500 underline"
      onClick={() => window.location.assign(window.location.origin)}
    >
      ホームに戻る
    </button>
  </div>
);
