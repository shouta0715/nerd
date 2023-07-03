import { createClient } from "graphql-ws";

const url = process.env.NEXT_PUBLIC_WS_ENDPOINT as string;

export const getWsClient = (token: string) => {
  const wsClient = createClient({
    url,
    retryAttempts: 5,
    connectionParams: () => {
      return {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
    },
  });

  return wsClient;
};
