import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import React, { FC, memo } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { ModeBadge } from "src/components/Elements/ModeBadge";
import { Skeleton } from "src/components/Elements/Skeleton";
import { Text } from "src/components/Elements/Text";
import { TodayEpisode } from "src/features/episodes/types";
import {
  genEpisodePlaceholder,
  genTodayEpisodePlaceholder,
} from "src/features/episodes/utils";
import { useLiveTimer } from "src/features/timer/hooks/useLiveTimer";

const DynamicTimer = dynamic(
  () => import("src/features/timer/components/Timer").then((mod) => mod.Timer),
  {
    ssr: false,
    loading: () => <Skeleton theme="timer" />,
  }
);

type Props = {
  episode: TodayEpisode;
};

const TodayEpisodeItem: FC<Props> = memo(({ episode }) => {
  const { mode, time } = useLiveTimer({
    start_time: episode.start_time,
    end_time: episode.end_time,
  });

  return (
    <li
      className={`relative animate-fadeUp rounded-xl border bg-white pb-4 ${
        mode === "down" ? "border-indigo-200" : ""
      } ${mode === "up" ? "border-orange-200" : ""} ${
        mode === "finish" ? "border-pink-200" : ""
      }`}
    >
      <div className="mx-auto flex h-full flex-col items-center">
        <div
          className={`mb-2 flex w-full flex-col rounded-t-xl p-4 ${
            mode === "down" ? "bg-indigo-500" : ""
          } ${mode === "up" ? "bg-orange-500" : ""} ${
            mode === "finish" ? "bg-pink-500" : ""
          }`}
        >
          <ModeBadge mode={mode} start_time={episode.start_time} />
          <div className="flex w-full flex-1 flex-col items-center gap-1">
            <Text
              className="line-clamp-1 text-base font-bold text-white md:text-lg"
              component="h4"
            >
              {episode?.work.series_title}
            </Text>
            <Text className="flex text-white" component="div">
              <Text className="mr-2 text-sm md:text-base" component="p">
                第{episode?.number}話
              </Text>
              <Text
                className="line-clamp-1 flex-1 text-sm md:text-base"
                component="p"
              >
                {episode?.title}
              </Text>
            </Text>
          </div>
        </div>
        {mode !== "finish" ? (
          <div className="flex flex-1 flex-col">
            <Text
              className={`mx-auto mb-1.5 text-sm font-bold  md:text-base ${
                mode === "down" ? "text-indigo-500" : "text-orange-500"
              }`}
            >
              {mode === "down" ? "開始まで" : "開始から"}
            </Text>
            <DynamicTimer
              hours={time.hours.toString().padStart(2, "0")}
              id={episode.id}
              isTimeLoading={false}
              minutes={time.minutes.toString().padStart(2, "0")}
              seconds={time.seconds.toString().padStart(2, "0")}
            />
            <ButtonLink
              as={`/episodes/live/${episode.id}`}
              className={`${
                mode === "down"
                  ? "bg-indigo-500 text-white"
                  : "bg-orange-500 text-white"
              } ml-auto mt-2 rounded-md px-2 py-2 text-sm font-bold`}
              href={{
                pathname: `/episodes/live/${episode.id}`,
                query: {
                  episode: genTodayEpisodePlaceholder(episode),
                },
              }}
              size="sm"
            >
              参加する
            </ButtonLink>
          </div>
        ) : (
          <div className=" mt-3 flex w-full flex-1 flex-col items-center justify-end space-y-3">
            <ButtonLink
              as={`/episodes/${episode.id}`}
              className="py-2"
              href={{
                pathname: `/episodes/${episode.id}`,
                query: {
                  episode: genEpisodePlaceholder(
                    episode,
                    episode.work.series_title
                  ),
                },
              }}
              leftIcon={<ChevronDoubleRightIcon className="h-5 w-5" />}
              size="xs"
              theme="secondary"
            >
              アーカイブで参加する
            </ButtonLink>
            <ButtonLink
              as={
                episode.work.series_id
                  ? `/works/${episode.work.id}?series=${episode.work.series_id}`
                  : `/works/${episode.work.id}`
              }
              className="py-2"
              href={{
                pathname: `${`/works/${episode.work.id}`}`,
                query: {
                  series: episode.work.series_id ?? undefined,
                  work: [episode.work.title, episode.work.series_title],
                },
              }}
              leftIcon={<Square3Stack3DIcon className="h-5 w-5" />}
              size="xs"
              theme="dark"
            >
              他のエピソードを見る
            </ButtonLink>
          </div>
        )}
      </div>
    </li>
  );
});

export default TodayEpisodeItem;
