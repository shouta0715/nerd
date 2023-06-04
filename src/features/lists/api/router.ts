import {
  useGetEpisodeQuery,
  useGetHighTrafficEpisodesIdsQuery,
  useGetTodayEpisodesQuery,
} from "src/graphql/episode/episodeQuery.generated";
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

export const getHighTrafficEpisodesIds = async () => {
  const { request } = getClient();
  const { season, year } = returningSeason();

  const fetcher = useGetHighTrafficEpisodesIdsQuery.fetcher(request, {
    season,
    year,
  });

  const data = await fetcher();

  const weeklyIds = data.weekly_works
    .map((work) => {
      return work.episodes.map((episode) => {
        return episode.id;
      });
    })
    .flat();

  const seasonIds = data.works
    .map((work) => {
      return work.episodes.map((episode) => {
        return episode.id;
      });
    })
    .flat();

  const allIds = [...weeklyIds, ...seasonIds];

  const ids = [...new Set(allIds)];

  return ids;
};

export const getHighTrafficEpisodes = async (id: string) => {
  const { request } = getClient();
  const fetcher = useGetEpisodeQuery.fetcher(request, {
    id,
  });

  const data = await fetcher();

  return data;
};
