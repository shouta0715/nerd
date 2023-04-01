import { useGetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import {
  useGetSeasonWorksQuery,
  useGetWeeklyWorksQuery,
} from "src/graphql/work/workQuery.generated";
import { getTodayData } from "src/hooks/router/dynamicPaths";
import { getClient } from "src/utils/getClient";
import { returningSeason } from "src/utils/returningSeason";

export const getTodayEpisodes = async () => {
  const query = await getTodayData();
  const { request } = getClient();
  const fetcher = useGetTodayEpisodesQuery.fetcher(request, {
    where: query,
  });

  const data = await fetcher();

  return data;
};

export const getSeasonWorks = async (limit: number | null) => {
  const { request } = getClient();
  const { season, year } = returningSeason();

  const fetcher = useGetSeasonWorksQuery.fetcher(request, {
    season,
    year,
    limit,
  });

  const data = await fetcher();

  return data;
};

export const getWeeklyWorks = async (limit: number | null) => {
  const { request } = getClient();

  const fetcher = useGetWeeklyWorksQuery.fetcher(request, {
    limit,
  });

  const data = await fetcher();

  return data;
};
