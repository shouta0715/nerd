import {
  ChevronDoubleRightIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Text } from "src/components/Elements/Text";
import { genEpisodePlaceholder } from "src/features/episodes/utils";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  episode: GetEpisodeQuery["episodes_by_pk"];
};

export const FinishLive: FC<Props> = ({ episode }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center space-y-4 p-6">
      <Text className="mb-4 text-center text-lg font-bold md:text-xl">
        ライブ放送は終了しました
      </Text>
      <div className="flex w-full flex-wrap items-center justify-center gap-2">
        <ButtonLink
          as={`/episodes/${episode?.id}?mode=chat`}
          className="w-max"
          href={{
            pathname: `/episodes/${episode?.id}`,
            query: {
              episode: genEpisodePlaceholder({
                episode,
                title: episode?.work.series_title,
                series_id: episode?.work.series_id,
                work_id: episode?.work.id,
              }),
              mode: "chat",
            },
          }}
          leftIcon={<ChevronDoubleRightIcon className="h-4 w-4" />}
          size="md"
          theme="danger"
        >
          もう一度見る
        </ButtonLink>
        {episode?.work.has_episodes && (
          <ButtonLink
            as={
              episode?.work.series_id
                ? `/works/${episode?.work.id}?series=${episode?.work.series_id}`
                : `/works/${episode?.work.id}`
            }
            className="w-max"
            href={{
              pathname: `${`/works/${episode?.work.id}`}`,
              query: {
                series: episode?.work.series_id ?? undefined,
                work: [episode?.work.title, episode?.work.series_title],
              },
            }}
            leftIcon={<Square3Stack3DIcon className="h-4 w-4" />}
            size="md"
            theme="dark"
          >
            他のエピソードへ
          </ButtonLink>
        )}
      </div>
    </div>
  );
};
