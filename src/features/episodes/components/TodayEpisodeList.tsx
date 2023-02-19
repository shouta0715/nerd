/* eslint-disable no-unused-expressions */
import dynamic from "next/dynamic";
import React, { FC, memo } from "react";
import { Skeleton } from "src/components/Layout/loading/Skeleton";
import { useTodayEpisodeList } from "src/features/episodes/hooks/useTodayEpisodeList";
import { AutoCompleteData } from "src/types/dataType";

const DynamicTodayEpisodeItem = dynamic(
  () => import("src/features/episodes/components/TodayEpisodeItem"),
  {
    ssr: false,
    loading: () => <Skeleton />,
  }
);

type Props = {
  callbackTitle?: (items: AutoCompleteData[] | undefined) => void;
};

export const TodayEpisodeList: FC<Props> = memo(({ callbackTitle }) => {
  const { deferredFilterEpisodes } = useTodayEpisodeList({
    callbackTitle,
  });

  return (
    <ul className="flex flex-wrap gap-2 md:gap-4">
      {deferredFilterEpisodes?.map((episode) => (
        <DynamicTodayEpisodeItem episode={episode} key={episode.id} />
      ))}
    </ul>
  );
});
