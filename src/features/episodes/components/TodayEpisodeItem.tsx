import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC, memo } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { TimerSkelton } from "src/components/Elements/Loader/loaders/TimerSkelton";
import { Text } from "src/components/Elements/Text";
import { Episode } from "src/features/episodes/types";
import { useLiveTimer } from "src/features/timer/hooks/useLiveTimer";

const DynamicTimer = dynamic(
  () => import("src/features/timer/components/Timer").then((mod) => mod.Timer),
  {
    ssr: false,
    loading: () => <TimerSkelton />,
  }
);

type Props = {
  episode: Episode;
};

const TodayEpisodeItem: FC<Props> = memo(({ episode }) => {
  const { mode, time } = useLiveTimer({
    start_time: episode.start_time,
    end_time: episode.end_time,
  });

  return (
    <li className="relative flex-1 animate-fadeUp rounded-md border border-slate-200 bg-white p-4">
      <div className="mx-auto flex flex-col items-center ">
        {mode === "up" && (
          <Text
            className="mb-2 inline-block self-start rounded-md bg-amber-50 px-1.5 py-1 text-xs font-semibold text-amber-500"
            component="span"
          >
            開始中
          </Text>
        )}
        {mode === "down" && (
          <Text
            className="mb-2 inline-block self-start rounded-md bg-indigo-50 px-1.5 py-1 text-xs font-semibold text-indigo-500"
            component="span"
          >
            {new Date(episode.start_time).toLocaleString("ja-JP", {
              month: "narrow",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
            より開始
          </Text>
        )}
        {mode === "finish" && (
          <Text
            className="mb-2 inline-block self-start rounded-md bg-pink-50 px-1.5 py-1 text-xs font-semibold text-pink-500"
            component="span"
          >
            終了しました
          </Text>
        )}
        <div className="flex w-full flex-1 flex-col items-center gap-2">
          <Text
            className=" text-base font-bold md:text-lg"
            component="h4"
            ff="Hiragino Sans"
          >
            {episode?.work.series_title}
          </Text>
          <Text className="flex" component="div">
            <Text
              className="mr-2 text-sm md:text-base"
              component="p"
              ff="Hiragino Sans"
            >
              第{episode?.number}話
            </Text>
            <Text
              className="flex-1 text-sm md:text-base"
              component="p"
              ff="Hiragino Sans"
            >
              {episode?.title}
            </Text>
          </Text>
        </div>
        {mode !== "finish" ? (
          <div className="flex flex-col">
            <Text
              className={`m-0 mx-auto mb-1.5 mt-2 px-10 text-sm font-bold  md:text-base ${
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
            <Link
              as={`/episodes/live/${episode.id}`}
              className={`${
                mode === "down"
                  ? "bg-indigo-500 text-white"
                  : "bg-orange-500 text-white"
              } ml-auto mt-2 rounded-md px-3 py-2 text-sm font-bold`}
              href={{
                pathname: `/episodes/live/${episode.id}`,
                query: {
                  episode: [
                    episode.work.series_title,
                    episode.title,
                    episode.number.toString(),
                    episode.id,
                    episode.has_next_episode,
                    episode.start_time,
                    episode.end_time,
                  ],
                },
              }}
            >
              参加する
            </Link>
          </div>
        ) : (
          <div className="z-10 mt-3 flex w-full flex-col items-center space-y-3">
            <ButtonLink
              as={`/episodes/${episode.id}`}
              className="inline-block w-max rounded-md bg-pink-500 px-3 py-2 text-sm font-bold text-white"
              href={{
                pathname: `/episodes/${episode.id}`,
                query: {
                  episode: [
                    episode.work.series_title,
                    episode.title,
                    episode.number.toString(),
                    episode.id,
                    episode.has_next_episode,
                    episode.start_time,
                    episode.end_time,
                  ],
                },
              }}
            >
              アーカイブで参加する
            </ButtonLink>
            <ButtonLink
              as={
                episode.work.series_id
                  ? `/works/${episode.work.id}?series=${episode.work.series_id}`
                  : `/works/${episode.work.id}`
              }
              className="mx-auto flex w-full max-w-max items-center justify-center rounded-md border border-solid bg-gray-800 px-2 py-2 text-center text-xs font-bold text-white md:px-4 md:py-2 md:text-sm"
              href={{
                pathname: `${`/works/${episode.work.id}`}`,
                query: {
                  series: episode.work.series_id ?? undefined,
                  work: [episode.work.title, episode.work.series_title],
                },
              }}
              leftIcon={<Square3Stack3DIcon className="h-5 w-5" />}
              size="xs"
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
