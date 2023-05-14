import {
  ChatBubbleLeftRightIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { SearchModal } from "src/components/Elements/SearchModal";
import { useSearch } from "src/hooks/useSearch";

export const Usage = () => {
  const { isSearchOpen, setIsSearchOpen, search, setSearch, submitHandler } =
    useSearch();

  return (
    <>
      <div className="container mx-auto flex-1 bg-gray-50  py-4">
        <section className="px-3 font-hiragino-sans md:px-6">
          <h2 className="pb-4 text-center font-hiragino-sans text-xl font-bold">
            使い方
          </h2>
          <ol className="text-sm md:text-base">
            <li className="relative flex pb-8">
              <div className="absolute left-5 z-0 h-full w-0.5 bg-slate-200" />
              <div className="z-10 mr-4 grid h-10 w-10 place-items-center rounded-full bg-blue-500 font-futura ">
                <MagnifyingGlassIcon className="h-6 w-6 fill-white stroke-white" />
              </div>
              <p className="flex-1 pt-1">
                見るアニメを検索し、エピソードまたはアニメを選択します。
                <button
                  className="text-sm text-indigo-500 underline md:hidden"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  検索はこちら
                </button>
              </p>
              <p className="ml-2 h-10 pt-1.5 text-xs text-gray-500  md:pt-2">
                Step 1. 検索
              </p>
            </li>
            <li className="relative flex pb-8">
              <div className="absolute left-5 z-0 h-full w-0.5 bg-slate-200" />
              <div className="z-10 mr-4 grid h-10 w-10 place-items-center rounded-full bg-green-500 font-futura ">
                <PlayIcon className="h-6 w-6 fill-white stroke-white" />
              </div>
              <p className="flex-1 pt-1">
                チャットを選択し、動画配信サービスの再生ボタンと同時に再生ボタンをクリックします。
              </p>
              <p className="ml-2 h-10 pt-1.5 text-xs text-gray-500  md:pt-2">
                Step 2. 再生
              </p>
            </li>
            <li className="relative flex pb-8">
              <div className="absolute left-5 z-0 h-full w-0.5 bg-slate-200" />
              <div className="z-10 mr-4 grid h-10 w-10 place-items-center rounded-full bg-blue-500 font-futura ">
                <PaperAirplaneIcon className="h-6 w-6 fill-white stroke-white" />
              </div>
              <p className="flex-1 pt-1">
                画面下部のコメント欄に感想を入力し、感想を送信します。
              </p>

              <p className="ml-2 h-10 pt-1.5 text-xs text-gray-500  md:pt-2">
                Step 3. 投稿
              </p>
            </li>
            <li className="relative flex pb-8">
              <div className="absolute left-5 z-0 h-full w-0.5 bg-slate-200" />
              <div className="z-10 mr-4 grid h-10 w-10 place-items-center rounded-full bg-green-500 font-futura ">
                <ChatBubbleLeftRightIcon className="h-6 w-6 fill-white stroke-white" />
              </div>
              <p className="flex-1 pt-1">
                動画が終了したら、コメントタブを選択し、アニメ全体の感想を投稿できます。
                <br />
                <span className="text-sm underline decoration-pink-500 decoration-dashed underline-offset-2 before:inline-block before:content-['※']">
                  テレビ放送が終了しているアニメのコメントは、いつでも投稿できます。
                </span>
              </p>

              <p className="ml-2 h-10 pt-1.5 text-xs text-gray-500  md:pt-2">
                Step 4. 投稿
              </p>
            </li>
            <li className="relative flex ">
              <div className="z-10 mr-4 grid h-10 w-10 place-items-center rounded-full bg-pink-500 font-futura ">
                <HandThumbUpIcon className="h-6 w-6 fill-white stroke-white" />
              </div>
              <p className="flex-1 pt-1">
                投稿名を自由に変更して、いろいろなアニメの感想を投稿してみましょう。
              </p>

              <p className="ml-2 h-10 pt-1.5 text-xs text-gray-500  md:pt-2">
                Step 5. 変更
              </p>
            </li>
          </ol>
        </section>
        <section className="mt-4 px-3 font-hiragino-sans md:px-6">
          <h2 className="py-4 text-center font-hiragino-sans text-xl font-bold">
            ルール・注意事項
          </h2>
          <ol className="list-inside list-decimal space-y-4">
            <li>不適切なコメントは禁止です。</li>
            <li>暴言や、誹謗中傷、個人情報、などの投稿は禁止です。</li>
            <li>関係のないアニメの感想を投稿は禁止です。</li>
            <li>悪意のあるネタバレは禁止です。</li>
          </ol>
        </section>
      </div>

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
