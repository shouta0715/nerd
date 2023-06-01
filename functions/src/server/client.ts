import {GraphQLClient} from "graphql-request";

export const getClient = () => {
  const url = process.env.ENDPOINT as string;

  return new GraphQLClient(url, {
    headers: {
      "x-hasura-admin-secret": process.env.ADMIN_SECRET as string,
    },
  });
};
