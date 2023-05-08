import { QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "src/components/Elements/error/ErrorPage";
import { NotificationProvider } from "src/components/Elements/Notification/NotificationProvider";
import { FirebaseAuth } from "src/features/auth/components/FirebaseAuth";
import queryClient from "src/libs/queryClient";

type Props = {
  children: React.ReactNode;
};

export const Provider = ({ children }: Props) => {
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
            {children}
          </FirebaseAuth>
        </NotificationProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};
