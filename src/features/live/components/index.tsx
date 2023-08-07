import React, { FC, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Aside } from "src/components/dynamic/live/aside";
import { Header } from "src/components/dynamic/live/header";
import { Nav } from "src/components/dynamic/live/nav";
import { Loader } from "src/components/Elements/Loader";
import { ErrorMessage } from "src/components/Error/items/ErrorMessage";
import { EpisodeCommentInput } from "src/features/comments/episodes/components/EpisodeCommentInput";
import { EpisodeComments } from "src/features/comments/episodes/components/EpisodeComments";
import { FinishLive } from "src/features/live/components/Finish";
import { LiveChatInput } from "src/features/live/components/LiveChatInput";
import { LiveChats } from "src/features/live/components/LiveChats";
import { LiveComment } from "src/features/live/components/LiveComment";
import { useLive } from "src/features/live/hooks/useLive";
import { GetEpisodeQuery } from "src/gql/graphql";

type Props = {
  data: GetEpisodeQuery;
};

export const Live: FC<Props> = ({ data }) => {
  const { isChat, time, mode, isAlreadyFinished } = useLive(data);

  return (
    <>
      <Aside data={data} isChat={isChat} mode={mode} time={time} />

      <div className="flex w-full flex-1 flex-col  bg-white/20 lg:min-h-[calc(100dvh-65px)] lg:py-10">
        <div className="w-full bg-white/80 pt-2 lg:hidden">
          {/* Mobile Design */}
          <Header
            id={data?.episodes_by_pk?.id}
            mode={mode}
            number={data?.episodes_by_pk?.number}
            sub_title={data?.episodes_by_pk?.title}
            time={{
              hours: time?.hours.toString().padStart(2, "0"),
              minutes: time?.minutes.toString().padStart(2, "0"),
              seconds: time?.seconds.toString().padStart(2, "0"),
            }}
            title={data?.episodes_by_pk?.work.series_title}
          />

          {isChat ? (
            <LiveChatInput
              episode_id={data?.episodes_by_pk?.id}
              mode={mode}
              time={time}
            />
          ) : (
            mode === "finish" && (
              <EpisodeCommentInput episode_id={data?.episodes_by_pk?.id} />
            )
          )}
        </div>
        <Nav isChat={isChat} mode={mode} response="sp" />

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
                {isAlreadyFinished ? (
                  <FinishLive episode={data?.episodes_by_pk} />
                ) : (
                  <LiveChats
                    episode_id={data?.episodes_by_pk?.id}
                    mode={mode}
                    time={time}
                  />
                )}
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
                {mode === "finish" ? (
                  <EpisodeComments episode_id={data?.episodes_by_pk?.id} />
                ) : (
                  <LiveComment />
                )}
              </Suspense>
            </ErrorBoundary>
          )}
        </main>
      </div>
    </>
  );
};
