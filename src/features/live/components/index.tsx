import React, { FC, Suspense } from "react";
import { Loader } from "src/components/Elements/Loader";
import { Aside } from "src/components/Slug/live/aside";
import { Header } from "src/components/Slug/live/header";
import { Nav } from "src/components/Slug/live/nav";
import { EpisodeCommentInput } from "src/features/comments/components/EpisodeCommentInput";
import { EpisodeComments } from "src/features/comments/components/EpisodeComments";
import { FinishLive } from "src/features/live/components/Finish";
import { LiveChatInput } from "src/features/live/components/LiveChatInput";
import { LiveChats } from "src/features/live/components/LiveChats";
import { LiveComment } from "src/features/live/components/LiveComment";
import { useLive } from "src/features/live/hooks/useLive";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  data: GetEpisodeQuery;
};

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
          <Header
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
            <LiveChatInput
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
        <Nav isChat={isChat} mode={mode} response="sp" setIsChat={setIsChat} />
        <main className="flex-ocl flex flex-1 pb-[59px] lg:rounded-lg lg:shadow-lg">
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
