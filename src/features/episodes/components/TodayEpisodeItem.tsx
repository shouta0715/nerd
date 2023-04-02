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
  const { mode, time, isTime } = useLiveTimer({
    start_time: episode.start_time,
    end_time: episode.end_time,
  });

  return (
    <li className="relative flex-1 rounded-md border border-solid border-slate-200 bg-white p-4 shadow  md:px-6">
      <div className="mx-auto flex min-h-full flex-col items-center justify-between">
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
            <Text className="m-0 mx-auto mb-1.5 px-10 text-sm font-bold text-indigo-500 md:text-base">
              {mode === "down" ? "開始まで" : "終了まで"}
            </Text>
            <DynamicTimer
              hours={time.hours}
              id={episode.id}
              isTime={isTime}
              minutes={time.minutes}
              seconds={time.seconds}
            />
            <Link
              as={`/episodes/live/${episode.id}`}
              className="light-bg ml-auto mt-2 rounded-md px-3 py-2 text-sm font-bold "
              href={{
                pathname: `/episodes/live/${episode.id}`,
                query: {
                  episode: [
                    episode.work.series_title,
                    episode.title,
                    episode.number.toString(),
                    episode.id,
                    episode.has_next_episode,
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
              className="inline-block w-max rounded-md bg-red-50 px-3 py-2 text-sm font-bold text-red-500"
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
