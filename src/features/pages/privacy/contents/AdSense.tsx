import React from "react";
import { PrivacyItems } from "src/features/pages/privacy/contents";
import { PrivacyItem } from "src/features/pages/privacy/types";

const items: PrivacyItem[] = [
  {
    content:
      "本サービスは, Google AdSenseに基づき広告を配信しています。このプロセスのために、ブラウザはCookieを使用しております。",
    key: "adsense_1",
  },
  {
    content:
      "Google などの第三者配信事業者が Cookie を使用して、ユーザーが本サービスや他のウェブサイトに過去にアクセスした際の情報に基づいて広告を配信します。",
    key: "adsense_2",
  },
  {
    content:
      "Google が広告 Cookie を使用することにより、ユーザーが本サービスや他のサイトにアクセスした際の情報に基づいて、Google やそのパートナーが適切な広告をユーザーに表示します。",
    key: "adsense_3",
  },
  {
    content: (
      <div>
        ユーザーは、広告設定でパーソナライズ広告を無効にできます（または、
        <a
          className="text-blue-600 hover:underline"
          href="http://www.aboutads.info"
        >
          www.aboutads.info
        </a>
        にアクセスすれば、パーソナライズ広告に使われる第三者配信事業者の Cookie
        を無効にできます）。
      </div>
    ),

    key: "adsense_4",
  },
  {
    content:
      "第三者配信による広告掲載を無効にしていない場合、広告の配信時に第三者配信事業者や広告ネットワークの Cookie が使用される可能性があります。",
    key: "adsense_5",
  },
  {
    content: (
      <div>
        第三者配信事業者や広告ネットワークの配信する広告が本サービスに掲載されます。対象となる第三者配信事業者や広告ネットワークの適切なウェブサイトへのリンクを掲載します。これらのウェブサイトにアクセスすれば、パーソナライズド広告の掲載で使用される
        Cookie
        を無効にできます（配信事業者や広告ネットワークがこの機能を提供している場合）。または、
        <a
          className="text-blue-600 hover:underline"
          href="http://www.aboutads.info"
        >
          www.aboutads.info
        </a>
        にアクセスすれば、第三者配信事業者がパーソナライズド広告の掲載で使用する
        Cookie を無効にできます。
      </div>
    ),

    key: "adsense_6",
  },
];

export const AdSense = () => {
  return <PrivacyItems items={items} />;
};
