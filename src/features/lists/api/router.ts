import {
  seasonEpisodesDocument,
  todayEpisodesDocument,
  weeklyWorksDocument,
} from "src/documents/routers";
import {
  GetSeasonWorksQuery,
  GetSeasonWorksQueryVariables,
  GetTodayEpisodesQuery,
  GetTodayEpisodesQueryVariables,
  GetWeeklyWorksQuery,
  GetWeeklyWorksQueryVariables,
} from "src/gql/graphql";
import { getTodayData } from "src/hooks/router/dynamicPaths";
import { getClient } from "src/utils/server/getClient";
import { returningSeason } from "src/utils/server/returningSeason";

export const getTodayEpisodes = async () => {
  const query = await getTodayData();
  const { client } = getClient();
  const data = await client.request<
    GetTodayEpisodesQuery,
    GetTodayEpisodesQueryVariables
  >(todayEpisodesDocument, {
    where: query,
  });

  return data;
};

export const getSeasonWorks = async (limit: number | null) => {
  const { client } = getClient();
  const { season, year } = returningSeason();

  const data = await client.request<
    GetSeasonWorksQuery,
    GetSeasonWorksQueryVariables
  >(seasonEpisodesDocument, {
    season,
    year,
    limit,
  });

  return data;
};

export const getWeeklyWorks = async (limit: number | null) => {
  const { client } = getClient();

  const data = await client.request<
    GetWeeklyWorksQuery,
    GetWeeklyWorksQueryVariables
  >(weeklyWorksDocument, {
    limit,
  });

  return data;
};
