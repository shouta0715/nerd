import { createClient } from "graphql-ws";

const url = process.env.NEXT_PUBLIC_WS_ENDPOINT as string;

type Props = {
  token: string;
  onConnected: () => void;
  onError: (error: unknown) => void;
};

export const getWsClient = ({ token, onConnected, onError }: Props) => {
  const wsClient = createClient({
    url,
    retryAttempts: 5,
    keepAlive: 270000,
    connectionParams: () => {
      return {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
    },
    on: {
      connected: onConnected,
      error: onError,
    },
  });

  return wsClient;
};
