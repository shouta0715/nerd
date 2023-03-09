import { Text } from "@mantine/core";
import Link from "next/link";
import React, { FC, memo } from "react";
import { WorkEpisode } from "src/features/episodes/types";

type Props = {
  episode: WorkEpisode;
  work_title: string;
};

export const WorkEpisodeItem: FC<Props> = memo(({ episode, work_title }) => (
  <li key={episode.id} className="flex h-full flex-col items-center p-2">
    <Text
      variant="link"
      scroll={false}
      color="indigo"
      href={{
        pathname: `/episode/${episode.id}`,
        query: {
          category: "archive",
          episode: [
            work_title,
            episode.title,
            episode.number.toString(),
            episode.id,
            episode.has_next_episode,
          ],
        },
      }}
      as={`/episode/${episode.id}`}
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
