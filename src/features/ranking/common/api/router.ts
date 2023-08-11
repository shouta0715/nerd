import { rankingDocument } from "src/documents/ranking";
import { GetRankingQuery, GetRankingQueryVariables } from "src/gql/graphql";
import { getClient } from "src/utils/server/getClient";

export const getRanking = async () => {
  const { client } = getClient();
  const data = await client.request<GetRankingQuery, GetRankingQueryVariables>(
    rankingDocument
  );

  return data;
};
