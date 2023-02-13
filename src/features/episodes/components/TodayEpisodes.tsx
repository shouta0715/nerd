import { HeartIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Box, Text, Title } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";
import { Timer } from "src/components/Elements/Timer";
import { useQueryTodayEpisodes } from "src/features/episodes/api/useQueryTodayEpisodes";
import { GetTodayEpisodesQuery } from "src/generated/graphql";

type Episode = GetTodayEpisodesQuery["episodes"][0];

export const TodayEpisodes: FC = () => {
  const { data } = useQueryTodayEpisodes();

  const sortFn = (target: Episode, next: Episode) => {
    const aDate = new Date(target.start_time);
    const bDate = new Date(next.start_time);

    return aDate.getTime() - bDate.getTime();
  };

  return (
    <Box>
      <div className="p-6">
        <Title order={2} size="h3" className="mb-6">
          <Link href="/">今日放送のテレビ</Link>
        </Title>
        <ul className="flex flex-col items-center justify-center gap-4">
          {data?.episodes?.sort(sortFn).map((episode) => (
            <li
              key={episode.id}
              className="w-full max-w-lg border-x-0 border-y-0 border-b border-solid border-slate-200 py-2 px-4 md:py-4 md:px-6"
            >
              <div className="mx-auto flex w-[296px] flex-col items-center md:w-[372px]">
                <Title order={3} className="mb-2 text-xl md:text-2xl">
                  {episode.work.title}
                </Title>
                <div className="flex w-full">
                  <Text className="mr-4 font-semibold text-gray-700">
                    {episode.number}.
                  </Text>
                  <Text className="font-semibold text-gray-700">
                    {episode.title}
                  </Text>
                </div>
                <Timer start_time={episode.start_time} id={episode.id} />
                <div className="flex w-full justify-between">
                  <div className="flex items-center space-x-2">
                    <HeartIcon className="h-6 w-6 cursor-pointer text-black" />
                    <span>10</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UserGroupIcon className="h-6 w-6 cursor-pointer text-black" />
                    <span>10人</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );
};
