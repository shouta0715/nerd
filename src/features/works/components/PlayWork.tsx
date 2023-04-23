import React, { FC, Suspense } from "react";
import { EpisodeSkelton } from "src/components/Elements/Loader/loaders/EpisodeSkelton";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { WorkChatInput } from "src/features/chats/components/WorkChatInput";
import { WorkChats } from "src/features/chats/components/WorkChats";
import { WorkCommentInput } from "src/features/comments/components/WorkCommentInput";
import { WorkComments } from "src/features/comments/components/WorkComments";
import { MainWrapper } from "src/features/play/components/MainWrapper";
import { PlayWrapper } from "src/features/play/components/PlayWrapper";
import { PlayWorkHeader } from "src/features/works/components/PlayWorkHeader";
import { PlayWorkNav } from "src/features/works/components/PlayWorkNav";
import { usePlayWork } from "src/features/works/hooks/usePlayWork";

export const PlayWork: FC = () => {
  const { isChat, isLoading, setIsChat, interval, data } = usePlayWork();

  if (isLoading) {
    return <EpisodeSkelton />;
  }

  return (
    <PlayWrapper>
      <div className="sticky top-0 z-[11] contents h-full flex-1 pb-16 lg:block lg:max-h-screen lg:overflow-y-auto">
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
      <MainWrapper>
        {isChat ? (
          <Suspense fallback={<Loader className="m-auto" variant="dots" />}>
            <WorkChats work_id={data?.works_by_pk?.id ?? 0} />
          </Suspense>
        ) : (
          <Suspense fallback={<Loader className="m-auto" variant="dots" />}>
            <WorkComments work_id={data?.works_by_pk?.id ?? 0} />
          </Suspense>
        )}
      </MainWrapper>
    </PlayWrapper>
  );
};
