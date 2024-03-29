import clsx from "clsx";
import React, { FC } from "react";
import { Menu } from "src/components/dynamic/common/menu";
import { Header } from "src/components/dynamic/live/header";
import { Nav } from "src/components/dynamic/live/nav";

import { EpisodeCommentInput } from "src/features/comments/episodes/components/EpisodeCommentInput";

import { NextMenu } from "src/features/episodes/components/NextMenu";
import { LiveChatInput } from "src/features/live/components/LiveChatInput";
import { LiveTimer, Time } from "src/features/timer/types";
import { GetEpisodeQuery } from "src/gql/graphql";

type Props = {
  isChat: boolean;
  data?: GetEpisodeQuery;
  mode: LiveTimer["mode"];
  time: Time;
};

export const Aside: FC<Props> = ({ isChat, data, mode, time }) => {
  return (
    <aside className="sticky top-8 hidden h-[calc(100dvh-65px)] w-[28rem] shrink-0 flex-col gap-4 overflow-y-auto bg-white/20 pt-10 lg:flex">
      {/* PC Design */}
      <div className="rounded-2xl bg-white/60 pb-4  shadow-lg ring-1 ring-gray-900/5">
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
        <Nav isChat={isChat} mode={mode} response="lg" />
      </div>
      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <NextMenu episode={data?.episodes_by_pk} />
      </div>
      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <Menu />
      </div>
      <div
        className={clsx(
          "sticky bottom-0 h-max w-full rounded-2xl border-2 bg-white/90 p-4 shadow-lg  ring-1 ring-gray-900/5 ",
          mode !== "finish" && !isChat && "hidden",
          mode === "down" && "border-indigo-600",
          mode === "up" && "border-orange-600",
          mode === "notRegister" && "border-gray-600"
        )}
      >
        {isChat ? (
          <LiveChatInput
            episode_id={data?.episodes_by_pk?.id}
            mode={mode}
            time={time}
          />
        ) : (
          mode === "finish" && (
            <EpisodeCommentInput episode_id={data?.episodes_by_pk?.id} />
          )
        )}
      </div>
    </aside>
  );
};
