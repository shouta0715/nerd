import { GraphQLClient } from "graphql-request";

export const createClient = (token: string) => {
  const endpoint = process.env.NEXT_PUBLIC_ENDPOINT as string;
  const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

  const client = new GraphQLClient(endpoint, {
    headers,
  });

  return client;
};
