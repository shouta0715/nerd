import Link from "next/link";
import React from "react";

export const DoNotFind = () => (
  <>
    <p>
      誤字脱字がないか確認してください。それでも見つからない場合、登録されていない可能性があります。リクエストフォームから作品の追加要望を送ってください。
    </p>
    <Link className="mt-2 inline-block text-blue-500 underline" href="/request">
      リクエストフォームはこちら
    </Link>
  </>
);
