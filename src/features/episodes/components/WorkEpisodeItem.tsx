import Link from "next/link";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { WorkEpisode } from "src/features/episodes/types";
import { getIsFinished } from "src/features/timer/utils/getIsFinished";

type Props = {
  episode: WorkEpisode;
  work_title?: string;
};

export const WorkEpisodeItem: FC<Props> = ({ episode, work_title }) => (
  <li className="flex h-full flex-col items-center p-2">
    <Link
      as={
        getIsFinished(episode.end_time)
          ? `/episodes/${episode.id}`
          : `/episodes/live/${episode.id}`
      }
      className="mb-1 px-2 font-hiragino-sans text-sm text-indigo-500 md:text-base"
      color="indigo"
      href={{
        pathname: getIsFinished(episode.end_time)
          ? `/episodes/${episode.id}`
          : `/episodes/live/${episode.id}`,
        query: {
          episode: [
            work_title,
            episode.title,
            episode.number.toString(),
            episode.id,
            episode.has_next_episode,
            episode.start_time,
            episode.end_time,
          ],
        },
      }}
    >
      第{episode.number}話
    </Link>
    <Text
      className="line-clamp-3 flex-1 text-sm md:text-sm"
      component="p"
      ff="Hiragino Sans"
    >
      {episode.title}
    </Text>
  </li>
);
