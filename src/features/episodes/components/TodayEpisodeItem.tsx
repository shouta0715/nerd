import { Button, Text, Title } from "@mantine/core";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC, memo } from "react";
import { TimerSkelton } from "src/components/Layout/loading/TImerSkelton";
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
    <li className="relative mx-auto max-w-md flex-1  rounded-md border border-solid border-slate-200 bg-white p-4 drop-shadow-sm hover:bg-slate-50 md:px-6">
      <Link
        href={`/episode/${episode.id}?category=live`}
        className="absolute inset-0 rounded-md"
      />
      <div className="mx-auto flex min-h-full flex-col items-center justify-between">
        <Title
          order={3}
          ff="Hiragino Sans"
          className="mb-1 text-base md:mb-2 md:text-lg"
        >
          {episode.work.series_title}
        </Title>
        <div className="mb-2 flex w-full text-sm md:text-base">
          <Text className="mr-4">{episode.number}.</Text>
          <Text ff="Hiragino Sans">{episode.title}</Text>
        </div>
        {getTimeStatus({
          start_time: episode.start_time,
          end_time: episode.end_time,
        }).timer ? (
          <div className="flex flex-col">
            <Text
              color="indigo"
              className="m-0 mx-auto mb-1.5 px-10 text-sm font-bold md:text-base"
            >
              {
                getTimeStatus({
                  start_time: episode.start_time,
                  end_time: episode.end_time,
                }).status
              }
            </Text>
            <DynamicCountDownTimer
              start_time={episode.start_time}
              id={episode.id}
            />
            <Button className="mt-2 ml-auto" variant="light">
              参加する
            </Button>
          </div>
        ) : (
          <div>
            <Button className="mr-4" color="red" variant="light">
              アーカイブで参加する
            </Button>
          </div>
        )}
      </div>
    </li>
  );
});

export default TodayEpisodeItem;
