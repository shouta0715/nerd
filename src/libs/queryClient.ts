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
          alert("Your session has expired. Please log in again.");
        }
      },
    },
  },
});

export default queryClient;
