import React from "react";

export const SiteFor = () => (
  <>
    <p className="mb-4"> アニメの感想を話し合うサイトです！</p>
    <div className="mt-2 flex flex-col gap-4">
      <p>
        再生時間に合わせてコメントを表示することができるので、
        <span className="text-pink-500">
          リアルタイムでなくてもリアルタイムで感想を共有しているような感覚で楽しめます。
        </span>
      </p>
      <p>
        また、放送中のアニメはリアルタイムでコメントが反映されるためリアルタイムで感想を共有できます。
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
