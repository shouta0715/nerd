import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React from "react";

const mocks = [
  {
    id: 1,
    title: "Annict Developers",
    description: (
      <>
        Annict Developers様からデータを取得を行っています。
        <br />
        以下のリンクよりAnnict Developers様のサイトにアクセスできます。
      </>
    ),

    link: "https://developers.annict.com/",
  },
  {
    id: 2,
    title: "しょぼいカレンダー",
    description: (
      <>
        しょぼいカレンダー様からデータを取得を行っています。
        <br />
        以下のリンクよりしょぼいカレンダー様のサイトにアクセスできます。
      </>
    ),

    link: "https://cal.syoboi.jp/",
  },
  {
    id: 3,
    title: "文化庁「メディア芸術データベース（ベータ版）」",
    description: (
      <>
        出典：文化庁「メディア芸術データベース（ベータ版）」
        <a
          className="inline-block px-2 text-indigo-600 underline hover:text-indigo-500"
          href="https://mediaarts-db.bunka.go.jp/"
          target="_blank"
        >
          （https://mediaarts-db.bunka.go.jp/）
        </a>
        <br />
        文化庁「メディア芸術データベース（ベータ版）」
        <a
          className="inline-block px-2 text-indigo-600 underline hover:text-indigo-500"
          href="https://mediaarts-db.bunka.go.jp/"
          target="_blank"
        >
          （https://mediaarts-db.bunka.go.jp/）
        </a>
        を加工して作成
        <br />
        以下のリンクより文化庁「メディア芸術データベース（ベータ版）」様のサイトにアクセスできます。
      </>
    ),
    link: "https://mediaarts-db.bunka.go.jp/",
  },
];

export const DataPage = () => {
  return (
    <div className="flex-1">
      <h2 className="text-center text-lg font-bold leading-10 tracking-tight text-gray-900 md:text-xl">
        データについて
      </h2>
      <section className="mt-6">
        <p className="leading-7 tracking-tight text-gray-900">
          このサイトは主に3つのサイトからデータを取得し、表示しています。
          下記に上げているサイト様からデータの取得のみを行っており、このサイトはそれらのサイト様とは一切関係ありません。
          <br />
          サイト様へのお問い合わせや要望はお控えください。本サービスのお問い合わせは
          <a
            className="inline-block px-2 text-indigo-600 underline hover:text-indigo-500"
            href="https://forms.gle/GMzgLTw6FA8S6jjS9"
            rel="noreferrer"
            target="_blank"
          >
            こちら
          </a>
          からお願いします。
        </p>
        <ol className="mt-10 grid gap-y-10 leading-7 text-gray-900">
          {mocks.map((mock, i) => (
            <li key={mock.id}>
              <p className="mb-2 flex">
                <span>{i + 1}.</span>
                <span className="font-semibold">{mock.title}</span>
              </p>
              <div className="grid gap-y-2 pl-5">
                <p>{mock.description}</p>
                <p className="">
                  <a
                    className="inline-flex items-start gap-x-2 text-indigo-600 underline hover:text-indigo-500"
                    href={mock.link}
                    target="_blank"
                  >
                    {mock.title}
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};
