/* eslint-disable react/require-default-props */

import {
  ChevronDoubleRightIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Text } from "src/components/Elements/Text";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { useTimerState } from "src/features/timer/store/timerStore";
import { LiveTimer } from "src/features/timer/types";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  episode?: GetEpisodeQuery["episodes_by_pk"];
  mode?: LiveTimer["mode"];
};

export const NextEpisodeMenu: FC<Props> = ({ episode, mode }) => {
  const { data } = useQueryEpisode(episode?.next_episode_id, undefined);
  const interval = useTimerState((state) => state.interval);
  const timerMode = useTimerState((state) => state.mode);

  return (
    <section className="border-0 border-b border-solid border-slate-200 px-4 py-2">
      <Text className="mb-2 text-dimmed" size="sm">
        エピソード
      </Text>
      <Text className="mb-2" component="div">
        <Text className="text-sm" component="p">
          {episode?.work.series_title}
        </Text>
        {episode?.title && (
          <div className="mt-1 flex">
            <Text className="mr-1 text-dimmed" size="sm">
              {episode.number}.
            </Text>
            <Text className="text-dimmed" size="sm">
              {episode.title}
            </Text>
          </div>
        )}
      </Text>
      <div className="flex flex-col py-2">
        {mode && mode === "finish" && (
          <ButtonLink
            className="mb-2 mr-auto flex w-max items-center space-x-2 border-none bg-red-500  p-2 text-xs font-bold text-white shadow-none"
            href={`/episodes/${episode?.id}`}
            leftIcon={<ChevronDoubleRightIcon className="h-4 w-4" />}
            size="xs"
          >
            もう一度見る
          </ButtonLink>
        )}
        {episode?.next_episode_id && (
          <ButtonLink
            className={`mb-2 mr-auto flex h-full w-max items-center space-x-2 border-none   p-2 text-xs font-bold text-white shadow-none ${
              timerMode === "up" ? "bg-orange-500" : "bg-indigo-500"
            }`}
            href={`/episodes/${data?.episodes_by_pk?.id}`}
            leftIcon={<ChevronDoubleRightIcon className="h-4 w-4" />}
            onClick={interval.reset}
            size="xs"
          >
            次のエピソードへ
          </ButtonLink>
        )}
        {episode?.work.has_episodes && (
          <ButtonLink
            as={
              episode?.work.series_id
                ? `/works/${episode?.work.id}?series=${episode?.work.series_id}`
                : `/works/${episode?.work.id}`
            }
            className="mr-auto flex w-max items-center space-x-2 border-none bg-black p-2 text-xs font-bold text-white shadow-none"
            href={{
              pathname: `${`/works/${episode?.work.id}`}`,
              query: {
                series: episode?.work.series_id ?? undefined,
                work: [episode?.work.title, episode?.work.series_title],
              },
            }}
            leftIcon={<Square3Stack3DIcon className="h-4 w-4" />}
            size="xs"
          >
            他のエピソードへ
          </ButtonLink>
        )}
      </div>
    </section>
  );
};
