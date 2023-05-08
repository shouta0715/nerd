import Head from "next/head";
import { ReactElement, ReactNode } from "react";

export const Meta =
  <T,>(pageTitle?: (pageProps: T) => ReactNode) =>
  (page: ReactElement, pageProps: T) =>
    (
      <>
        <Head>
          <title>{pageTitle?.(pageProps) ?? "Nerd"}</title>
        </Head>
        {page}
      </>
    );
