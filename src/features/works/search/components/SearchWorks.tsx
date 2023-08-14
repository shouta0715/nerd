import {
  ChevronDoubleDownIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Skeleton } from "src/components/Elements/Skeleton";
import {
  getSlugWorkLink,
  getSlugWorkQuery,
} from "src/features/works/common/utils/link";
import { useQuerySearchWorks } from "src/features/works/search/api/useQuerySearchWorks";
import { WorkItem } from "src/features/works/slug/components/WorkItem";
import { DetailTitle } from "src/libs/meta/OnlyTitle";

export const SearchWorks = () => {
  const router = useRouter();
  const { q } = router.query;
  const { data, isPending } = useQuerySearchWorks(
    q === undefined ? "" : q.toString()
  );
  const noEpisodesRef = React.useRef<HTMLParagraphElement>(null);

  const hasEpisodesData = useMemo(() => {
    if (isPending) return null;

    return data?.search_works.filter((work) => work.has_episodes);
  }, [data?.search_works, isPending]);

  const noEpisodesData = useMemo(() => {
    if (isPending) return null;

    return data?.search_works.filter((work) => !work.has_episodes);
  }, [data?.search_works, isPending]);

  if (isPending) {
    return (
      <div className="flex flex-col">
        <div className="mx-auto  mb-4 grid w-full max-w-md place-items-center text-lg  font-bold md:text-xl">
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
        <div className="container mx-auto flex h-full flex-col gap-y-14">
          {data && data.search_works.length === 0 && (
            <p className="text-center text-dimmed">
              &apos;{q}&apos;に一致する作品は見つかりませんでした。
            </p>
          )}
          {hasEpisodesData && hasEpisodesData.length > 0 && (
            <div>
              <p className="flex flex-col items-center justify-center text-lg font-bold md:flex-row md:text-xl">
                {q}の検索結果
                <span className="text-sm">（エピソードあり）</span>
              </p>
              {noEpisodesData && noEpisodesData?.length > 0 && (
                <button
                  className="ml-auto mt-1 flex items-center text-sm text-indigo-600 underline"
                  onClick={() => {
                    noEpisodesRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  エピソードなしはこちら
                  <ChevronDoubleDownIcon className="h-4 w-4" />
                </button>
              )}
              <ul className="mt-10 grid grid-cols-1 gap-y-12 md:gap-16 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                {hasEpisodesData?.map((work) => (
                  <WorkItem key={work.id} work={work} />
                ))}
              </ul>
            </div>
          )}

          {noEpisodesData && noEpisodesData?.length > 0 && (
            <div>
              <p
                ref={noEpisodesRef}
                className=" flex scroll-m-8 flex-col items-center justify-center text-lg font-bold md:flex-row md:text-xl"
              >
                {q}の検索結果<span className="text-sm">（エピソードなし）</span>
              </p>
              <ul className="mt-10 grid grid-cols-1 gap-y-12 md:gap-16 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                {noEpisodesData?.map((work) => (
                  <li
                    key={work.id}
                    className="group relative flex animate-fadeUp flex-col items-center space-x-2 rounded-2xl  border border-solid  border-slate-200 p-3  shadow-lg ring-1 ring-gray-900/5 md:p-4"
                  >
                    <span className="mb-2.5 inline-block flex-1 font-bold">
                      {work.series_title}
                    </span>
                    <ButtonLink
                      as={getSlugWorkLink({
                        id: work.id,
                        as: true,
                      })}
                      className="h-max border-white bg-indigo-600 font-bold text-white hover:bg-indigo-500"
                      href={{
                        pathname: getSlugWorkLink({
                          id: work.id,
                          as: false,
                        }),
                        query: getSlugWorkQuery({
                          title: work.title,
                          series_id: work.series_id,
                          series_title: work.series_title,
                        }),
                      }}
                      leftIcon={<ChevronDoubleRightIcon className="h-5 w-5" />}
                      size="sm"
                    >
                      視聴する
                    </ButtonLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
