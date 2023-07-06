import Link from "next/link";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { WorkEpisode } from "src/features/episodes/types";
import { genEpisodePlaceholder } from "src/features/episodes/utils";
import { getIsFinished } from "src/features/timer/utils/getIsFinished";

type Props = {
  episode: WorkEpisode;
  work_title?: string;
  work_id?: number;
  series_id?: string | null;
};

export const WorkEpisodeItem: FC<Props> = ({
  episode,
  work_title,
  work_id,
  series_id,
}) => (
  <li className="flex h-full flex-col items-center p-2">
    <Link
      as={
        getIsFinished(episode.end_time)
          ? `/episodes/${episode.id}`
          : `/episodes/live/${episode.id}`
      }
      className=" mb-1 px-2 text-sm text-indigo-500 transition-all hover:text-indigo-600 hover:underline md:text-base"
      color="indigo"
      href={{
        pathname: getIsFinished(episode.end_time)
          ? `/episodes/${episode.id}`
          : `/episodes/live/${episode.id}`,
        query: {
          episode: genEpisodePlaceholder({
            episode,
            title: work_title,
            work_id,
            series_id,
          }),
        },
      }}
    >
      第{episode.number}話
    </Link>
    <Text className="line-clamp-3 flex-1 text-sm md:text-sm" component="p">
      {episode.title}
    </Text>
  </li>
);
