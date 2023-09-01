import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "src/components/dynamic/common/header";
import { Nav } from "src/components/dynamic/common/nav";
import { Aside } from "src/components/dynamic/episode/aside";
import { Loader } from "src/components/Elements/Loader";
import { Skeleton } from "src/components/Elements/Skeleton";
import { ErrorMessage } from "src/components/Error/items/ErrorMessage";
import { TimerModal } from "src/components/Modal/Timer";
import { EpisodeChatInput } from "src/features/chats/episodes/components/EpisodeChatInput";
import { EpisodeCommentInput } from "src/features/comments/episodes/components/EpisodeCommentInput";
import { useEpisode } from "src/features/episodes/hooks/useEpisode";
import { getIsStatus } from "src/features/timer/utils/getIsStatus";
import { GraphQLError } from "src/libs/error";
import { DetailTitle } from "src/libs/meta/OnlyTitle";
import { validateData } from "src/utils/client/validateData";

const DynamicChats = dynamic(
  () =>
    import("src/features/chats/episodes/components/EpisodeChats").then(
      (mod) => mod.EpisodeChats
    ),
  {
    loading: () => <Loader className="m-auto" size="xl" variant="dots" />,
  }
);

const DynamicComments = dynamic(
  () =>
    import("src/features/comments/episodes/components/EpisodeComments").then(
      (mod) => mod.EpisodeComments
    ),
  {
    loading: () => <Loader className="m-auto" size="xl" variant="dots" />,
  }
);

const DynamicReactions = dynamic(() =>
  import("src/features/reactions/episodes/components").then(
    (mod) => mod.EpisodeReactions
  )
);

export const Episode = () => {
  const { data, isPending, isChat } = useEpisode();

  if (isPending) {
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
      <Aside data={data} isChat={isChat} />

      <div className="flex w-full flex-1 flex-col  bg-white/20 lg:min-h-[calc(100dvh-65px)] lg:py-10">
        <div className="w-full bg-white/80 pt-2 lg:hidden">
          <Header
            id={data?.episodes_by_pk?.id}
            number={data?.episodes_by_pk?.number}
            sub_title={data?.episodes_by_pk?.title}
            title={data?.episodes_by_pk?.work.series_title}
          />

          {isChat ? (
            <EpisodeChatInput episode_id={data?.episodes_by_pk?.id} />
          ) : (
            <EpisodeCommentInput episode_id={data?.episodes_by_pk?.id} />
          )}
        </div>
        <Nav isChat={isChat} response="sp" />
        <main className="relative flex flex-1 flex-col pb-[59px] lg:rounded-lg lg:shadow-lg">
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
                <DynamicChats episode_id={data?.episodes_by_pk?.id} />
              </Suspense>
              <Suspense fallback={null}>
                <DynamicReactions episode_id={data?.episodes_by_pk?.id} />
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
                <DynamicComments episode_id={data?.episodes_by_pk?.id} />
              </Suspense>
            </ErrorBoundary>
          )}
        </main>
      </div>
      <TimerModal />
    </>
  );
};
