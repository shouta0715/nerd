/* eslint-disable @typescript-eslint/ban-types */
import { GetStaticProps, NextPage } from "next";
import { AppProps } from "next/app";
import { ReactNode, ReactElement } from "react";

import { AutoCompleteData } from "src/features/episodes/types";
import {
  GetDailyEpisodeRankingQuery,
  GetDailyWorkRankingQuery,
  GetRankingQuery,
  GetSeasonWorksQuery,
  GetTodayEpisodesQuery,
  GetWeeklyEpisodeRankingQuery,
  GetWeeklyWorkRankingQuery,
  GetWeeklyWorksQuery,
} from "src/gql/graphql";
import { Error } from "src/libs/error";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement, notice?: boolean) => ReactNode;
  getTitle?: (page: ReactElement, pageProps: P) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextSSGResult<T> = {
  data: T;
  error: Error | null;
};

export type TopPageList<T> = {
  data: T;
  buildDate: string;
};

export type TopPage = {
  todayData: GetTodayEpisodesQuery;
  seasonData: GetSeasonWorksQuery;
  weeklyData: GetWeeklyWorksQuery;
  buildDate: string;
  registeredError: Error | null;
};

export type ListPage<T> = {
  data: T;
  autoCompleteData: AutoCompleteData[];
};

export type RankingEpisodes =
  GetDailyEpisodeRankingQuery["daily_episodes_ranking"][0];

export type RankingWorks = GetDailyWorkRankingQuery["daily_works_ranking"][0];

export type RankingPage<
  TEpisodes = GetDailyEpisodeRankingQuery["daily_episodes_ranking"],
  TWorks = GetDailyWorkRankingQuery["daily_works_ranking"]
> = {
  episodes: TEpisodes extends (infer R)[]
    ? R extends RankingEpisodes
      ? R[]
      : never
    : never;
  works: TWorks extends (infer R)[]
    ? R extends RankingWorks
      ? R[]
      : never
    : never;
  buildDate: string;
  totallingDate: string;
  interval: "daily" | "weekly";
};

export type AllRankingPage = {
  ranking: GetRankingQuery;
  buildDate: string;
};

export type DailyRankingPage = {
  ranking: GetRankingQuery;
  dailyEpisode: GetDailyEpisodeRankingQuery;
  dailyWork: GetDailyWorkRankingQuery;
  buildDate: string;
  totallingDate: string;
};

export type WeeklyRankingPage = {
  weeklyEpisode: GetWeeklyEpisodeRankingQuery;
  weeklyWork: GetWeeklyWorkRankingQuery;
  buildDate: string;
  totallingDate: string;
};

export type NoticePage = {
  markdowns: {
    title: string;
    content: string;
    date: string;
    category: string;
    importance: "high" | "middle" | "low";
    draft: boolean;
  }[];
  buildDate: string;
};

export type NextSSG<T> = GetStaticProps<NextSSGResult<T>>;

export type NextSSGPage<T> = NextPageWithLayout<NextSSGResult<T>>;
