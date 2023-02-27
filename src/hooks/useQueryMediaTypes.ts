import { useGetMediaTypesQuery } from "src/graphql/otherQuery.generated";
import { getClient } from "src/utils/getClient";

export const useQueryMediaTypes = () => {
  const { request: client } = getClient();

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
