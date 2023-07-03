import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";

import { EpisodeCommentInput } from "src/features/comments/components/EpisodeCommentInput";
import { CommentsFilter } from "src/features/comments/types";
import { Menu } from "src/features/episodes/components/Menu";
import { NextMenu } from "src/features/episodes/components/NextMenu";
import { LiveTimer, Time } from "src/features/timer/types";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  isChat: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
  data?: GetEpisodeQuery;
  filter: CommentsFilter;
  mode: LiveTimer["mode"];
  time: Time;
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
export const Aside: FC<Props> = ({
  isChat,
  setIsChat,
  data,
  filter,
  mode,
  time,
}) => {
  return (
    <aside className="sticky top-8 hidden h-[calc(100dvh-65px)] w-[28rem] shrink-0 flex-col gap-4 overflow-y-auto bg-white/20 pt-10 lg:flex">
      {/* PC Design */}

      <div className=" rounded-2xl bg-white/60 pb-4  shadow-lg ring-1 ring-gray-900/5">
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
        <DynamicNav
          isChat={isChat}
          mode={mode}
          response="lg"
          setIsChat={setIsChat}
        />
      </div>
      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <Menu live />
      </div>

      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <NextMenu episode={data?.episodes_by_pk} />
      </div>

      <div
        className={clsx(
          " sticky bottom-0  h-max w-full rounded-t-2xl bg-white p-4 shadow-lg ring-1  ring-gray-900/5 ",
          mode !== "finish" && !isChat && "hidden"
        )}
      >
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
    </aside>
  );
};
