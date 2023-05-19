import React, { FC, Suspense } from "react";
import { Loader } from "src/components/Elements/Loader";
import { Skeleton } from "src/components/Elements/Skeleton";
import { MainWrapper } from "src/components/Wrapper/Main";
import { WorkChatInput } from "src/features/chats/components/WorkChatInput";
import { WorkChats } from "src/features/chats/components/WorkChats";
import { WorkCommentInput } from "src/features/comments/components/WorkCommentInput";
import { WorkComments } from "src/features/comments/components/WorkComments";
import { PlayWorkHeader } from "src/features/works/components/PlayWorkHeader";
import { PlayWorkNav } from "src/features/works/components/PlayWorkNav";
import { usePlayWork } from "src/features/works/hooks/usePlayWork";
import { NotFoundError } from "src/libs/error";
import { DetailTitle } from "src/libs/meta/OnlyTitle";
import { validateData } from "src/utils/validateData";

export const PlayWork: FC = () => {
  const { isChat, isLoading, setIsChat, data, filter, setFilter } =
    usePlayWork();

  if (isLoading) {
    return <Skeleton theme="episode" />;
  }

  validateData({
    trigger: !data?.works_by_pk,
    error: new NotFoundError(),
  });

  return (
    <>
      <DetailTitle title={data?.works_by_pk?.series_title} />
      <div className="sticky top-0 z-[11] contents  h-full flex-1 lg:block lg:max-h-[calc(100dvh-3.5rem)] lg:overflow-y-auto">
        <PlayWorkHeader
          id={data?.works_by_pk?.id}
          title={data?.works_by_pk?.series_title}
        />
        <PlayWorkNav data={data} isChat={isChat} setIsChat={setIsChat} />
        {isChat ? (
          <WorkChatInput work_id={data?.works_by_pk?.id ?? 0} />
        ) : (
          <WorkCommentInput
            filter={filter}
            work_id={data?.works_by_pk?.id ?? 0}
          />
        )}
      </div>
      <MainWrapper>
        {isChat ? (
          <Suspense fallback={<Loader className="m-auto" variant="dots" />}>
            <WorkChats work_id={data?.works_by_pk?.id ?? 0} />
          </Suspense>
        ) : (
          <Suspense fallback={<Loader className="m-auto" variant="dots" />}>
            <WorkComments
              filter={filter}
              setFilter={setFilter}
              work_id={data?.works_by_pk?.id ?? 0}
            />
          </Suspense>
        )}
      </MainWrapper>
    </>
  );
};
