import Link from "next/link";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { WorkEpisode } from "src/features/episodes/types";
import {
  getEpisodeLink,
  getEpisodeQuery,
} from "src/features/episodes/utils/link";
import { getIsAlreadyFinished } from "src/features/timer/utils/getAlreadyFinished";

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
      as={getEpisodeLink({
        as: true,
        id: episode.id,
        end_time: episode.end_time,
      })}
      className=" mb-1 px-2 text-sm text-indigo-600 transition-all hover:text-indigo-500 hover:underline md:text-base"
      color="indigo"
      href={{
        pathname: getIsAlreadyFinished(episode.end_time)
          ? `/episodes/${episode.id}`
          : `/episodes/live/${episode.id}`,
        query: getEpisodeQuery({
          episode,
          title: work_title,
          work_id,
          series_id,
          today: false,
        }),
      }}
    >
      第{episode.number}話
    </Link>
    <Text className="line-clamp-3 flex-1 text-sm md:text-sm" component="p">
      {episode.title}
    </Text>
  </li>
);
