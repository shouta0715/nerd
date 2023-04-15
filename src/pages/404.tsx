import { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const DynamicLottieResult = dynamic(
  () =>
    import("public/lottie/404.json").then((data) => {
      const DynamicLottie = dynamic(() => import("lottie-react"));

      return () => <DynamicLottie animationData={data} />;
    }),
  {
    ssr: false,
  }
);

const Index: NextPage = () => (
  <div className="flex min-h-screen items-center bg-gray-50 p-6">
    <div className="container mx-auto flex flex-1 flex-col items-center font-hiragino-sans">
      <p className="text-center font-bold">
        お探しのページは見つかりませんでした。
      </p>
      <DynamicLottieResult />
      <Link className=" font-bold text-indigo-500 underline" href="/">
        ホームに戻る
      </Link>
    </div>
  </div>
);

export default Index;
