import React, { FC, Suspense } from "react";
import { Loader } from "src/components/Elements/Loader";
import { Skeleton } from "src/components/Elements/Skeleton";
import { MenuModal } from "src/components/Modal/Menu";
import { Header } from "src/components/Slug/common/Header";
import { Nav } from "src/components/Slug/common/nav";

import { Aside } from "src/components/Slug/work/aside";

import { WorkChatInput } from "src/features/chats/components/WorkChatInput";
import { WorkChats } from "src/features/chats/components/WorkChats";
import { WorkCommentInput } from "src/features/comments/components/WorkCommentInput";
import { WorkComments } from "src/features/comments/components/WorkComments";
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
      <Aside
        data={data}
        filter={filter}
        isChat={isChat}
        setIsChat={setIsChat}
      />
      <div className="flex w-full flex-1 flex-col  bg-white/20 lg:min-h-[calc(100dvh-65px)] lg:py-10">
        <div className="block w-full bg-white/80 py-4 lg:hidden">
          {/* Mobile Design */}
          <Header
            id={data?.works_by_pk?.id}
            title={data?.works_by_pk?.series_title}
          />
          <MenuModal />
          {isChat ? (
            <WorkChatInput work_id={data?.works_by_pk?.id ?? 0} />
          ) : (
            <WorkCommentInput
              filter={filter}
              work_id={data?.works_by_pk?.id ?? 0}
            />
          )}
        </div>
        <Nav
          isChat={isChat}
          response="sp"
          setIsChat={setIsChat}
          showNext={!!data?.works_by_pk?.series_id}
        />
        <main className="flex-ocl flex flex-1 pb-[59px] lg:rounded-lg lg:shadow-lg">
          {isChat ? (
            <Suspense
              fallback={<Loader className="m-auto" size="xl" variant="dots" />}
            >
              <WorkChats work_id={data?.works_by_pk?.id ?? 0} />
            </Suspense>
          ) : (
            <Suspense
              fallback={<Loader className="m-auto" size="xl" variant="dots" />}
            >
              <WorkComments
                filter={filter}
                setFilter={setFilter}
                work_id={data?.works_by_pk?.id ?? 0}
              />
            </Suspense>
          )}
        </main>
      </div>
    </>
  );
};
