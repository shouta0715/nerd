import React, { Suspense } from "react";
import { EpisodeSkelton } from "src/components/Elements/Loader/loaders/EpisodeSkelton";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { Modal } from "src/components/Elements/Modal";
import { LiveHeader } from "src/features/live/components/LiveHeader";
import { LiveNav } from "src/features/live/components/LiveNav";
import { useLive } from "src/features/live/hooks/useLive";

export const Live = () => {
  const { data, isLoading, isChat, setIsChat, time } = useLive();

  if (isLoading) {
    return <EpisodeSkelton />;
  }

  return (
    <>
      <div className="flex min-h-screen animate-fadeUp flex-col ">
        <div className="container contents lg:mx-auto lg:flex">
          <div className="sticky top-0 contents h-full flex-1 pb-16 lg:block lg:max-h-screen lg:overflow-y-auto">
            <LiveHeader
              episode_number={data?.episodes_by_pk?.number}
              episode_title={data?.episodes_by_pk?.title}
              id={data?.episodes_by_pk?.id}
              time={time}
              title={data?.episodes_by_pk?.work.series_title}
            />
            <LiveNav data={data} isChat={isChat} setIsChat={setIsChat} />
          </div>
          <main className="flex flex-1 flex-col lg:w-[36rem] lg:flex-none lg:pb-16">
            <div className="container  mx-auto mb-16 flex flex-1  lg:contents">
              {isChat ? (
                <>
                  <Suspense
                    fallback={<Loader className="m-auto" variant="dots" />}
                  >
                    {/* <LiveChat episode_id={data?.episodes_by_pk?.id} /> */}
                  </Suspense>
                  {/* <EpisodeChatInput episode_id={data?.episodes_by_pk?.id} /> */}
                </>
              ) : (
                <>
                  <Suspense
                    fallback={<Loader className="m-auto" variant="dots" />}
                  >
                    {/* <EpisodeComments episode_id={data?.episodes_by_pk?.id} /> */}
                  </Suspense>
                  {/* <EpisodeCommentInput episode_id={data?.episodes_by_pk?.id} /> */}
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
