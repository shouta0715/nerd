import Lottie from "lottie-react";
import Link from "next/link";
import React, { FC } from "react";
import data from "public/lottie/error.json";

type Props = {
  error: Error;
};

export const SeverErrorPage: FC<Props> = ({ error }) => (
  <div className="flex min-h-screen bg-gray-50 p-10">
    <div className="container mx-auto flex flex-1 flex-col items-center font-hiragino-sans">
      <p className="text-center text-xl font-bold">
        申し訳ありません。予期せぬエラーが発生しました。 再度お試しください。
        {error.message}
      </p>
      <Lottie animationData={data} />
      <Link
        className=" mt-4 text-xl font-bold text-indigo-500 underline"
        href="/"
      >
        ホームに戻る
      </Link>
    </div>
  </div>
);
