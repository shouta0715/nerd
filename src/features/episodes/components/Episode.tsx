import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { ActionIcon, Text, Title, UnstyledButton } from "@mantine/core";
import {
  IconChevronRight,
  IconPlayerPause,
  IconPlayerPlay,
} from "@tabler/icons";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { TimerSkelton } from "src/components/Layout/loading/TImerSkelton";

import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { EpisodeMenu } from "src/features/episodes/components/EpisodeMenu";
import { useTimerStatus } from "src/features/timer/hooks/useTimerStatus";
import { useTimerState } from "src/store/timer/timerStore";

const DynamicTimer = dynamic(
  () => import("src/features/timer/components/Timer"),
  {
    ssr: false,
    loading: () => <TimerSkelton />,
  }
);

const DynamicChatComments = dynamic(
  () => import("src/features/comments/components/ChatComments"),
  {
    ssr: false,
    loading: () => <div>loading...</div>,
  }
);

const DynamicFinishComments = dynamic(
  () => import("src/features/comments/components/FinishComments"),
  {
    ssr: false,
    loading: () => <div>loading...</div>,
  }
);

export const Episode: FC = () => {
  const router = useRouter();
  const { slug, category } = router.query;
  const { data } = useQueryEpisode(slug);
  const { getIsArchive } = useTimerStatus();
  const [isChat, setIsChat] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const interval = useTimerState((state) => state.interval);

  return (
    <div className=" flex min-h-screen flex-col">
      <header className="container mx-auto mb-2 flex flex-col p-6 pb-0">
        <div className="flex w-full flex-1  flex-col gap-2">
          <Title ff="Hiragino Sans" className=" text-base  md:text-lg">
            {data?.episodes_by_pk?.work.series_title}
          </Title>
          <Text component="p" className="flex items-center">
            <Text
              component="span"
              ff="Hiragino Sans"
              className="mr-2  text-sm md:text-base"
            >
              第{data?.episodes_by_pk?.number}話
            </Text>
            <Text
              component="span"
              ff="Hiragino Sans"
              className="text-sm md:text-base"
            >
              {data?.episodes_by_pk?.title}
            </Text>
          </Text>
        </div>
        <div className="mx-auto mt-3 flex max-w-max flex-col">
          {getIsArchive({
            end_time: data?.episodes_by_pk?.end_time,
            slug: category,
          }) ? (
            <Text
              color="indigo"
              className="m-0 mx-auto mb-1.5 px-10 text-sm font-bold md:text-base"
            >
              開始から
            </Text>
          ) : (
            <Text
              color="indigo"
              className=" m-0 mx-auto mb-1 text-sm font-bold md:text-base"
            >
              開始まで
            </Text>
          )}
          <DynamicTimer
            episodeId={data?.episodes_by_pk?.id}
            start_time={data?.episodes_by_pk?.start_time}
            isCountUp={getIsArchive({
              end_time: data?.episodes_by_pk?.end_time,
              slug: category,
            })}
          />
        </div>
      </header>
      <nav className="sticky top-0 flex items-center justify-between border-0 border-b border-solid border-b-slate-200 bg-white px-2">
        <div className="container mx-auto flex items-center justify-between">
          <ActionIcon
            color="dark"
            onClick={() => router.back()}
            variant="transparent"
          >
            <ArrowSmallLeftIcon className="h-6 w-6" />
          </ActionIcon>
          <ul className=" flex h-full flex-1 items-center justify-around">
            <Text
              onClick={() => setIsChat(true)}
              color="indigo"
              component="li"
              className={`inline-block cursor-pointer  py-2 text-sm font-bold md:text-base ${
                isChat
                  ? "border-indigo border-0 border-b-2 border-solid"
                  : "border-none"
              }`}
            >
              チャット
            </Text>
            <Text
              onClick={() => setIsChat(false)}
              color="indigo"
              component="li"
              className={`inline-block cursor-pointer py-2 text-sm font-bold md:text-base ${
                !isChat
                  ? "border-indigo border-0 border-b-2 border-solid"
                  : "border-none"
              }`}
            >
              コメント
            </Text>
          </ul>
          <EpisodeMenu
            episodeTitle={data?.episodes_by_pk?.title}
            episodeNumber={data?.episodes_by_pk?.number}
            workTitle={data?.episodes_by_pk?.work.series_title}
            nextEpisodeId={data?.episodes_by_pk?.next_episode_id}
          />
        </div>
      </nav>
      <main className=" flex-1">
        <div className="container mx-auto p-6">
          {isChat ? (
            <DynamicChatComments episode_id={data?.episodes_by_pk?.id} />
          ) : (
            <DynamicFinishComments />
          )}
        </div>
      </main>
      {getIsArchive({
        end_time: data?.episodes_by_pk?.end_time,
        slug: category,
      }) && (
        <div
          className={`fixed bottom-24 right-0  rounded-l-md border-indigo-500 bg-indigo-500 p-2 shadow-xl transition-transform ${
            showPlayButton ? "" : "translate-x-full"
          }`}
        >
          <UnstyledButton
            onClick={() => setShowPlayButton((p) => !p)}
            className="absolute top-2 -left-4 flex h-1/2 w-4 items-center justify-center rounded-r-none rounded-l-md border-l bg-indigo-500 shadow-xl"
          >
            <IconChevronRight
              color="white"
              className={` ${showPlayButton ? "" : "-rotate-180 transform"}`}
            />
          </UnstyledButton>
          <ActionIcon
            variant="transparent"
            size={40}
            className="bg-white"
            onClick={() => {
              interval?.toggle();
            }}
          >
            {interval?.active ? (
              <IconPlayerPause
                size={20}
                className="fill-indigo-500 text-indigo-500"
              />
            ) : (
              <IconPlayerPlay
                size={20}
                className="fill-indigo-500 text-indigo-500"
              />
            )}
          </ActionIcon>
        </div>
      )}
    </div>
  );
};
