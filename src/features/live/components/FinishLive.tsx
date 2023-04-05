import {
  ChevronDoubleRightIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

import React, { FC } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Props = {
  episode: GetEpisodeQuery["episodes_by_pk"];
};

export const FinishLive: FC<Props> = ({ episode }) => (
  <div className="flex flex-1 flex-col items-center justify-center space-y-4 bg-gray-50 p-6 md:bg-white">
    <p className="mb-4 text-center text-lg font-bold md:text-xl">
      終了しました
    </p>
    <div className="flex w-full justify-center space-x-6 md:hidden">
      <ButtonLink
        className="mb-2 flex h-full w-max items-center space-x-2 border-none bg-red-500  p-2 text-xs font-bold text-white shadow-none"
        href={`/episodes/${episode?.id}`}
        leftIcon={<ChevronDoubleRightIcon className="h-4 w-4" />}
        size="xs"
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
          className="flex h-full w-max items-center space-x-2 border-none bg-black p-2 text-xs font-bold text-white shadow-none"
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
  </div>
);
