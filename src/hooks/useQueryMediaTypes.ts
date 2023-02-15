import { GraphQLClient } from "graphql-request";
import { useGetMediaTypesQuery } from "../generated/graphql";

export const useQueryMediaTypes = () => {
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string);

  return useGetMediaTypesQuery(
    client,
    {},
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: false,
    }
  );
};
