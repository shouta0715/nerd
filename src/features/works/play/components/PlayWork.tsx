import dynamic from "next/dynamic";
import React, { FC, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "src/components/dynamic/common/header";
import { Nav } from "src/components/dynamic/common/nav";
import { Aside } from "src/components/dynamic/work/aside";
import { Loader } from "src/components/Elements/Loader";
import { Skeleton } from "src/components/Elements/Skeleton";
import { ErrorMessage } from "src/components/Error/items/ErrorMessage";
import { TimerModal } from "src/components/Modal/Timer";
import { WorkChatInput } from "src/features/chats/works/components/WorkChatInput";
import { WorkCommentInput } from "src/features/comments/works/components/WorkCommentInput";
import { usePlayWork } from "src/features/works/play/hooks/usePlayWork";
import { NotFoundError } from "src/libs/error";
import { DetailTitle } from "src/libs/meta/OnlyTitle";
import { validateData } from "src/utils/client/validateData";

const DynamicChats = dynamic(
  () =>
    import("src/features/chats/works/components/WorkChats").then(
      (mod) => mod.WorkChats
    ),
  {
    loading: () => <Loader className="m-auto" size="xl" variant="dots" />,
  }
);

const DynamicComments = dynamic(
  () =>
    import("src/features/comments/works/components/WorkComments").then(
      (mod) => mod.WorkComments
    ),
  {
    loading: () => <Loader className="m-auto" size="xl" variant="dots" />,
  }
);

export const PlayWork: FC = () => {
  const { isChat, isPending, data } = usePlayWork();

  if (isPending) {
    return <Skeleton theme="episode" />;
  }

  validateData({
    trigger: !data?.works_by_pk,
    error: new NotFoundError(),
  });

  return (
    <>
      <DetailTitle title={data?.works_by_pk?.series_title} />
      <Aside data={data} isChat={isChat} />
      <div className="flex w-full flex-1 flex-col  bg-white/20 lg:min-h-[calc(100dvh-65px)] lg:py-10">
        <div className="w-full bg-white/80 pt-2 lg:hidden">
          {/* Mobile Design */}
          <Header
            id={data?.works_by_pk?.id}
            title={data?.works_by_pk?.series_title}
          />

          {isChat ? (
            <WorkChatInput work_id={data?.works_by_pk?.id ?? 0} />
          ) : (
            <WorkCommentInput work_id={data?.works_by_pk?.id ?? 0} />
          )}
        </div>
        <Nav
          isChat={isChat}
          response="sp"
          showNext={!!data?.works_by_pk?.series_id}
        />
        <main className="relative flex flex-1 flex-col pb-[59px] lg:rounded-lg lg:shadow-lg">
          {isChat ? (
            <ErrorBoundary
              key={`${data?.works_by_pk?.id}-chats`}
              FallbackComponent={ErrorMessage}
            >
              <Suspense
                fallback={
                  <Loader className="m-auto" size="xl" variant="dots" />
                }
              >
                <DynamicChats work_id={data?.works_by_pk?.id ?? 0} />
              </Suspense>
            </ErrorBoundary>
          ) : (
            <ErrorBoundary
              key={`${data?.works_by_pk?.id}-comments`}
              FallbackComponent={ErrorMessage}
            >
              <Suspense
                fallback={
                  <Loader className="m-auto" size="xl" variant="dots" />
                }
              >
                <DynamicComments work_id={data?.works_by_pk?.id ?? 0} />
              </Suspense>
            </ErrorBoundary>
          )}
        </main>
      </div>
      <TimerModal />
    </>
  );
};
