import { createClient } from "graphql-ws";

export const createWsClient = (token?: string) => {
  const endpoint = process.env.NEXT_PUBLIC_WS_ENDPOINT as string;
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

  const wsClient = createClient({
    url: endpoint,
    connectionParams: () => ({
      headers,
    }),
  });

  return wsClient;
};
