import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Loader } from "src/components/Elements/Loader";
import { TopTitle } from "src/components/Elements/TopTitle";
import { useQueryTrends } from "src/features/trends/api/useQueryTrends";
import { Loading } from "src/features/trends/components/Loading";
import { Trend } from "src/features/trends/components/Trend";

export const Trends = () => {
  const { isPending, data, dataUpdatedAt, refetch, isRefetching } =
    useQueryTrends();

  if (isPending) return <Loading />;

  return (
    <div className="flex flex-1 flex-col gap-y-8 pb-8">
      <div>
        <TopTitle
          buildDate={new Date(dataUpdatedAt).toLocaleDateString("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
            minute: "numeric",
            hour: "numeric",
          })}
          title="トレンド"
        />
        <p className="text-xs text-gray-500">
          <span className="md:hidden">左</span>
          <span className="hidden md:inline">右</span>
          下のボタンを押すと最新のトレンドを読み込みます。
        </p>
      </div>
      <ul className="grid gap-y-8">
        {data?.trending_chat_episodes.map((trend, index) => (
          <Trend key={trend.id} index={index} trend={trend} />
        ))}
      </ul>

      <div className="sticky bottom-8 flex w-full px-2 md:justify-end lg:px-3">
        <div className="grid h-12 w-12 place-items-center  rounded-full  bg-red-600  shadow-md shadow-red-400 transition-transform active:translate-y-1 lg:right-14">
          {isRefetching ? (
            <Loader size="xl" theme="white" />
          ) : (
            <button
              aria-label="最新のコメントを読み込む"
              className="grid h-full w-full place-items-center text-white "
              onClick={() => refetch()}
            >
              <ArrowPathIcon className="h-7 w-7 stroke-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
