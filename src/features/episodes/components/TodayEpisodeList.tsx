import { HeartIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { ActionIcon, Text, Title } from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import React, { FC } from "react";
import { Timer } from "src/components/Elements/Timer";
import { useQueryTodayEpisodes } from "src/features/episodes/api/useQueryTodayEpisodes";
import { Episode } from "src/features/episodes/types";

export const TodayEpisodeList: FC = () => {
  const { data } = useQueryTodayEpisodes();

  const sortFn = (target: Episode, next: Episode) => {
    const aDate = new Date(target.start_time);
    const bDate = new Date(next.start_time);

    return aDate.getTime() - bDate.getTime();
  };

  return (
    <ul className="flex flex-wrap gap-4 md:gap-6">
      {data?.episodes?.sort(sortFn).map((episode) => (
        <li key={episode.id} className="flex-1 rounded-md bg-white p-4 md:px-6">
          <div className="mx-auto flex min-h-full flex-col items-center justify-between">
            <Title order={3} className="mb-2 text-xl md:text-2xl">
              {episode.work.series_title}
            </Title>
            <div className="flex w-full text-lg">
              <Text className="mr-4">{episode.number}.</Text>
              <Text>{episode.title}</Text>
            </div>
            <Timer start_time={episode.start_time} id={episode.id} />
            <div className="flex w-full justify-between">
              <div className="flex items-center space-x-2">
                <ActionIcon color="pink" variant="transparent">
                  <HeartIcon className="h-6 w-6 cursor-pointer text-black" />
                </ActionIcon>
                <span>10</span>
              </div>
              <div className="flex items-center space-x-2">
                <ActionIcon color="green" variant="subtle" radius="md">
                  <UserGroupIcon className="h-6 w-6 cursor-pointer text-blue-500" />
                </ActionIcon>
                <span className="text-blue-500">10人</span>
              </div>
              <ActionIcon color="green" variant="subtle" radius="md">
                <IconUpload className="h-6 w-6" />
              </ActionIcon>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
