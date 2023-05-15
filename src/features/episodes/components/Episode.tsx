import React, { FC, Suspense } from "react";
import { Loader } from "src/components/Elements/Loader";
import { Skeleton } from "src/components/Elements/Skeleton";
import { EpisodeChatInput } from "src/features/chats/components/EpisodeChatInput";

import { EpisodeChats } from "src/features/chats/components/EpisodeChats";

import { EpisodeCommentInput } from "src/features/comments/components/EpisodeCommentInput";
import { EpisodeComments } from "src/features/comments/components/EpisodeComments";
import { EpisodeHeader } from "src/features/episodes/components/EpisodeHeader";
import { EpisodeNav } from "src/features/episodes/components/EpisodeNav";
import { useEpisode } from "src/features/episodes/hooks/useEpisode";
import { MainWrapper } from "src/features/play/components/MainWrapper";

import { CountDownModal } from "src/features/timer/components/CountDownModal";
import { GraphQLError } from "src/libs/error";
import { DetailTitle } from "src/libs/meta/OnlyTitle";
import { validateData } from "src/utils/validateData";

export const Episode: FC = () => {
  const { data, isLoading, isChat, setIsChat, interval, filter, setFilter } =
    useEpisode();

  if (isLoading) {
    return <Skeleton theme="episode" />;
  }

  validateData({
    trigger: !data?.episodes_by_pk,
    error: new GraphQLError(),
  });

  return (
    <>
      <DetailTitle
        number={data?.episodes_by_pk?.number}
        subtitle={data?.episodes_by_pk?.title}
        title={data?.episodes_by_pk?.work.series_title}
      />
      <div className="sticky top-0 z-[11] contents  h-full flex-1 lg:block lg:max-h-[calc(100dvh-3.5rem)] lg:overflow-y-auto">
        <EpisodeHeader
          episode_number={data?.episodes_by_pk?.number}
          episode_title={data?.episodes_by_pk?.title}
          id={data?.episodes_by_pk?.id}
          title={data?.episodes_by_pk?.work.series_title}
        />
        <EpisodeNav
          data={data}
          isChat={isChat}
          setIsChat={setIsChat}
          stop={interval.stop}
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
      <MainWrapper>
        {isChat ? (
          <Suspense
            fallback={<Loader className="m-auto" size="xl" variant="dots" />}
          >
            <EpisodeChats episode_id={data?.episodes_by_pk?.id} />
          </Suspense>
        ) : (
          <Suspense
            fallback={<Loader className="m-auto" size="xl" variant="dots" />}
          >
            <EpisodeComments
              episode_id={data?.episodes_by_pk?.id}
              filter={filter}
              setFilter={setFilter}
            />
          </Suspense>
        )}
      </MainWrapper>

      <CountDownModal />
    </>
  );
};
