import React, { FC } from "react";
import { Menu } from "src/components/dynamic/common/menu";
import { HeaderSkeleton } from "src/components/Elements/Skeleton/live/header";
import { InputSkeleton } from "src/components/Elements/Skeleton/live/input";
import { NextMenu } from "src/features/episodes/components/NextMenu";
import { GetEpisodeQuery } from "src/gql/graphql";

type Props = {
  episode?: GetEpisodeQuery["episodes_by_pk"];
};

export const AsideSkeleton: FC<Props> = ({ episode }) => {
  return (
    <aside className="sticky top-8 hidden h-[calc(100dvh-65px)] w-[28rem] shrink-0 flex-col gap-4 overflow-y-auto bg-white/20 pt-10 lg:flex">
      {/* PC Design */}

      <div className="rounded-2xl bg-white/60 pb-4  shadow-lg ring-1 ring-gray-900/5">
        <HeaderSkeleton
          number={episode?.number}
          sub_title={episode?.title}
          title={episode?.work.series_title}
        />
        <div className="mt-2 flex flex-1 animate-pulse items-center justify-around">
          <div className="ml-2 h-6 w-20 rounded-md bg-slate-200" />
          <div className="ml-2 h-6 w-20 rounded-md bg-slate-200" />
        </div>
      </div>
      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <Menu />
      </div>
      <div className="rounded-2xl bg-white/60 p-4 shadow-lg ring-1 ring-gray-900/5 ">
        <NextMenu episode={episode} />
      </div>
      <div className=" sticky bottom-0 h-max w-full rounded-t-2xl bg-white/90 p-4 shadow-lg ring-1  ring-gray-900/5 ">
        <InputSkeleton />
      </div>
    </aside>
  );
};
