import Link from "next/link";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { WorkEpisode } from "src/features/episodes/types";

type Props = {
  episode: WorkEpisode;
  work_title?: string;
};

export const WorkEpisodeItem: FC<Props> = ({ episode, work_title }) => (
  <li key={episode.id} className="flex h-full flex-col items-center p-2">
    <Link
      as={`/episodes/${episode.id}`}
      className="mb-1 px-2 font-hiragino-sans text-sm text-indigo-500 md:text-base"
      color="indigo"
      href={{
        pathname: `/episodes/${episode.id}`,
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
      scroll={false}
    >
      第{episode.number}話
    </Link>
    <Text
      className="flex-1 text-xs md:text-sm"
      component="p"
      ff="Hiragino Sans"
    >
      {episode.title}
    </Text>
  </li>
);
