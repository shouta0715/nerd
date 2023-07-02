/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/require-default-props */

import {
  ChevronDoubleRightIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import React, { FC, Suspense } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Skeleton } from "src/components/Elements/Skeleton";
import { Text } from "src/components/Elements/Text";
import { NextEpisodeModal } from "src/components/Modal/NextEpisode";
import { NextButton } from "src/features/episodes/components/NextButton";
import { LiveTimer } from "src/features/timer/types";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  episode?: GetEpisodeQuery["episodes_by_pk"];
  mode?: LiveTimer["mode"];
};

export const NextMenu: FC<Props> = ({ episode, mode }) => {
  return (
    <>
      <section className="hidden border-solid border-slate-200 lg:block">
        <div className="mb-4 flex items-center justify-between">
          <Text className="text-dimmed" size="sm">
            エピソード
          </Text>
        </div>
        <Text component="div">
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
            <Suspense fallback={<Skeleton theme="nextButton" />}>
              <NextButton episode={episode} />
            </Suspense>
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
      <NextEpisodeModal episode={episode} mode={mode} />
    </>
  );
};
