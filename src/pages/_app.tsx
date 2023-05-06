import "../styles/tailwind.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "src/components/Elements/error/ErrorPage";
import { NotificationProvider } from "src/components/Elements/Notification/NotificationProvider";
import { FirebaseAuth } from "src/features/auth/components/FirebaseAuth";
import queryClient from "src/libs/queryClient";

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
        <NotificationProvider>
          <FirebaseAuth>
            <NextNProgress
              color="#6366f1"
              height={2}
              options={{ showSpinner: false }}
              startPosition={0.1}
            />
            <Component {...pageProps} />
          </FirebaseAuth>
        </NotificationProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;
