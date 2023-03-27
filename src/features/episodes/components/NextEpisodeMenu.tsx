/* eslint-disable react/require-default-props */

import {
  ChevronDoubleRightIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Text } from "src/components/Elements/Text";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  episode?: GetEpisodeQuery["episodes_by_pk"];
};

export const NextEpisodeMenu: FC<Props> = ({ episode }) => {
  const { data } = useQueryEpisode(episode?.next_episode_id, undefined);

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
      {episode?.next_episode_id && (
        <ButtonLink
          className="mb-2 flex w-max items-center space-x-2 border-none p-0 text-sm shadow-none"
          href={`${data?.episodes_by_pk?.id}?category=archive`}
          leftIcon={<ChevronDoubleRightIcon className="h-4 w-4" />}
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
          className="flex w-max items-center space-x-2 border-none p-0 text-sm shadow-none"
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
    </section>
  );
};
