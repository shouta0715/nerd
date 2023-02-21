import { Text } from "@mantine/core";
import Link from "next/link";
import React, { FC, memo } from "react";
import { WorkEpisode } from "src/features/episodes/types";

type Props = {
  episode: WorkEpisode;
};

export const WorkEpisodeItem: FC<Props> = memo(({ episode }) => (
  <li key={episode.id} className="flex h-full flex-col items-center p-2">
    <Text
      variant="link"
      color="indigo"
      href={`/episode/${episode.id}`}
      component={Link}
      ff="Hiragino Sans"
      className="mb-1 text-xs md:text-sm"
    >
      第{episode.number}話
    </Text>
    <Text
      component="p"
      ff="Hiragino Sans"
      className="flex-1 text-xs md:text-sm"
    >
      {episode.title}
    </Text>
  </li>
));
