import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import queryClient from "../libs/queryClient";
import "react-toastify/dist/ReactToastify.css";
import { useInitialize } from "../hooks/useInitialize";

const App = ({ Component, pageProps }: AppProps) => {
  const [client] = useState(() => queryClient);
  useInitialize();

  return (
    <QueryClientProvider client={client}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          colors: {
            grape: [
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
          primaryColor: "grape",
        }}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
