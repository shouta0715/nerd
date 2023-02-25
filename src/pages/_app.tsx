import "../styles/tailwind.css";
import { MantineProvider, Modal } from "@mantine/core";
import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { RouterTransition } from "src/components/Elements/RouterTransition";
import { Logo } from "src/components/Icon/Logo";
import { Error } from "src/components/Layout/error/Error";
import { ModalContent } from "src/components/Layout/modules/ModalContent";
import { useInitialize } from "src/hooks/useInitialize";
import queryClient from "src/libs/queryClient";
import { useGlobalState } from "src/store/global/globalStore";

const App = ({ Component, pageProps }: AppProps) => {
  const [client] = useState(() => queryClient);
  const isOpenLoginModal = useGlobalState((state) => state.isOpenLoginModal);
  const changeIsOpenModal = useGlobalState((state) => state.setIsOpenModal);

  useInitialize();

  return (
    <ErrorBoundary FallbackComponent={Error}>
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
            </Head>
            <Modal
              opened={isOpenLoginModal}
              onClose={() => changeIsOpenModal(false)}
              title={<Logo />}
              classNames={{
                title: "text-2xl font-bold mx-auto",
                overlay: "bg-gray-900 bg-opacity-50",
              }}
              centered
              radius="md"
            >
              <ModalContent />
            </Modal>
            <RouterTransition />
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </MantineProvider>
        </Hydrate>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
