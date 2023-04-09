import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { useQuerySearchWorks } from "src/features/works/api/useQuerySearchWorks";

export const SpSearchWorks = () => {
  const router = useRouter();
  const { q } = router.query;
  const { data } = useQuerySearchWorks(q === undefined ? "" : q.toString());

  useEffect(() => {
    const onResize = () => {
      const width = window.innerWidth;

      if (width > 768) {
        router.back();
      }
    };

    if (
      window.innerWidth > 768 &&
      router.pathname === "/search" &&
      router.query.q
    ) {
      router.back();
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [router]);

  return (
    <section className="flex-1 bg-gray-50">
      <div className="container mx-auto p-4">
        {data && data.search_works.length > 0 && (
          <p className="grid place-items-center font-bold">{q}の検索結果</p>
        )}
        {data && data.search_works.length === 0 && (
          <p className="text-center text-dimmed">
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
                className={`h-max py-1.5 font-bold  ${
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
