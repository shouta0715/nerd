import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React from "react";

export const DataPage = () => {
  return (
    <div className="flex-1">
      <h2 className="text-center text-lg font-bold leading-10 tracking-tight text-gray-900 md:text-xl">
        データについて
      </h2>
      <section className="mt-6">
        <p className="leading-7 tracking-tight text-gray-900">
          このサイトは主に２つのサイトからデータを取得し、表示しています。
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
        <ol className="mt-10 grid list-inside list-decimal gap-y-10 leading-7 text-gray-900">
          <li>
            <span className="mb-2 inline-block font-semibold">
              Annict Developers
            </span>
            <div className="grid gap-y-2 pl-5">
              <p>
                Annict Developers様からデータを取得を行っています。
                <br />
                以下のリンクよりAnnict Developers様のサイトにアクセスできます。
              </p>
              <p>
                <a
                  className="flex items-center gap-x-2 text-indigo-600 underline hover:text-indigo-500"
                  href="https://developers.annict.com/"
                  target="_blank"
                >
                  Annict Developers
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                </a>
              </p>
            </div>
          </li>
          <li>
            <span className="mb-2 inline-block font-semibold">
              しょぼいカレンダー
            </span>
            <div className="grid gap-y-2 pl-5">
              <p>
                当日放送されるアニメの情報を取得するためにしょぼいカレンダー様からデータを取得を行っています。
                <br />
                以下のリンクよりしょぼいカレンダー様のサイトにアクセスできます。
              </p>
              <p>
                <a
                  className="flex items-center gap-x-2 text-indigo-600 underline hover:text-indigo-500"
                  href="https://cal.syoboi.jp/"
                  target="_blank"
                >
                  しょぼいカレンダー
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                </a>
              </p>
            </div>
          </li>
        </ol>
      </section>
    </div>
  );
};
