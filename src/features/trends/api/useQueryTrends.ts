import { useQuery } from "@tanstack/react-query";
import { trendsDocument } from "src/documents/trends";
import { Trends } from "src/features/trends/types";
import {
  getTrendsVariables,
  getWeightedCount,
} from "src/features/trends/utils";
import { GetTrendsQuery, GetTrendsQueryVariables } from "src/gql/graphql";
import { client } from "src/libs/client/graphql";

const getTrends = async (variables: GetTrendsQueryVariables) => {
  return client.request<GetTrendsQuery, GetTrendsQueryVariables>(
    trendsDocument,
    variables
  );
};

export const useQueryTrends = () => {
  return useQuery({
    queryKey: ["trends"],
    queryFn: async () => getTrends(getTrendsVariables()),
    staleTime: 1000 * 60 * 5,
    select: (data): Trends => {
      return {
        trending_chat_episodes: data.trending_chat_episodes.map((episode) => {
          const { short_term_chats, mid_term_chats, long_term_chats, ...rest } =
            episode;

          return {
            ...rest,
            weighted_count: getWeightedCount({
              short_count: short_term_chats.aggregate?.count,
              mid_count: mid_term_chats.aggregate?.count,
              long_count: long_term_chats.aggregate?.count,
            }),
            total_count:
              (short_term_chats.aggregate?.count ?? 0) +
              (mid_term_chats.aggregate?.count ?? 0) +
              (long_term_chats.aggregate?.count ?? 0),
          };
        }),
      };
    },
  });
};
