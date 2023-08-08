import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Header } from "src/components/dynamic/common/header";
import { Menu } from "src/components/dynamic/common/menu";
import { Nav } from "src/components/dynamic/common/nav";
import { Timer } from "src/components/dynamic/common/timer";
import { EpisodeChatInput } from "src/features/chats/episodes/components/EpisodeChatInput";
import { EpisodeCommentInput } from "src/features/comments/episodes/components/EpisodeCommentInput";

import { useTimerState } from "src/features/timer/store";
import { GetEpisodeQuery } from "src/gql/graphql";

type Props = {
  isChat: boolean;
  data?: GetEpisodeQuery;
};

const DynamicNextMenu = dynamic(() =>
  import("src/features/episodes/components/NextMenu").then(
    (mod) => mod.NextMenu
  )
);

export const Aside: FC<Props> = ({ isChat, data }) => {
  const mode = useTimerState((state) => state.mode);

  return (
    <aside className="sticky top-8 hidden h-[calc(100dvh-65px)] w-[28rem] shrink-0 flex-col gap-4 overflow-y-auto bg-white/20 pt-10 lg:flex">
      {/* PC Design */}

      <div className=" rounded-2xl bg-white/60 pb-4  shadow-lg ring-1 ring-gray-900/5">
        <Header
          id={data?.episodes_by_pk?.id}
          number={data?.episodes_by_pk?.number}
          sub_title={data?.episodes_by_pk?.title}
          title={data?.episodes_by_pk?.work.series_title}
        />
        <Nav isChat={isChat} response="lg" />
      </div>

      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <Timer />
      </div>
      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <DynamicNextMenu episode={data?.episodes_by_pk} />
      </div>
      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <Menu />
      </div>
      <div
        className={clsx(
          mode === "up" ? "border-orange-600" : "border-indigo-600",
          "sticky bottom-0 h-max w-full rounded-2xl  border-2  bg-white/90 p-4 shadow-lg ring-1  ring-gray-900/5 "
        )}
      >
        {isChat ? (
          <EpisodeChatInput episode_id={data?.episodes_by_pk?.id} />
        ) : (
          <EpisodeCommentInput episode_id={data?.episodes_by_pk?.id} />
        )}
      </div>
    </aside>
  );
};
