import { GraphQLClient } from "graphql-request";

const url = process.env.NEXT_PUBLIC_ENDPOINT as string;

export const getClient = () =>
  new GraphQLClient(url, {
    headers: {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET as string,
    },
  });
