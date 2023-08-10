import Link from "next/link";
import React from "react";

export const AboutPage = () => {
  return (
    <div className="flex-1">
      <h1 className="text-center text-xl font-bold">
        現在、このページは作成中です。
      </h1>
      <p className="mt-20 text-center text-lg text-gray-600 underline hover:text-gray-500">
        <Link href="/">ホームへ戻る</Link>
      </p>
    </div>
  );
};
