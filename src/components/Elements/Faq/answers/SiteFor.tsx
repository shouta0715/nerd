import React from "react";

export const SiteFor = () => (
  <>
    <p> アニメの感想を話し合うサイトです！</p>
    <div className="mt-2">
      <p>
        Netflixなどの配信サービスのタイムコードやテレビの放送時間に合わせて他のユーザーが投稿したチャットが表示されるので、
        <span className="text-pink-500">
          リアルタイムでなくてもリアルタイムで感想を共有しているような感覚で楽しめます。
        </span>
      </p>
      <p className="mt-1.5">
        その他にもアニメ全体のコメントを投稿することができます。
        また、当日放送のアニメに関してはリアルタイムでチャットをすることができます。
      </p>
      <p className="mt-2 text-xs text-dimmed">
        ※このサイトは感想を共有するサービスのみを提供しています。アニメの動画配信は提供していません。
      </p>
    </div>
  </>
);
