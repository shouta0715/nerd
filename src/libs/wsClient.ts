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
    keepAlive: 180000 + Math.random() * 45000,
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
      message: (message) => console.log("message", message),
      connecting: () => console.log("connecting"),
      ping: () => console.log("ping"),
      pong: (pong, pay) => console.log("pong", pong, pay),
      closed: (event) => console.log("closed", event),
    },
  });

  return wsClient;
};
