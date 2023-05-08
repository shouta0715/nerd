/* eslint-disable @typescript-eslint/ban-types */
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement) => ReactNode;
  getTitle?: (page: ReactElement, pageProps: P) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
