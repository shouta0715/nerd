/* eslint-disable @typescript-eslint/ban-types */
import { GetStaticProps, NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { AutoCompleteData } from "src/features/episodes/types";
import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import {
  GetSeasonWorksQuery,
  GetWeeklyWorksQuery,
} from "src/graphql/work/workQuery.generated";
import { Error } from "src/libs/error";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement) => ReactNode;
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

export type NextSSG<T> = GetStaticProps<NextSSGResult<T>>;

export type NextSSGPage<T> = NextPageWithLayout<NextSSGResult<T>>;
