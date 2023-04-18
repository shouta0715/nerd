import React, { Suspense } from "react";
import { EpisodeSkelton } from "src/components/Elements/Loader/loaders/EpisodeSkelton";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { Modal } from "src/components/Elements/Modal";
import { EpisodeCommentInput } from "src/features/comments/components/EpisodeCommentInput";
import { EpisodeComments } from "src/features/comments/components/EpisodeComments";
import { FinishLive } from "src/features/live/components/FinishLive";
import { LiveChatInput } from "src/features/live/components/LiveChatInput";
import { LiveChats } from "src/features/live/components/LiveChats";
import { LiveComment } from "src/features/live/components/LiveComment";
import { LiveHeader } from "src/features/live/components/LiveHeader";
import { LiveNav } from "src/features/live/components/LiveNav";
import { useLive } from "src/features/live/hooks/useLive";

export const Live = () => {
  const {
    data,
    isLoading,
    isChat,
    setIsChat,
    time,
    mode,
    isTimeLoading,
    isAlreadyFinished,
  } = useLive();

  if (isLoading || isTimeLoading) {
    return <EpisodeSkelton />;
  }

  return (
    <>
      <div className="flex min-h-screen animate-fadeUp flex-col ">
        <div className="container contents lg:mx-auto lg:flex">
          <div className="sticky top-0 contents h-full flex-1 pb-16 lg:block lg:max-h-screen lg:overflow-y-auto">
            <LiveHeader
              episode_number={data?.episodes_by_pk?.number}
              episode_title={data?.episodes_by_pk?.title}
              id={data?.episodes_by_pk?.id}
              isTimeLoading={isTimeLoading}
              mode={mode}
              time={{
                hours: time?.hours.toString().padStart(2, "0"),
                minutes: time?.minutes.toString().padStart(2, "0"),
                seconds: time?.seconds.toString().padStart(2, "0"),
              }}
              title={data?.episodes_by_pk?.work.series_title}
            />
            <LiveNav
              data={data}
              isChat={isChat}
              mode={mode}
              setIsChat={setIsChat}
            />
            <LiveChatInput
              episode_id={data?.episodes_by_pk?.id}
              isTimerLoading={isTimeLoading}
              mode={mode}
              time={time}
            />
          </div>
          <main className="flex flex-1 flex-col bg-gray-50  lg:min-h-screen lg:w-1/2 lg:flex-none lg:pb-16">
            <div className="container  mx-auto mb-16 flex flex-1  lg:contents">
              {isChat ? (
                <Suspense
                  fallback={<Loader className="m-auto" variant="dots" />}
                >
                  {isAlreadyFinished ? (
                    <FinishLive episode={data?.episodes_by_pk} />
                  ) : (
                    <LiveChats
                      episode_id={data?.episodes_by_pk?.id}
                      isTimerLoading={isTimeLoading}
                      mode={mode}
                      time={time}
                    />
                  )}
                </Suspense>
              ) : (
                <Suspense
                  fallback={<Loader className="m-auto" variant="dots" />}
                >
                  {mode === "finish" ? (
                    <>
                      <EpisodeComments episode_id={data?.episodes_by_pk?.id} />
                      <EpisodeCommentInput
                        episode_id={data?.episodes_by_pk?.id}
                      />
                    </>
                  ) : (
                    <LiveComment setIsChat={setIsChat} />
                  )}
                </Suspense>
              )}
            </div>
          </main>
        </div>
      </div>
      <Modal />
    </>
  );
};
