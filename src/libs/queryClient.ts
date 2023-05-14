/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient } from "@tanstack/react-query";
import { GraphQLError, NotFoundError } from "src/libs/error";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      suspense: true,
      useErrorBoundary: true,
      onError: (error: any) => {
        if (error.message.include("200")) throw new GraphQLError();
        if (error.message.includes("unexpected null value for type"))
          throw new NotFoundError();
      },
    },
  },
});

export default queryClient;
