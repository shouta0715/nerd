import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Text } from "src/components/Elements/Text";
import { useQuerySearchWorks } from "src/features/works/api/useQuerySearchWorks";

export const SpSearchWorks = () => {
  const router = useRouter();
  const { q } = router.query;
  const { data } = useQuerySearchWorks(q === undefined ? "" : q.toString());

  useEffect(() => {
    if (
      window.innerWidth > 768 &&
      router.pathname === "/search" &&
      router.query.q
    ) {
      router.back();
    }
    window.addEventListener("resize", () => {
      const width = window.innerWidth;

      if (width > 768) {
        router.back();
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        const width = window.innerWidth;

        if (width > 768) {
          router.back();
        }
      });
    };
  }, [router]);

  return (
    <section className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 border-b bg-white/95">
        <div className="relative flex w-full items-center space-x-4 py-3 pl-2 pr-4">
          <button className="flex justify-center " onClick={router.back}>
            <ArrowSmallLeftIcon className="h-6 w-11 text-black" />
          </button>
          <Text
            className="grid flex-1 place-items-center text-base font-bold md:text-lg"
            component="p"
            ff="Hiragino Sans"
          >
            {q}
          </Text>
          <Link
            className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text font-bold text-transparent"
            href="/"
          >
            Nerd
          </Link>
        </div>
      </header>
      <div className="container mx-auto p-4 pb-20">
        {data && data.search_works.length > 0 && (
          <p className="text-center font-bold">検索結果</p>
        )}
        {data && data.search_works.length === 0 && (
          <p className="text-center text-gray-500">
            {/* ''で囲む */}
            &apos;{q}&apos;に一致する作品は見つかりませんでした。
          </p>
        )}
        <ul className="mt-4 space-y-4">
          {data?.search_works.map((work) => (
            <li
              key={work.id}
              className="group relative flex space-x-2 rounded-md bg-white  p-4 shadow"
            >
              <p className="flex-1">{work.series_title}</p>
              <ButtonLink
                as={
                  work.series_id
                    ? work.has_episodes
                      ? `/works/${work.id}?series=${work.series_id}`
                      : `/works/play/${work.id}?series=${work.series_id}`
                    : work.has_episodes
                    ? `/works/${work.id}`
                    : `/works/play/${work.id}`
                }
                className={`h-max font-bold  ${
                  work.has_episodes
                    ? "bg-indigo-50 text-indigo-500"
                    : "bg-indigo-500 text-white"
                }`}
                href={{
                  pathname: `${
                    work.has_episodes
                      ? `/works/${work.id}`
                      : `/works/play/${work.id}`
                  }`,
                  query: {
                    series: work.series_id ?? undefined,
                    work: [work.title, work.series_title],
                  },
                }}
                size="xs"
              >
                {work.has_episodes ? "エピソード一覧へ" : "視聴する"}
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
