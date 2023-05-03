import dynamic from "next/dynamic";
import React from "react";

const DynamicLottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const DynamicLottieResult = dynamic(
  () =>
    import("public/lottie/error.json").then((mod) => () => (
      <DynamicLottie animationData={mod} />
    )),
  {
    ssr: false,
  }
);

export const ForbiddenPage = () => (
  <div className="flex min-h-screen bg-gray-50 p-10">
    <div className="container mx-auto flex flex-1 flex-col items-center font-hiragino-sans">
      <p className="text-center text-xl font-bold">
        申し訳ありません。ユーザー認証中にエラーが発生しました。
        再度お試しください。
      </p>
      <DynamicLottieResult />
      <button
        className=" mt-4 text-xl font-bold text-indigo-500 underline"
        onClick={() => window.location.assign(window.location.origin)}
      >
        ホームに戻る
      </button>
    </div>
  </div>
);
