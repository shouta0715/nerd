import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { FC } from "react";
import { TodayError } from "src/components/Elements/Error/items/TodayError";
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
  <section>
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
        >
          <Link className="text-base  md:text-lg" href="/list/today">
            今日のエピソードをもっと見る
          </Link>
          <ChevronRightIcon className="ml-1 h-5 w-5 stroke-indigo-500" />
        </Text>
      </>
    )}
  </section>
);
