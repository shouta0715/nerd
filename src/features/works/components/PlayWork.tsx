import React, { FC, Suspense } from "react";
import { EpisodeSkelton } from "src/components/Elements/Loader/loaders/EpisodeSkelton";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { Modal } from "src/components/Elements/Modal";
import { WorkChatInput } from "src/features/chats/components/WorkChatInput";
import { WorkChats } from "src/features/chats/components/WorkChats";
import { WorkCommentInput } from "src/features/comments/components/WorkCommentInput";
import { WorkComments } from "src/features/comments/components/WorkComments";
import { PlayWorkHeader } from "src/features/works/components/PlayWorkHeader";
import { PlayWorkNav } from "src/features/works/components/PlayWorkNav";
import { usePlayWork } from "src/features/works/hooks/usePlayWork";

export const PlayWork: FC = () => {
  const { isChat, isLoading, setIsChat, interval, data } = usePlayWork();

  if (isLoading) {
    return <EpisodeSkelton />;
  }

  return (
    <>
      <div className="flex min-h-screen animate-fadeUp flex-col ">
        <div className="container contents lg:mx-auto lg:flex">
          <div className="sticky top-0 contents h-full flex-1 pb-16 lg:block lg:max-h-screen lg:overflow-y-auto">
            <PlayWorkHeader
              id={data?.works_by_pk?.id}
              title={data?.works_by_pk?.series_title}
            />
            <PlayWorkNav
              data={data}
              isChat={isChat}
              setIsChat={setIsChat}
              stop={interval.stop}
            />
            {isChat ? (
              <WorkChatInput work_id={data?.works_by_pk?.id ?? 0} />
            ) : (
              <WorkCommentInput work_id={data?.works_by_pk?.id ?? 0} />
            )}
          </div>
          <main className="flex flex-1 flex-col bg-gray-50 lg:min-h-screen lg:w-1/2 lg:flex-none">
            <div className="container  mx-auto mb-16 flex flex-1  lg:contents">
              {isChat ? (
                <Suspense
                  fallback={<Loader className="m-auto" variant="dots" />}
                >
                  <WorkChats work_id={data?.works_by_pk?.id ?? 0} />
                </Suspense>
              ) : (
                <Suspense
                  fallback={<Loader className="m-auto" variant="dots" />}
                >
                  <WorkComments work_id={data?.works_by_pk?.id ?? 0} />
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
