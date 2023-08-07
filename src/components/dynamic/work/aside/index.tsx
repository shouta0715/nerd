import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Header } from "src/components/dynamic/common/header";
import { Menu } from "src/components/dynamic/common/menu";
import { Nav } from "src/components/dynamic/common/nav";
import { Timer } from "src/components/dynamic/common/timer";
import { WorkChatInput } from "src/features/chats/works/components/WorkChatInput";
import { WorkCommentInput } from "src/features/comments/works/components/WorkCommentInput";
import { useTimerState } from "src/features/timer/store";

import { GetWorkQuery } from "src/gql/graphql";

type Props = {
  isChat: boolean;
  data?: GetWorkQuery;
};

const DynamicWorkMenu = dynamic(() =>
  import("src/features/works/play/components/WorkMenu").then(
    (mod) => mod.WorkMenu
  )
);

export const Aside: FC<Props> = ({ isChat, data }) => {
  const mode = useTimerState((state) => state.mode);

  return (
    <aside className="sticky top-8 hidden h-[calc(100dvh-65px)] w-[28rem] shrink-0 flex-col gap-4 overflow-y-auto bg-white/20 pt-10 lg:flex">
      {/* PC Design */}

      <div className=" rounded-2xl bg-white/60 pb-4  shadow-lg ring-1 ring-gray-900/5">
        <Header
          id={data?.works_by_pk?.id}
          title={data?.works_by_pk?.series_title}
        />
        <Nav isChat={isChat} response="lg" />
      </div>

      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <Timer />
      </div>
      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <DynamicWorkMenu data={data} />
      </div>
      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <Menu />
      </div>
      <div
        className={clsx(
          mode === "up" ? "border-orange-600" : "border-indigo-600",
          "sticky bottom-0 h-max w-full rounded-2xl  border-4  bg-white/90 p-4 shadow-lg ring-1  ring-gray-900/5 "
        )}
      >
        <p className="mb-2 text-sm">
          {isChat ? "チャット" : "コメント"}
          投稿欄
        </p>
        {isChat ? (
          <WorkChatInput work_id={data?.works_by_pk?.id ?? 0} />
        ) : (
          <WorkCommentInput work_id={data?.works_by_pk?.id ?? 0} />
        )}
      </div>
    </aside>
  );
};
