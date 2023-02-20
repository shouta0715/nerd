import { GraphQLClient } from "graphql-request";
import { createClient } from "graphql-ws";

export const createClients = (token?: string) => {
  const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string;
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

  const client = new GraphQLClient(endpoint, {
    headers,
  });

  const wsEndpoint = process.env.NEXT_PUBLIC_WS_ENDPOINT as string;

  const wsClient = createClient({
    url: wsEndpoint,
    connectionParams: () => ({
      headers,
    }),
  });

  return { client, wsClient };
};
