import React, { FC, Suspense } from "react";
import { EpisodeSkelton } from "src/components/Elements/Loader/loaders/EpisodeSkelton";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { Modal } from "src/components/Elements/Modal";
import { EpisodeChatInput } from "src/features/chats/components/EpisodeChatInput";

import { EpisodeChats } from "src/features/chats/components/EpisodeChats";

import { EpisodeCommentInput } from "src/features/comments/components/EpisodeCommentInput";
import { EpisodeComments } from "src/features/comments/components/EpisodeComments";
import { EpisodeHeader } from "src/features/episodes/components/EpisodeHeader";
import { EpisodeNav } from "src/features/episodes/components/EpisodeNav";
import { useEpisode } from "src/features/episodes/hooks/useEpisode";

export const Episode: FC = () => {
  const { data, isLoading, isChat, setIsChat, interval } = useEpisode();

  if (isLoading) {
    return <EpisodeSkelton />;
  }

  return (
    <>
      <div className="flex min-h-screen animate-fadeUp flex-col  ">
        <div className="container contents lg:mx-auto lg:flex">
          <div className="sticky top-0 contents h-full flex-1 pb-16 lg:block lg:max-h-screen lg:overflow-y-auto lg:pb-0">
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
            <EpisodeChatInput episode_id={data?.episodes_by_pk?.id} />
          </div>
          <main className="flex flex-1 flex-col  bg-gray-50 lg:min-h-screen lg:w-1/2 lg:flex-none">
            <div className="container  mx-auto mb-16 flex flex-1  lg:contents">
              {isChat ? (
                <Suspense
                  fallback={<Loader className="m-auto" variant="dots" />}
                >
                  <EpisodeChats episode_id={data?.episodes_by_pk?.id} />
                </Suspense>
              ) : (
                <>
                  <Suspense
                    fallback={<Loader className="m-auto" variant="dots" />}
                  >
                    <EpisodeComments episode_id={data?.episodes_by_pk?.id} />
                  </Suspense>
                  <EpisodeCommentInput episode_id={data?.episodes_by_pk?.id} />
                </>
              )}
            </div>
          </main>
        </div>
      </div>
      <Modal />
    </>
  );
};
