/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable import/order */
import { QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Error } from "src/components/Error";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import queryClient from "src/libs/client/query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: React.ReactNode;
};

const DynamicFirebaseAuth = dynamic(() =>
  import("src/features/auth/components/FirebaseAuth").then(
    (mod) => mod.FirebaseAuth
  )
);

const DynamicNextNProgress = dynamic(() => import("nextjs-progressbar"));

const DynamicNotification = dynamic(() =>
  import("src/components/Notification").then((mod) => mod.Notification)
);

export const Provider = ({ children }: Props) => {
  const [client] = useState(() => queryClient);

  return (
    <QueryClientProvider client={client}>
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ErrorBoundary FallbackComponent={Error}>
        <DynamicNotification />
        <DynamicFirebaseAuth />
        <DynamicNextNProgress
          color="#6366f1"
          height={3}
          options={{ showSpinner: false }}
          startPosition={0.1}
        />
        {children}
        <ReactQueryDevtools position="left" />
      </ErrorBoundary>
    </QueryClientProvider>
  );
};
