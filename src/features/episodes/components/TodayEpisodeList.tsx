/* eslint-disable no-unused-expressions */
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Text } from "@mantine/core";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, memo, useEffect } from "react";
import { useQueryTodayEpisodes } from "src/features/episodes/api/useQueryTodayEpisodes";
import { useSearchInputState } from "src/store/input/serchInput";

const DynamicTodayEpisodeItem = dynamic(
  () => import("src/features/episodes/components/TodayEpisodeItem")
);

type Props = {
  callbackTitle?: (titles: string[] | undefined) => void;
};

export const TodayEpisodeList: FC<Props> = memo(({ callbackTitle }) => {
  const { data } = useQueryTodayEpisodes();
  const { pathname } = useRouter();
  const todayPage = pathname === "/today";
  const limit = todayPage ? data?.episodes.length : 8;
  const searchInput = useSearchInputState((state) => state.searchInput);
  const filterEpisodes = data?.episodes
    .slice(0, limit)
    .filter((episode) => episode.title.includes(searchInput));

  useEffect(() => {
    callbackTitle && callbackTitle(data?.episodes?.map((e) => e.title));
  }, [callbackTitle, data?.episodes]);

  return (
    <>
      <ul className="flex flex-wrap gap-2 md:gap-4">
        {filterEpisodes?.map((episode) => (
          <DynamicTodayEpisodeItem episode={episode} key={episode.id} />
        ))}
      </ul>
      {!todayPage && (
        <Text
          align="center"
          component="p"
          className="mt-6 flex w-full items-center justify-center text-lg hover:underline"
        >
          <Link href="/today" className="">
            今日のエピソードをもっと見る
          </Link>
          <ArrowSmallRightIcon className="ml-1 h-6 w-6" />
        </Text>
      )}
    </>
  );
});
