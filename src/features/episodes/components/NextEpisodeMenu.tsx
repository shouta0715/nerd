/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/require-default-props */

import {
  ChevronDoubleRightIcon,
  Square3Stack3DIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Skeleton } from "src/components/Elements/Skeleton";
import { Text } from "src/components/Elements/Text";
import { NextEpisodeMenuWrapper } from "src/components/Wrapper/Next";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { useTimerState } from "src/features/timer/store/timerStore";
import { LiveTimer } from "src/features/timer/types";
import { getIsFinished } from "src/features/timer/utils/getIsFinished";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  episode?: GetEpisodeQuery["episodes_by_pk"];
  mode?: LiveTimer["mode"];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NextEpisodeMenu: FC<Props> = ({
  episode,
  mode,
  isOpen,
  setIsOpen,
}) => {
  const { data, isLoading } = useQueryEpisode(
    episode?.next_episode_id,
    undefined
  );

  const interval = useTimerState((state) => state.interval);
  const timerMode = useTimerState((state) => state.mode);

  if (isOpen && isLoading && episode?.next_episode_id) {
    return (
      <NextEpisodeMenuWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
        <Skeleton theme="nextMenu" />
      </NextEpisodeMenuWrapper>
    );
  }

  return (
    <NextEpisodeMenuWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
      <section className="border-solid border-slate-200 px-6 py-5">
        <div className="mb-4 flex items-center justify-between">
          <Text className="text-dimmed" size="sm">
            エピソード
          </Text>
          <button
            className="h-5 w-5 transition-transform active:translate-y-0.5 lg:hidden"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <XMarkIcon />
          </button>
        </div>
        <Text component="div">
          <Text className="line-clamp-2 text-sm" component="p">
            {episode?.work.series_title}
          </Text>
          {episode?.title && (
            <div className="mt-1 flex">
              <Text className="mr-1 text-dimmed" size="sm">
                {episode.number}.
              </Text>
              <Text className="line-clamp-2 text-dimmed" size="sm">
                {episode.title}
              </Text>
            </div>
          )}
        </Text>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 py-2  md:justify-around">
          {mode && mode === "finish" && (
            <ButtonLink
              className="mx-auto w-36 space-x-2 py-2  font-bold text-white sm:mx-0 sm:w-max"
              href={`/episodes/${episode?.id}`}
              leftIcon={<ChevronDoubleRightIcon className="h-4 w-4" />}
              size="xs"
              theme="danger"
            >
              もう一度見る
            </ButtonLink>
          )}
          {episode?.next_episode_id && (
            <ButtonLink
              className={` flex h-full w-36 items-center space-x-2 py-2 font-bold text-white sm:mx-0 sm:w-max ${
                timerMode === "up" ? "bg-orange-500" : "bg-indigo-500"
              }`}
              href={
                getIsFinished(data?.episodes_by_pk?.end_time)
                  ? `/episodes/${data?.episodes_by_pk?.id}`
                  : `/episodes/live/${data?.episodes_by_pk?.id}`
              }
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
              className="mx-auto flex w-36 items-center space-x-2 py-2 text-white sm:mx-0 sm:w-max"
              href={{
                pathname: `${`/works/${episode?.work.id}`}`,
                query: {
                  series: episode?.work.series_id ?? undefined,
                  work: [episode?.work.title, episode?.work.series_title],
                },
              }}
              leftIcon={<Square3Stack3DIcon className="h-4 w-4" />}
              size="xs"
              theme="dark"
            >
              他のエピソードへ
            </ButtonLink>
          )}
        </div>
      </section>
    </NextEpisodeMenuWrapper>
  );
};
