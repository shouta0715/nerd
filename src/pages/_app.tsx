import "../styles/tailwind.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "src/components/Elements/error/ErrorPage";
import queryClient from "src/libs/queryClient";

const DynamicInitialize = dynamic(
  () =>
    import("src/features/auth/components/Initialize").then(
      (mod) => mod.Initialize
    ),
  {
    ssr: false,
  }
);

const App = ({ Component, pageProps }: AppProps) => {
  const [client] = useState(() => queryClient);

  return (
    <QueryClientProvider client={client}>
      <Head>
        <title>Nerd</title>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <DynamicInitialize />

        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;
