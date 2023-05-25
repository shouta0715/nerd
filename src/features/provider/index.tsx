/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable import/order */
import { QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "src/components/Elements/Error";
import { NotificationProvider } from "src/components/Elements/Notification/NotificationProvider";
import { FirebaseAuth } from "src/features/auth/components/FirebaseAuth";
import queryClient from "src/libs/queryClient";
import { Inter } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      <ErrorBoundary FallbackComponent={Error}>
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
        <ReactQueryDevtools initialIsOpen={false} />
      </ErrorBoundary>
    </QueryClientProvider>
  );
};
