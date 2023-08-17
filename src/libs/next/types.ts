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

export type RankingPage = {
  ranking: GetRankingQuery;
  dailyEpisode: GetDailyEpisodeRankingQuery;
  dailyWork: GetDailyWorkRankingQuery;
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
