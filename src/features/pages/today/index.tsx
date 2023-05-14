import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { FC } from "react";
import { TodayError } from "src/components/Elements/error/TodayError";
import { Text } from "src/components/Elements/Text";
import { TopTitle } from "src/components/Elements/TopTitle";
import { TodayEpisodeList } from "src/features/lists/components/TodayEpisodeList";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import { Error } from "src/libs/error";
import { TopPageList } from "src/libs/next/types";

type Props = TopPageList<GetTodayEpisodesQuery> & {
  registeredError: Error | null;
};

export const Today: FC<Props> = ({ registeredError, buildDate, data }) => (
  <section className="bg-gray-50 px-3 py-6 md:px-6">
    {registeredError ? (
      <TodayError />
    ) : (
      <>
        <TopTitle buildDate={buildDate} title="今日放送のエピソード" />
        <TodayEpisodeList data={data} />
        <Text
          align="center"
          className="mt-6 flex w-full items-center justify-center  font-semibold text-indigo-500 hover:underline"
          component="p"
          ff="Hiragino Sans"
        >
          <Link className="text-base  md:text-lg" href="/list/todayEpisodes">
            今日のエピソードをもっと見る
          </Link>
          <ChevronRightIcon className="ml-1 h-5 w-5 stroke-indigo-500" />
        </Text>
      </>
    )}
  </section>
);
