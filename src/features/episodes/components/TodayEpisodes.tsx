import React, { FC } from "react";
import { TopTitle } from "src/components/Elements/TopTitle";
import { TodayEpisodeList } from "src/features/episodes/components/TodayEpisodeList";

export const TodayEpisodes: FC = () => (
  <div className="px-6 pb-12 pt-6">
    <TopTitle href="/today" title="今日放送のエピソード" />
    <TodayEpisodeList />
  </div>
);
