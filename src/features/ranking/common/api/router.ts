import {
  dailyEpisodeRankingDocument,
  dailyWorkRankingDocument,
  rankingDocument,
} from "src/documents/ranking";
import {
  GetDailyEpisodeRankingQuery,
  GetDailyEpisodeRankingQueryVariables,
  GetDailyWorkRankingQuery,
  GetDailyWorkRankingQueryVariables,
  GetRankingQuery,
  GetRankingQueryVariables,
} from "src/gql/graphql";
import { getClient } from "src/utils/server/getClient";

export const getRanking = async () => {
  const { client } = getClient();
  const data = await client.request<GetRankingQuery, GetRankingQueryVariables>(
    rankingDocument
  );

  return data;
};

export const getDailyEpisode = async (_gte: Date) => {
  const { client } = getClient();
  const data = await client.request<
    GetDailyEpisodeRankingQuery,
    GetDailyEpisodeRankingQueryVariables
  >(dailyEpisodeRankingDocument, {
    _gte,
  });

  return data;
};

export const getDailyWork = async (_gte: Date) => {
  const { client } = getClient();
  const data = await client.request<
    GetDailyWorkRankingQuery,
    GetDailyWorkRankingQueryVariables
  >(dailyWorkRankingDocument, {
    _gte,
  });

  return data;
};
