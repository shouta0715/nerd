/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { Account } from "src/features/pages/terms/contents/Account";
import { Apply } from "src/features/pages/terms/contents/Apply";
import { Change } from "src/features/pages/terms/contents/Change";
import { ChangesTerms } from "src/features/pages/terms/contents/ChangesTerms";
import { Contact } from "src/features/pages/terms/contents/Contact";
import { Copyright } from "src/features/pages/terms/contents/Copyright";
import { Disclaimer } from "src/features/pages/terms/contents/Disclaimer";
import { Governing } from "src/features/pages/terms/contents/Governing";
import { Notification } from "src/features/pages/terms/contents/Notification";
import { Obligations } from "src/features/pages/terms/contents/Obligations";
import { Outage } from "src/features/pages/terms/contents/Outage";
import { PersonalInformation } from "src/features/pages/terms/contents/PersonalInformation";
import { Prohibited } from "src/features/pages/terms/contents/Prohibited";
import { Registration } from "src/features/pages/terms/contents/Registration";
import { UsageLimit } from "src/features/pages/terms/contents/UsageLimit";
import { Withdrawal } from "src/features/pages/terms/contents/Withdrawal";
import { Term } from "src/features/pages/terms/types";

const TermDescriptions: Term[] = [
  {
    title: "適用",
    contents: <Apply />,
    key: "apply",
  },
  {
    title: "利用登録",
    contents: <Registration />,
    key: "register",
  },
  {
    title: "ユーザーIDおよびパスワードの管理",
    contents: <Account />,
    key: "account",
  },
  {
    title: "禁止事項",
    contents: <Prohibited />,
    key: "prohibited",
  },
  {
    title: "本サービスの提供の停止等",
    contents: <Outage />,
    key: "outage",
  },
  {
    title: "著作権",
    contents: <Copyright />,
    key: "copy",
  },
  {
    title: "利用制限および登録抹消",
    contents: <UsageLimit />,
    key: "limit",
  },
  {
    title: "退会",
    contents: <Withdrawal />,
    key: "withdrawal",
  },
  {
    title: "保証の否認および免責事項",
    contents: <Disclaimer />,
    key: "disclaimer",
  },
  {
    title: "サービス内容の変更等",
    contents: <Change />,
    key: "change",
  },
  {
    title: "利用規約の変更",
    contents: <ChangesTerms />,
    key: "changes",
  },
  {
    title: "個人情報の取扱い",
    contents: <PersonalInformation />,
    key: "personal",
  },
  {
    title: "通知または連絡",
    contents: <Notification />,
    key: "notification",
  },
  {
    title: "権利義務の譲渡の禁止",
    contents: <Obligations />,
    key: "disclaimer",
  },
  {
    title: "準拠法・裁判管轄",
    contents: <Governing />,
    key: "governing",
  },
  {
    title: "お問い合わせ窓口",
    contents: <Contact />,
    key: "contact",
  },
];

export const Terms = () => {
  return (
    <div className="flex-1">
      <h2 className="mb-3 text-center text-2xl font-bold leading-10 tracking-tight text-gray-900">
        利用規約
      </h2>
      <p className="mb-4 text-base leading-6 text-gray-600">
        本利用規約 (以下「本規約」と言います。)
        には、「Nerd」(以下、「本サービス」と言います。)
        の提供条件及び本サービスの運営者 (以下「運営者」と言います。)
        と登録ユーザの皆様との間の権利義務関係が定められています。本サービスの利用に際しては、本規約の全文をお読みいただいたうえで、本規約に同意いただく必要があります。
      </p>
      <ol className="flex flex-col gap-6  rounded-2xl border border-solid border-slate-200 bg-white/70 p-6 shadow-lg ring-1 ring-gray-900/5">
        {TermDescriptions.map((item, index) => (
          <li key={item.key}>
            <h3 className="text-lg font-bold leading-6 tracking-tight text-gray-900">
              {`第${index + 1}条 (${item.title})`}
            </h3>
            <ol className="flex list-decimal flex-col gap-6 py-6 pl-6 text-base leading-6 text-gray-900">
              {item.contents}
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
