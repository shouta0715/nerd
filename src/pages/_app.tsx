import "../styles/tailwind.css";
import { MantineProvider } from "@mantine/core";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import useInitialize from "src/hooks/useInitialize";
import queryClient from "src/libs/queryClient";

const App = ({ Component, pageProps }: AppProps) => {
  const [client] = useState(() => queryClient);

  useInitialize();

  return (
    <QueryClientProvider client={client}>
      <Hydrate state={pageProps.dehydratedState}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            fontFamily: "futura",
            colorScheme: "light",
            colors: {
              indigo: [
                "#f0f5ff",
                "#eef2ff",
                "#e0e7ff",
                "#c7d2fe",
                "#a5b4fc",
                "#818cf8",
                "#6366f1",
                "#4f46e5",
                "#4338ca",
                "#3730a3",
              ],
            },
            primaryColor: "indigo",
          }}
        >
          <Head>
            <title>Anime</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </MantineProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
