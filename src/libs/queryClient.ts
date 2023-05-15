import { QueryClient } from "@tanstack/react-query";
/* eslint-disable @typescript-eslint/no-explicit-any */

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

export default queryClient;
