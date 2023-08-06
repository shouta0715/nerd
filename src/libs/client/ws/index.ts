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
    retryAttempts: 6,
    keepAlive: 210000 + Math.random() * 45000,
    shouldRetry: (error) => {
      if (!(error instanceof CloseEvent)) return false;

      if (error.code === 1006) return true;

      if (error.code === 1000) return false;

      return false;
    },
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
