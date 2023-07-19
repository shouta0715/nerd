import React, { FC, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "src/components/dynamic/common/header";
import { Nav } from "src/components/dynamic/common/nav";
import { Aside } from "src/components/dynamic/episode/aside";
import { ErrorMessage } from "src/components/Elements/Error/items/ErrorMessage";
import { Loader } from "src/components/Elements/Loader";
import { Skeleton } from "src/components/Elements/Skeleton";
import { TimerModal } from "src/components/Modal/Timer";

import { EpisodeChatInput } from "src/features/chats/components/EpisodeChatInput";

import { EpisodeChats } from "src/features/chats/components/EpisodeChats";

import { EpisodeCommentInput } from "src/features/comments/components/EpisodeCommentInput";
import { EpisodeComments } from "src/features/comments/components/EpisodeComments";

import { useEpisode } from "src/features/episodes/hooks/useEpisode";
import { getIsStatus } from "src/features/timer/utils/getIsStatus";

import { GraphQLError } from "src/libs/error";
import { DetailTitle } from "src/libs/meta/OnlyTitle";
import { validateData } from "src/utils/validateData";

export const Episode: FC = () => {
  const { data, isLoading, isChat, setIsChat, filter, setFilter } =
    useEpisode();

  if (isLoading) {
    return <Skeleton theme="episode" />;
  }

  validateData({
    trigger:
      !data?.episodes_by_pk ||
      getIsStatus({
        end_time: data?.episodes_by_pk?.end_time,
        start_time: data?.episodes_by_pk?.start_time,
      }) !== "finish",
    error: new GraphQLError(),
  });

  return (
    <>
      <DetailTitle
        number={data?.episodes_by_pk?.number}
        subtitle={data?.episodes_by_pk?.title}
        title={data?.episodes_by_pk?.work.series_title}
      />
      <Aside
        data={data}
        filter={filter}
        isChat={isChat}
        setIsChat={setIsChat}
      />

      <div className="flex w-full flex-1 flex-col  bg-white/20 lg:min-h-[calc(100dvh-65px)] lg:py-10">
        <div className="block w-full bg-white/80 py-4 lg:hidden">
          {/* Mobile Design */}
          <Header
            id={data?.episodes_by_pk?.id}
            number={data?.episodes_by_pk?.number}
            sub_title={data?.episodes_by_pk?.title}
            title={data?.episodes_by_pk?.work.series_title}
          />

          {isChat ? (
            <EpisodeChatInput episode_id={data?.episodes_by_pk?.id} />
          ) : (
            <EpisodeCommentInput
              episode_id={data?.episodes_by_pk?.id}
              filter={filter}
            />
          )}
        </div>
        <Nav isChat={isChat} response="sp" setIsChat={setIsChat} />
        <main className="flex flex-1 flex-col pb-[59px] lg:rounded-lg lg:shadow-lg">
          {isChat ? (
            <ErrorBoundary
              key={`${data?.episodes_by_pk?.id}-chats`}
              FallbackComponent={ErrorMessage}
            >
              <Suspense
                fallback={
                  <Loader className="m-auto" size="xl" variant="dots" />
                }
              >
                <EpisodeChats episode_id={data?.episodes_by_pk?.id} />
              </Suspense>
            </ErrorBoundary>
          ) : (
            <ErrorBoundary
              key={`${data?.episodes_by_pk?.id}-comments`}
              FallbackComponent={ErrorMessage}
            >
              <Suspense
                fallback={
                  <Loader className="m-auto" size="xl" variant="dots" />
                }
              >
                <EpisodeComments
                  episode_id={data?.episodes_by_pk?.id}
                  filter={filter}
                  setFilter={setFilter}
                />
              </Suspense>
            </ErrorBoundary>
          )}
        </main>
      </div>
      <TimerModal />
    </>
  );
};
