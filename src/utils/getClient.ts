import { QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";

export const getClient = () => {
  const queryClient = new QueryClient();
  const request = new GraphQLClient(
    process.env.NEXT_PUBLIC_ENDPOINT as string,
    {
      headers: {
        "x-hasura-admin-secret": process.env.ADMIN_SECRET as string,
      },
    }
  );

  return { queryClient, request };
};
