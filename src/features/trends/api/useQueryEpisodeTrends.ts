import { useQuery } from "@tanstack/react-query";
import { trendDocument } from "src/documents/trends";
import { getTrendingVariables } from "src/features/trends/utils";
import { GetTrendQuery, GetTrendQueryVariables } from "src/gql/graphql";
import { client } from "src/libs/client/graphql";

const getTrends = async (variables: GetTrendQueryVariables) => {
  const data = await client.request<GetTrendQuery, GetTrendQueryVariables>(
    trendDocument,
    variables
  );

  return data;
};

export const useQueryTrends = () => {
  return useQuery({
    queryKey: ["trends"],
    queryFn: async () => getTrends(getTrendingVariables()),
    staleTime: 1000 * 60 * 5,
  });
};
