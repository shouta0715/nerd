import React, { FC, Suspense } from "react";
import { Header } from "src/components/dynamic/common/header";
import { Nav } from "src/components/dynamic/common/nav";
import { Skeleton } from "src/components/Elements/Skeleton";
import { EpisodeChatInput } from "src/features/chats/components/EpisodeChatInput";
import { EpisodeCommentInput } from "src/features/comments/components/EpisodeCommentInput";
import { CommentsFilter } from "src/features/comments/types";
import { Menu } from "src/features/episodes/components/Menu";
import { NextMenu } from "src/features/episodes/components/NextMenu";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  isChat: boolean;
  setIsChat: React.Dispatch<React.SetStateAction<boolean>>;
  data?: GetEpisodeQuery;
  filter: CommentsFilter;
};

export const Aside: FC<Props> = ({ isChat, setIsChat, data, filter }) => {
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
        <Nav isChat={isChat} response="lg" setIsChat={setIsChat} />
      </div>
      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <Menu />
      </div>

      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <Suspense fallback={<Skeleton theme="nextMenu" />}>
          <NextMenu episode={data?.episodes_by_pk} />
        </Suspense>
      </div>

      <div className=" sticky bottom-0 h-max w-full rounded-t-2xl bg-white p-4 shadow-lg ring-1  ring-gray-900/5 ">
        {isChat ? (
          <EpisodeChatInput episode_id={data?.episodes_by_pk?.id} />
        ) : (
          <EpisodeCommentInput
            episode_id={data?.episodes_by_pk?.id}
            filter={filter}
          />
        )}
      </div>
    </aside>
  );
};
