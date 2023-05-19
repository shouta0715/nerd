import React, { Suspense } from "react";

import { Loader } from "src/components/Elements/Loader";
import { Skeleton } from "src/components/Elements/Skeleton";
import { MainWrapper } from "src/components/Wrapper/Main/MainWrapper";
import { EpisodeCommentInput } from "src/features/comments/components/EpisodeCommentInput";
import { EpisodeComments } from "src/features/comments/components/EpisodeComments";
import { FinishLive } from "src/features/live/components/FinishLive";
import { LiveChatInput } from "src/features/live/components/LiveChatInput";
import { LiveChats } from "src/features/live/components/LiveChats";
import { LiveComment } from "src/features/live/components/LiveComment";
import { LiveHeader } from "src/features/live/components/LiveHeader";
import { LiveNav } from "src/features/live/components/LiveNav";
import { useLive } from "src/features/live/hooks/useLive";

import { NotFoundError } from "src/libs/error";
import { DetailTitle } from "src/libs/meta/OnlyTitle";
import { validateData } from "src/utils/validateData";

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
    filter,
    setFilter,
  } = useLive();

  if (isLoading || isTimeLoading) {
    validateData({
      trigger: !data?.episodes_by_pk && !isLoading,
      error: new NotFoundError(),
    });

    return <Skeleton theme="episode" />;
  }

  return (
    <>
      <DetailTitle
        number={data?.episodes_by_pk?.number}
        subtitle={data?.episodes_by_pk?.title}
        title={data?.episodes_by_pk?.work.series_title}
      />
      <div className="sticky top-0 z-[11] contents  h-full flex-1 lg:block lg:max-h-[calc(100dvh-3.5rem)] lg:overflow-y-auto">
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
        {isChat ? (
          <LiveChatInput
            episode_id={data?.episodes_by_pk?.id}
            isTimerLoading={isTimeLoading}
            mode={mode}
            time={time}
          />
        ) : (
          mode === "finish" && (
            <EpisodeCommentInput
              episode_id={data?.episodes_by_pk?.id}
              filter={filter}
            />
          )
        )}
      </div>
      <MainWrapper>
        {isChat ? (
          <Suspense
            fallback={<Loader className="m-auto" size="xl" variant="dots" />}
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
            fallback={<Loader className="m-auto" size="xl" variant="dots" />}
          >
            {mode === "finish" ? (
              <EpisodeComments
                episode_id={data?.episodes_by_pk?.id}
                filter={filter}
                setFilter={setFilter}
              />
            ) : (
              <LiveComment setIsChat={setIsChat} />
            )}
          </Suspense>
        )}
      </MainWrapper>
    </>
  );
};
