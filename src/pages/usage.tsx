import { NextPage } from "next";
import React from "react";
import { SearchModal } from "src/components/Elements/SearchModal";
import { Layout } from "src/components/Layout/Layout";
import { useSearch } from "src/hooks/useSearch";

const Usage: NextPage = () => {
  const { isSearchOpen, setIsSearchOpen, search, setSearch, submitHandler } =
    useSearch();

  return (
    <>
      <Layout>
        <div className="flex-1  bg-gray-50 py-4">
          <h1 className=" px-3 font-hiragino-sans text-xl font-bold md:px-6">
            <div className="flex items-center">
              <div className="mr-2 rounded-xl bg-indigo-500 px-2.5 py-1 font-bold text-white">
                Q
              </div>
              Nerd とは？
            </div>
            <p className="mt-2 font-hiragino-sans text-base font-normal">
              Nerdとは、匿名またはログインしてアニメの感想を投稿できるサイトです。
            </p>
          </h1>
          <section className="mt-4 border-t border-t-slate-200 px-3 font-hiragino-sans md:px-6">
            <h2 className="py-4 text-center font-hiragino-sans text-xl font-bold">
              使い方
            </h2>
            <ol className="">
              <li className="relative flex pb-10">
                <div className="absolute left-5 z-0 h-full w-px bg-slate-200" />
                <div className="z-10 mr-4 grid h-10 w-10 place-items-center rounded-full border border-indigo-200 bg-white font-futura text-indigo-500">
                  1
                </div>
                <p className="flex-1 self-center">
                  見るアニメを検索します。
                  <button
                    className="text-sm text-indigo-500 underline md:hidden"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  >
                    検索はこちら
                  </button>
                </p>
              </li>
              <li className="relative flex pb-10">
                <div className="absolute left-5 z-0 h-full w-px bg-slate-200" />
                <div className="z-10 mr-4 grid h-10 w-10 place-items-center rounded-full border border-indigo-200 bg-white font-futura text-indigo-500">
                  2
                </div>
                <p className="flex-1 self-center">
                  チャットを選択し、動画配信サービスの再生ボタンと同時に再生ボタンをクリックします。
                </p>
              </li>
              <li className="relative flex pb-10">
                <div className="absolute left-5 z-0 h-full w-px bg-slate-200" />
                <div className="z-10 mr-4 grid h-10 w-10 place-items-center rounded-full border border-indigo-200 bg-white font-futura text-indigo-500">
                  3
                </div>
                <p className="flex-1 self-center">
                  画面下部のコメント欄に感想を入力し、感想を送信します。
                </p>
              </li>
              <li className="relative flex pb-10">
                <div className="absolute left-5 z-0 h-full w-px bg-slate-200" />
                <div className="z-10 mr-4 grid h-10 w-10 place-items-center rounded-full border border-indigo-200 bg-white font-futura text-indigo-500">
                  4
                </div>
                <p className="flex-1 self-center">
                  動画が終了したら、コメントタブを選択し、アニメ全体の感想を投稿できます。
                  <br />
                  <span className="text-sm underline decoration-pink-500 decoration-dashed underline-offset-2 before:inline-block before:content-['※']">
                    テレビ放送が終了しているアニメのコメントは、いつでも投稿できます。
                  </span>
                </p>
              </li>
              <li className="relative flex pb-10">
                <div className="z-10 mr-4 grid h-10 w-10 place-items-center rounded-full border border-indigo-200 bg-white font-futura text-indigo-500">
                  5
                </div>
                <p className="flex-1 self-center">
                  投稿名を自由に変更して、いろいろなアニメの感想を投稿してみましょう。
                </p>
              </li>
            </ol>
          </section>
          <section className="mt-4 border-t border-t-slate-200 px-3 font-hiragino-sans md:px-6">
            <h2 className="py-4 text-center font-hiragino-sans text-xl font-bold">
              ルール
            </h2>
          </section>
        </div>
      </Layout>
      <SearchModal
        isSearchOpen={isSearchOpen}
        search={search}
        setIsSearchOpen={setIsSearchOpen}
        setSearch={setSearch}
        submitHandler={submitHandler}
      />
    </>
  );
};

export default Usage;
