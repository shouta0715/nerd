import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";
import data from "public/lottie/404.json";

export const NotFoundPage = () => (
  <div className="flex min-h-screen bg-gray-50 p-10">
    <div className="container mx-auto flex flex-1 flex-col items-center font-hiragino-sans">
      <p className="text-center font-bold">
        お探しのページは見つかりませんでした。
      </p>
      <Lottie animationData={data} className="max-w-md" />
      <Link className=" font-bold text-indigo-500 underline" href="/">
        ホームに戻る
      </Link>
    </div>
  </div>
);
