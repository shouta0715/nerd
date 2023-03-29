import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC, memo } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { TimerSkelton } from "src/components/Elements/Loader/loaders/TimerSkelton";
import { Text } from "src/components/Elements/Text";
import { Episode } from "src/features/episodes/types";
import { useTimerStatus } from "src/features/timer/hooks/useTimerStatus";

const DynamicCountDownTimer = dynamic(
  () =>
    import("src/features/timer/components/CountDownTimer").then(
      (mod) => mod.CountDownTimer
    ),
  {
    ssr: false,
    loading: () => <TimerSkelton />,
  }
);

type Props = {
  episode: Episode;
};

const TodayEpisodeItem: FC<Props> = memo(({ episode }) => {
  const { getTimeStatus } = useTimerStatus();

  return (
    <li className="relative flex-1 rounded-md border border-solid border-slate-200 bg-white p-4 shadow  md:px-6">
      <Link
        className="absolute inset-0 rounded-md"
        href={`/episodes/${episode.id}?category=live`}
        scroll={false}
      />
      <div className="mx-auto flex min-h-full flex-col items-center justify-between">
        <h3 className="mb-1 font-hiragino-sans text-base font-bold md:mb-2 md:text-lg">
          {episode.work.series_title}
        </h3>
        <div className="mb-2 flex w-full items-center justify-center text-sm md:text-base">
          <Text
            className="mr-2 text-sm md:text-base"
            component="p"
            ff="Hiragino Sans"
          >
            第{episode.number}話
          </Text>
          <Text
            className=" text-sm md:text-base"
            component="p"
            ff="Hiragino Sans"
          >
            {episode.title}
          </Text>
        </div>
        {getTimeStatus({
          start_time: episode.start_time,
          end_time: episode.end_time,
        }).timer ? (
          <div className="flex flex-col">
            <Text className="m-0 mx-auto mb-1.5 px-10 text-sm font-bold text-indigo-500 md:text-base">
              {
                getTimeStatus({
                  start_time: episode.start_time,
                  end_time: episode.end_time,
                }).status
              }
            </Text>
            <DynamicCountDownTimer
              id={episode.id}
              start_time={episode.start_time}
            />
            <Link
              className="light-bg ml-auto mt-2 rounded-md px-3 py-2 text-sm font-bold "
              href={`/episode/${episode.id}?category=archive`}
            >
              参加する
            </Link>
          </div>
        ) : (
          <div className="z-10 flex w-full flex-col items-center space-y-3">
            <ButtonLink
              className="inline-block w-max rounded-md bg-red-50 px-3 py-2 text-sm font-bold text-red-500"
              href={`/episodes/${episode.id}?category=archive`}
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
