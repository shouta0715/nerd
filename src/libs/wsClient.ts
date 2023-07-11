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
    keepAlive: 240000 + Math.random() * 45000,
    shouldRetry: (error) => {
      if (error instanceof CloseEvent && error.code === 4409) {
        console.log("shouldRetry in error code 4409", error);

        return true;
      }

      console.log("shouldRetry", error);

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
      ping: (receive) => console.log("ping", receive),
      pong: (receive) => console.log("pong", receive),
    },
  });

  return wsClient;
};
