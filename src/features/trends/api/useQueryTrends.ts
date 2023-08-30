import { useQuery } from "@tanstack/react-query";
import { trendsDocument } from "src/documents/trends";
import { getTrendsVariables } from "src/features/trends/utils";
import { GetTrendsQuery, GetTrendsQueryVariables } from "src/gql/graphql";
import { client } from "src/libs/client/graphql";

const getTrends = async (variables: GetTrendsQueryVariables) => {
  const data = client.request<GetTrendsQuery, GetTrendsQueryVariables>(
    trendsDocument,
    variables
  );

  return data;
};

export const useQueryTrends = () => {
  return useQuery({
    queryKey: ["trends"],
    queryFn: async () => getTrends(getTrendsVariables()),
    staleTime: 1000 * 60 * 5,
  });
};
