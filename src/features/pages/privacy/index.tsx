import React from "react";
import { AdSense } from "src/features/pages/privacy/contents/AdSense";
import { Change } from "src/features/pages/privacy/contents/Change";
import { ChangePolicy } from "src/features/pages/privacy/contents/ChangePolicy";
import { Collection } from "src/features/pages/privacy/contents/Collection";
import { Contact } from "src/features/pages/privacy/contents/Contact";
import { Disclosure } from "src/features/pages/privacy/contents/Disclosure";
import { Erase } from "src/features/pages/privacy/contents/Erase";
import { Offer } from "src/features/pages/privacy/contents/Offer";
import { PersonalInformation } from "src/features/pages/privacy/contents/PersonalInformation";
import { Purpose } from "src/features/pages/privacy/contents/Purpose";
import { Stop } from "src/features/pages/privacy/contents/Stop";
import { Privacy as TPrivacy } from "src/features/pages/privacy/types";

const PrivacyDescriptions: TPrivacy[] = [
  {
    title: "個人情報",
    key: "personal_information",
    content: <PersonalInformation />,
  },
  {
    title: "個人情報の収集方法",
    content: <Collection />,
    key: "collection",
  },
  {
    title: "個人情報を収集・利用する目的",
    content: <Purpose />,
    key: "purpose",
  },
  {
    title: "利用目的の変更",
    content: <Change />,
    key: "change",
  },
  {
    title: "個人情報の第三者提供",
    key: "offer",
    content: <Offer />,
  },
  {
    title: "個人情報の開示",
    key: "disclosure",
    content: <Disclosure />,
  },
  {
    title: "個人情報の訂正および削除",
    key: "erase",
    content: <Erase />,
  },
  {
    title: "個人情報の利用停止等",
    key: "stop",
    content: <Stop />,
  },
  {
    title: "プライバシーポリシーの変更",
    key: "change_privacy_policy",
    content: <ChangePolicy />,
  },
  {
    title: "Google AdSense 広告の配信",
    key: "adsense",
    content: <AdSense />,
  },
  {
    title: "お問い合わせ窓口",
    key: "contact",
    content: <Contact />,
  },
];

export const Privacy = () => {
  return (
    <div className="flex-1">
      <h2 className="mb-3 text-center text-lg font-bold leading-10 tracking-tight text-gray-900 md:text-xl">
        プライバシーポリシー
      </h2>
      <p className="mb-4 text-base leading-6 text-gray-600">
        本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
      </p>
      <ol className="flex flex-col gap-6  rounded-2xl border border-solid border-slate-200 bg-white/70 p-6 shadow-lg ring-1 ring-gray-900/5">
        {PrivacyDescriptions.map((item, index) => (
          <li key={item.key}>
            <h3 className="text-lg font-bold leading-6 tracking-tight text-gray-900">
              {`第${index + 1}条 (${item.title})`}
            </h3>
            <ol className="flex list-decimal flex-col gap-6 py-6 pl-6 text-base leading-6 text-gray-900">
              {item.content}
            </ol>
          </li>
        ))}

        <li className="ml-auto text-base leading-6 text-gray-600">
          以上 2023年6月23日制定
        </li>
      </ol>
    </div>
  );
};
