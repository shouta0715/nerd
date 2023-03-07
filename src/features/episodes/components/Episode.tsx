import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { ActionIcon, Text, Title } from "@mantine/core";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { EpisodeMenuSkelton } from "src/components/Layout/loading/EpisodeMenuSkelton";
import { InputFiled } from "src/features/comments/components/CommentInput";

import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { CountUpTimer } from "src/features/timer/components/CountUpTImer";

const DynamicChatComments = dynamic(
  () => import("src/features/comments/components/ChatComments"),
  {
    ssr: false,
  }
);

const DynamicFinishComments = dynamic(
  () => import("src/features/comments/components/FinishComments"),
  {
    ssr: false,
    loading: () => <div>loading...</div>,
  }
);

const DynamicEpisodeMenu = dynamic(
  () =>
    import("src/features/episodes/components/EpisodeMenu").then(
      (mod) => mod.EpisodeMenu
    ),
  {
    ssr: false,
    loading: () => <EpisodeMenuSkelton />,
  }
);

export const Episode: FC = () => {
  const router = useRouter();
  const { slug, episode } = router.query;
  const { data } = useQueryEpisode(slug, episode);
  const [isChat, setIsChat] = useState(true);

  return (
    <div className="flex flex-col">
      <div className="container contents lg:mx-auto lg:flex">
        <div className="sticky top-0 contents h-full flex-1 lg:block lg:overflow-y-auto">
          <header className="container mx-auto mb-2 flex flex-col p-6 pb-0">
            <div className="flex w-full flex-1  flex-col gap-2">
              <Title ff="Hiragino Sans" className=" text-base md:text-lg">
                {data?.episodes_by_pk?.work.series_title}
              </Title>
              <Text component="div" className="flex">
                <Text
                  component="p"
                  ff="Hiragino Sans"
                  className="mr-2 text-sm md:text-base"
                >
                  第{data?.episodes_by_pk?.number}話
                </Text>
                <Text
                  component="p"
                  ff="Hiragino Sans"
                  className="flex-1 text-sm md:text-base"
                >
                  {data?.episodes_by_pk?.title}
                </Text>
              </Text>
            </div>
            <div className="mx-auto mt-3 flex max-w-max flex-col">
              <Text
                color="indigo"
                className="m-0 mx-auto mb-1.5 px-10 text-sm font-bold md:text-base"
              >
                開始から
              </Text>
              <CountUpTimer episodeId={data?.episodes_by_pk?.id} />
            </div>
          </header>
          <nav className="sticky top-0 z-10 flex items-center justify-between border-0 border-b border-solid border-b-slate-200 bg-white px-2 lg:border-none">
            <div className="container mx-auto flex items-center justify-between lg:flex-col lg:items-stretch ">
              <div className="flex flex-1 items-center justify-between border-0  border-solid border-slate-200">
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
              </div>
              <DynamicEpisodeMenu
                episodeTitle={data?.episodes_by_pk?.title}
                episodeNumber={data?.episodes_by_pk?.number}
                workTitle={data?.episodes_by_pk?.work.series_title}
                nextEpisodeId={data?.episodes_by_pk?.next_episode_id}
              />
            </div>
          </nav>
        </div>
        <main className="h-max flex-1 lg:w-[36rem] lg:flex-none lg:pb-16">
          <div className="container mx-auto mb-16  lg:contents">
            {isChat ? (
              <DynamicChatComments episode_id={data?.episodes_by_pk?.id} />
            ) : (
              <DynamicFinishComments />
            )}
          </div>
          <InputFiled episode_id={data?.episodes_by_pk?.id} />
        </main>
      </div>
    </div>
  );
};
