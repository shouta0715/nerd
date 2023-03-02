import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      suspense: true,
      onError: (error: any) => {
        console.error(error.message);
        if (error.message.includes("Could not verify JWT: JWTExpired")) {
          // TODO: handle expired token
        }
      },
    },
  },
});

export default queryClient;
