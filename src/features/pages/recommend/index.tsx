import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { BestRanking } from "src/features/pages/recommend/types";
import {
  getWorksLink,
  getWorksQuery,
} from "src/features/works/common/utils/link";

const BestRankings: BestRanking[] = [
  {
    title: "Hunter × Hunter",
    key: "hunter_x_hunter",
    official_url: "https://www.ntv.co.jp/hunterhunter/",
    description:
      "必ず見てください。結構長いですが見始めてしまえばすぐ終わります。長いからって見てない方1回見てください。最後まで止まりません。エンディングの入り方とか最高ですごく感動します。1番面白かった回はキメラアント編です。運営者は13週くらいしてます。本当に面白いです。1回でいいので見てください。ぜひ見てください！完結してほしいな...",
    links: {
      u_next_url: "https://video.unext.jp/title/SID0011645",
    },
    data: ["HUNTER×HUNTER(2011)", "HUNTER×HUNTER(2011)", "U2VyaWVzLTYxMg=="],
    slug: 1606,
  },
  {
    title: "僕のヒーローアカデミア",
    key: "my_hero_academia",
    official_url: "https://heroaca.com/",
    description:
      "すごく面白い。ヒーローを目指す物語です。登場キャラクター1人1人にしっかりと物語や過去があってすごく魅力的です。アニメのクオリティも高く、アクションシーンも見応えがあります。運営者の推しは緑谷出久くんです。1番面白かった回は2期のデク vs かっちゃん2です。本当に最高です。映画も3作品あってどれも最高に面白いです。4作品目も発表されたので早く観に行きたいです。グッズもたくさん集めてますが最高です。何よりもキャラデザがいいですね。ぜひ見てください！",
    links: {
      netflix_url: "https://www.netflix.com/title/80135674",
      u_next_url: "https://video.unext.jp/browse/relation/SID0073152/video",
      amazon_prime_url: "https://www.amazon.co.jp/gp/video/detail/B01DZY1588",
    },
    data: ["僕のヒーローアカデミア", "僕のヒーローアカデミア", "U2VyaWVzLTQz"],
    slug: 4591,
  },

  {
    title: "Dr.STONE",
    key: "dr_stone",
    official_url: "https://dr-stone.jp/",
    description:
      "人類全員が石化しちゃう話です。めっちゃワクワクします。科学の力で文明を作り上げていく物語です。科学の勉強にもなります。話数が進むに連れて身近なものが出てくるのでもっと面白いです。科学を駆使した戦闘シーンも結構あります。ただ科学製品作っているアニメじゃないです！偶にお笑い要素も入っていて意外と面白いです。よかったら見てください！",
    links: {
      netflix_url: "https://www.netflix.com/jp/title/81046193",
      u_next_url: "https://video.unext.jp/browse/character/KDG0000063",
      amazon_prime_url:
        "https://www.amazon.co.jp/%EF%BC%A4%EF%BD%92%EF%BC%8E%EF%BC%B3%EF%BC%B4%EF%BC%AF%EF%BC%AE%EF%BC%A5/dp/B07TSFZ7S5",
    },
    data: ["Dr.STONE", "Dr.STONE", "U2VyaWVzLTkwOA=="],
    slug: 6317,
  },
  {
    title: "呪術廻戦",
    key: "jujutsu_kaisen",
    official_url: "https://jujutsukaisen.jp/",
    description:
      "呪術廻戦です。呪いを払う物語です。怒られるかもしれないけどHunter x Hunterにすこし似てますね。戦闘シーンとか迫力あって面白いです。アニメ制作会社のMAPPAさんの作画がすごくいいです！あの作画でさらに迫力が増しています。",
    links: {
      netflix_url: "https://www.netflix.com/jp/title/81278456",
      u_next_url: "https://video.unext.jp/title/SID0050925",
      amazon_prime_url:
        "https://www.amazon.co.jp/%E5%91%AA%E8%A1%93%E5%BB%BB%E6%88%A6/dp/B0BX3Z1WLP",
    },

    data: ["呪術廻戦", "呪術廻戦", "U2VyaWVzLTEzOTE="],
    slug: 6987,
  },
];

export const RecommendPage = () => {
  return (
    <div className="flex-1 text-gray-900">
      <h2 className="text-center text-lg font-bold leading-10 tracking-tight text-gray-900 md:text-xl">
        おすすめのアニメについて
      </h2>
      <p className="mt-6 leading-7 tracking-tight text-gray-900">
        運営者がおすすめのアニメを紹介するページです。
        特に理由はなく、運営者が好きなアニメを紹介しています。
      </p>

      <section className="mt-10">
        <h3 className="flex items-center gap-x-2 font-semibold text-indigo-600">
          <span className="block h-6 w-1.5 bg-gray-900" />
          ベストアニメランキング
        </h3>
        <div className="mt-6 grid gap-y-16 leading-7">
          {BestRankings.map((item, i) => (
            <div key={item.key}>
              <h4 className="font-semibold">
                {i + 1}位：{item.title}
              </h4>
              <div className="grid gap-y-4">
                <p className="leading-8 text-gray-700">{item.description}</p>
                <p className="flex items-start">
                  <a
                    className="inline-flex min-w-max items-center gap-x-1 text-gray-600  underline hover:text-gray-500"
                    href={item.official_url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    公式サイト
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a>
                  <Link
                    as={getWorksLink({
                      id: item.slug,
                      as: true,
                    })}
                    className="ml-4 text-indigo-600  underline hover:text-indigo-500"
                    href={{
                      pathname: getWorksLink({
                        id: item.slug,
                        as: false,
                      }),
                      query: getWorksQuery({
                        series_id: item.data[2],
                        title: item.title[0],
                        series_title: item.data[1],
                      }),
                    }}
                  >
                    {item.title}のページへ
                  </Link>
                </p>
                <p className="flex flex-wrap justify-center gap-4">
                  {item.links.netflix_url && (
                    <a
                      className="inline-flex w-max items-center gap-x-1 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
                      href={item.links.netflix_url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Netflixで見る
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  )}
                  {item.links.u_next_url && (
                    <a
                      className="inline-flex w-max items-center gap-x-1 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                      href={item.links.u_next_url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      U-NEXTで見る
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  )}
                  {item.links.amazon_prime_url && (
                    <a
                      className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                      href={item.links.amazon_prime_url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Amazon Prime Videoで見る
                      <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    </a>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
