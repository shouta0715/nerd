/* eslint-disable no-nested-ternary */
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";

import { useSearchWorksState } from "src/features/works/store";

const DynamicLottieResult = dynamic(
  () =>
    import("public/lottie/70319-movie-camera.json").then((data) => {
      const DynamicLottie = dynamic(() => import("lottie-react"));

      return () => (
        <DynamicLottie animationData={data} className="mx-auto w-1/2" />
      );
    }),
  {
    ssr: false,
  }
);

export const SearchWorks = () => {
  const [data, isLoading] = useSearchWorksState((state) => [
    state.data,
    state.isLoading,
  ]);

  if (isLoading) {
    return (
      <div className="w-full">
        <Loader className="mx-auto" />
      </div>
    );
  }

  return (
    <>
      <div>
        {data && data?.length > 0 && (
          <p className="text-center font-bold">検索結果</p>
        )}
        {data && data.length === 0 && (
          <p className="text-center text-gray-500">見つかりませんでした</p>
        )}
        <ul className="space-y-2 pt-6 empty:py-0">
          {data?.map((work) => (
            <li key={work.id} className="group relative py-2">
              <div className="absolute bottom-0 h-[1px] w-full bg-slate-200 group-hover:animate-border" />
              <CubeTransparentIcon className="absolute right-0 h-6 w-6 stroke-gray-300 transition-transform group-hover:rotate-90 group-hover:stroke-indigo-500" />
              <Link
                as={
                  work.series_id
                    ? work.has_episodes
                      ? `/works/${work.id}?series=${work.series_id}`
                      : `/works/play/${work.id}?series=${work.series_id}`
                    : work.has_episodes
                    ? `/works/${work.id}`
                    : `/works/play/${work.id}`
                }
                className="block pr-8"
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
              >
                {work.series_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <DynamicLottieResult />
    </>
  );
};
