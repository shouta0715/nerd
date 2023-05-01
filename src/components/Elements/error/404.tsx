import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const DynamicLottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const DynamicLottieResult = dynamic(
  () =>
    import("public/lottie/404.json").then((mod) => () => (
      <DynamicLottie animationData={mod} className="max-w-xl" />
    )),
  {
    ssr: false,
  }
);

export const NotFoundPage = () => (
  <div className="flex min-h-screen bg-gray-50 p-10">
    <div className="container mx-auto flex flex-1 flex-col items-center font-hiragino-sans">
      <p className="text-center text-xl font-bold">
        お探しのページは見つかりませんでした。
      </p>
      <DynamicLottieResult />
      <Link
        className=" mt-4 text-xl font-bold text-indigo-500 underline"
        href="/"
      >
        ホームに戻る
      </Link>
    </div>
  </div>
);
