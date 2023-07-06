import Link from "next/link";
import React from "react";

export const Usage = () => {
  return (
    <>
      <p>使い方ページをページを確認してください。</p>
      <Link
        className="mt-2 inline-block  text-blue-500 underline"
        href="/usage"
      >
        使い方はこちら
      </Link>
    </>
  );
};
