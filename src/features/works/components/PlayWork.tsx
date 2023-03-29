import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { FC, Suspense, useState } from "react";
import { EpisodeSkelton } from "src/components/Elements/Loader/loaders/EpisodeSkelton";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { Modal } from "src/components/Elements/Modal";
import { Text } from "src/components/Elements/Text";
import { WorkChatInput } from "src/features/chats/components/WorkChatInput";
import { WorkChats } from "src/features/chats/components/WorkChats";
import { usePrefetchCommentWork } from "src/features/comments/api/usePrefetchCommentWork";
import { WorkCommentInput } from "src/features/comments/components/WorkCommentInput";
import { WorkComments } from "src/features/comments/components/WorkComments";
import { CountUpTimer } from "src/features/timer/components/CountUpTImer";
import { useQueryWork } from "src/features/works/api/useQueryWork";

const DynamicWorkMenu = dynamic(
  () =>
    import("src/features/works/components/WorkMenu").then(
      (mod) => mod.WorkMenu
    ),
  {
    ssr: false,
  }
);

export const PlayWork: FC = () => {
  const router = useRouter();
  const { slug, work } = router.query;
  const { data, isLoading } = useQueryWork({ slug, work });
  const [isChat, setIsChat] = useState(true);
  const prefetchComments = usePrefetchCommentWork();

  if (isLoading) {
    return <EpisodeSkelton />;
  }

  return (
    <>
      <div className="flex min-h-screen animate-fadeUp flex-col ">
        <div className="container contents lg:mx-auto lg:flex">
          <div className="sticky top-0 contents h-full flex-1 pb-16 lg:block lg:max-h-screen lg:overflow-y-auto">
            <header className="container mx-auto mb-2 flex flex-col bg-white p-6 pb-0">
              <div className="flex w-full flex-1 flex-col items-center gap-2">
                <Text
                  className="text-base font-bold md:text-lg"
                  component="h4"
                  ff="Hiragino Sans"
                >
                  {data?.works_by_pk?.series_title}
                </Text>
              </div>
              <div className="mx-auto mt-3 flex max-w-max flex-col">
                <Text className="m-0 mx-auto mb-1.5 px-10 text-sm font-bold text-indigo-500 md:text-base">
                  開始から
                </Text>
                <CountUpTimer id={data?.works_by_pk?.id} />
              </div>
            </header>
            <nav className="sticky top-0 z-[1] flex h-10 items-center justify-between border-0 border-b border-solid border-b-slate-200 bg-white px-2 lg:h-auto lg:border-none">
              <div className="container mx-auto flex items-center justify-between lg:flex-col lg:items-stretch ">
                <div className="flex flex-1 items-center justify-between border-0 border-solid  border-slate-200 after:h-7 after:w-7 after:content-['']">
                  <button
                    className="h-7 w-7 border-none"
                    onClick={() => router.back()}
                  >
                    <ArrowSmallLeftIcon className="h-full w-full" />
                  </button>
                  <ul className=" flex h-full flex-1 items-center justify-around">
                    <Text
                      className={`inline-block cursor-pointer rounded-none  py-2 text-sm font-bold text-indigo-500 md:text-base  ${
                        isChat
                          ? "border-0 border-b-2 border-solid border-indigo-500"
                          : "border-none"
                      }`}
                      component="button"
                      onClick={() => setIsChat(true)}
                    >
                      チャット
                    </Text>
                    <Text
                      className={`inline-block cursor-pointer rounded-none py-2 text-sm font-bold text-indigo-500 md:text-base ${
                        !isChat
                          ? "border-0 border-b-2 border-solid border-indigo-500"
                          : "border-none"
                      }`}
                      color="indigo"
                      component="li"
                      onClick={() => setIsChat(false)}
                      onMouseEnter={() =>
                        prefetchComments(data?.works_by_pk?.id ?? 0)
                      }
                      onTouchStart={() =>
                        prefetchComments(data?.works_by_pk?.id ?? 0)
                      }
                    >
                      コメント
                    </Text>
                  </ul>
                </div>
                <DynamicWorkMenu
                  series_id={data?.works_by_pk?.series_id}
                  series_title={data?.works_by_pk?.title}
                />
              </div>
            </nav>
          </div>
          <main className="flex flex-1 flex-col lg:w-[36rem] lg:flex-none lg:pb-16">
            <div className="container  mx-auto mb-16 flex flex-1  lg:contents">
              {isChat ? (
                <>
                  <Suspense
                    fallback={<Loader className="m-auto" variant="dots" />}
                  >
                    <WorkChats work_id={data?.works_by_pk?.id ?? 0} />
                  </Suspense>
                  <WorkChatInput work_id={data?.works_by_pk?.id ?? 0} />
                </>
              ) : (
                <>
                  <Suspense fallback={<div>Loading...</div>}>
                    <WorkComments work_id={data?.works_by_pk?.id ?? 0} />
                  </Suspense>
                  <WorkCommentInput work_id={data?.works_by_pk?.id ?? 0} />
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
