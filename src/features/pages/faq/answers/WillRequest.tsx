import Link from "next/link";
import React from "react";

export const WillRequest = () => (
  <>
    <p>
      リクエストフォームから作品の追加要望を送ってください。追加されるまでに時間がかかる場合があります。
    </p>
    <Link
      className="mt-2 inline-block  text-blue-500 underline"
      href={{
        pathname: "/request",
        query: {
          page: 1,
          status: "all",
        },
      }}
    >
      リクエストフォームはこちら
    </Link>
  </>
);
