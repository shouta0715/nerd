import { QueryClient } from "@tanstack/react-query";

/* eslint-disable @typescript-eslint/no-explicit-any */

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: (failureCount, error: any) => {
        if (error?.message === "Network request failed")
          return failureCount < 5;

        return false;
      },
    },
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,

      retry: (failureCount, error: any) => {
        if (error?.message === "Network request failed")
          return failureCount < 5;

        return false;
      },
      suspense: true,
      throwOnError: true,
    },
  },
});

export default queryClient;
