import dynamic from "next/dynamic";
import React, { FC, Suspense } from "react";

import { Aside } from "src/components/dynamic/live/aside";
import { Loader } from "src/components/Elements/Loader";
import { Skeleton } from "src/components/Elements/Skeleton";
import { EpisodeCommentInput } from "src/features/comments/components/EpisodeCommentInput";
import { EpisodeComments } from "src/features/comments/components/EpisodeComments";
import { FinishLive } from "src/features/live/components/Finish";
import { LiveChats } from "src/features/live/components/LiveChats";
import { LiveComment } from "src/features/live/components/LiveComment";
import { useLive } from "src/features/live/hooks/useLive";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  data: GetEpisodeQuery;
};

const DynamicHeader = dynamic(
  () => import("src/components/dynamic/live/header").then((mod) => mod.Header),
  {
    ssr: false,
    loading: () => <Skeleton theme="header" />,
  }
);

const DynamicNav = dynamic(
  () => import("src/components/dynamic/live/nav").then((mod) => mod.Nav),
  {
    ssr: false,
    loading: () => <Skeleton theme="nav" />,
  }
);

const DynamicChatInput = dynamic(
  () =>
    import("src/features/live/components/LiveChatInput").then(
      (mod) => mod.LiveChatInput
    ),
  {
    ssr: false,
    loading: () => <Skeleton theme="form" />,
  }
);

export const Live: FC<Props> = ({ data }) => {
  const {
    isChat,
    setIsChat,
    time,
    mode,
    isAlreadyFinished,
    filter,
    setFilter,
  } = useLive(data);

  return (
    <>
      <Aside
        data={data}
        filter={filter}
        isChat={isChat}
        mode={mode}
        setIsChat={setIsChat}
        time={time}
      />

      <div className="flex w-full flex-1 flex-col  bg-white/20 lg:min-h-[calc(100dvh-65px)] lg:py-10">
        <div className="block w-full bg-white/80 py-4 lg:hidden">
          {/* Mobile Design */}
          <DynamicHeader
            id={data?.episodes_by_pk?.id}
            mode={mode}
            number={data?.episodes_by_pk?.number}
            sub_title={data?.episodes_by_pk?.title}
            time={{
              hours: time?.hours.toString().padStart(2, "0"),
              minutes: time?.minutes.toString().padStart(2, "0"),
              seconds: time?.seconds.toString().padStart(2, "0"),
            }}
            title={data?.episodes_by_pk?.work.series_title}
          />

          {isChat ? (
            <DynamicChatInput
              episode_id={data?.episodes_by_pk?.id}
              mode={mode}
              time={time}
            />
          ) : (
            mode === "finish" && (
              <EpisodeCommentInput
                episode_id={data?.episodes_by_pk?.id}
                filter={filter}
              />
            )
          )}
        </div>
        <DynamicNav
          isChat={isChat}
          mode={mode}
          response="sp"
          setIsChat={setIsChat}
        />

        <main className="flex flex-1 flex-col pb-[59px] lg:rounded-lg lg:shadow-lg">
          {isChat ? (
            <Suspense
              fallback={<Loader className="m-auto" size="xl" variant="dots" />}
            >
              {isAlreadyFinished ? (
                <FinishLive episode={data?.episodes_by_pk} />
              ) : (
                <LiveChats
                  episode_id={data?.episodes_by_pk?.id}
                  mode={mode}
                  time={time}
                />
              )}
            </Suspense>
          ) : (
            <Suspense
              fallback={<Loader className="m-auto" size="xl" variant="dots" />}
            >
              {mode === "finish" ? (
                <EpisodeComments
                  episode_id={data?.episodes_by_pk?.id}
                  filter={filter}
                  setFilter={setFilter}
                />
              ) : (
                <LiveComment setIsChat={setIsChat} />
              )}
            </Suspense>
          )}
        </main>
      </div>
    </>
  );
};
