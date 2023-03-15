/* eslint-disable react/require-default-props */

import {
  ChevronDoubleRightIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { useQueryEpisode } from "src/features/episodes/api/useQueryEpisode";

type Props = {
  episodeTitle?: string;
  episodeNumber?: number;
  workTitle?: string;
  nextEpisodeId?: string;
};

export const NextEpisodeMenu: FC<Props> = ({
  episodeTitle,
  episodeNumber,
  workTitle,
  nextEpisodeId,
}) => {
  const { data } = useQueryEpisode(nextEpisodeId, undefined);

  return (
    <section className="border-0 border-b border-solid border-slate-200 px-4 py-2">
      <Text size="sm" className="mb-2 text-dimmed">
        エピソード
      </Text>
      <Text component="div">
        <Text component="p" className="mb-1 text-sm">
          {workTitle}
        </Text>
        {episodeTitle && (
          <div className="flex">
            <Text size="sm" className="mr-1 text-dimmed">
              {episodeNumber}.
            </Text>
            <Text size="sm" className="text-dimmed">
              {episodeTitle}
            </Text>
          </div>
        )}
      </Text>
      {nextEpisodeId && (
        <Link
          scroll={false}
          href={`${data?.episodes_by_pk?.id}?category=archive`}
          className="my-3 flex items-center space-x-2 text-sm"
        >
          <ChevronDoubleRightIcon className="h-4 w-4" />
          <span className="inline-block">次のエピソード</span>
        </Link>
      )}
      <Link
        scroll={false}
        href={`${"xxx"}?category=archive`}
        className="flex items-center space-x-2 text-sm"
      >
        <Square3Stack3DIcon className="h-4 w-4" />
        <span className="inline-block">他のエピソード</span>
      </Link>
    </section>
  );
};
