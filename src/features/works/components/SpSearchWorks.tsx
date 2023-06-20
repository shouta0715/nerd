import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Skeleton } from "src/components/Elements/Skeleton";
import { useQuerySearchWorks } from "src/features/works/api/useQuerySearchWorks";
import { WorkItem } from "src/features/works/components/WorkItem";
import { DetailTitle } from "src/libs/meta/OnlyTitle";

export const SpSearchWorks = () => {
  const router = useRouter();
  const { q } = router.query;
  const { data, isLoading } = useQuerySearchWorks(
    q === undefined ? "" : q.toString()
  );

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

  if (isLoading) {
    return (
      <div className="flex flex-col">
        <div className="mx-auto  mb-4 grid  w-full max-w-md  place-items-center font-bold">
          {q ? `${q}で検索中...` : "検索中..."}
        </div>
        <Skeleton theme="work" />
      </div>
    );
  }

  return (
    <>
      <DetailTitle title={`${q}の検索結果`} />
      <section className="h-full flex-1">
        <div className="container mx-auto h-full">
          {data && data.search_works.length > 0 && (
            <p className="grid place-items-center font-bold">{q}の検索結果</p>
          )}
          {data && data.search_works.length === 0 && (
            <p className="text-center text-dimmed">
              &apos;{q}&apos;に一致する作品は見つかりませんでした。
            </p>
          )}
          <ul className="mt-4 grid grid-cols-1 space-y-4">
            {data?.search_works.map((work) =>
              work.has_episodes ? (
                <WorkItem key={work.id} work={work} />
              ) : (
                <li
                  key={work.id}
                  className="group relative flex animate-fadeUp flex-col items-center space-x-2 rounded-md border border-solid border-slate-200 bg-white p-3 shadow md:p-4"
                >
                  <span className="mb-2.5 inline-block flex-1 font-bold">
                    {work.series_title}
                  </span>
                  <ButtonLink
                    as={`/works/play/${work.id}`}
                    className="h-max border-white bg-indigo-500 font-bold text-white hover:bg-indigo-600"
                    href={{
                      pathname: `${`/works/play/${work.id}`}`,
                      query: {
                        work: [work.title, work.series_title],
                      },
                    }}
                    leftIcon={<ChevronDoubleRightIcon className="h-5 w-5" />}
                    size="sm"
                  >
                    視聴する
                  </ButtonLink>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </>
  );
};
