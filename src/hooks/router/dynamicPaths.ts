/* eslint-disable no-promise-executor-return */

import { useGetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import { useGetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";
import { Episodes_Bool_Exp } from "src/types/graphql";
import { getClient } from "src/utils/getClient";
import { parseXml } from "src/utils/parseXml";
import { returningSeason } from "src/utils/returningSeason";

export const getTodayData = async () => {
  const URL = process.env.NEXT_PUBLIC_SHOBOI_ENDOPOINT as string;
  const data = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/xml",
    },
  }).then((response) => response.text());

  const todayData = parseXml(data);

  const todayDataQuery: Episodes_Bool_Exp[] = todayData.map((item) => ({
    _and: [{ number: { _eq: item.number }, work: { tid: { _eq: item.TID } } }],
  }));

  const query = {
    _or: todayDataQuery,
  };

  return query;
};

export const getTodaysAndSeasonsIds = async () => {
  const todayDataQuery = await getTodayData();
  const { request: client } = getClient();

  const todayEpisodeFetcher = useGetTodayEpisodesQuery.fetcher(client, {
    where: todayDataQuery,
  });

  const todayEpisodes = await todayEpisodeFetcher();
  const todayIds: string[] = todayEpisodes.episodes.map(
    (episode) => episode.id
  );

  const seasonData = returningSeason();
  const seasonsFetcher = useGetSeasonWorksQuery.fetcher(client, {
    season: seasonData.season,
    year: seasonData.year,
  });
  const seasons = await seasonsFetcher();
  const seasonsIds: string[] = seasons.works
    .map((work) => {
      const episodeIds = work.episodes.map((episode) => episode.id);

      return episodeIds;
    })
    .flat();

  const allIds = [...todayIds, ...seasonsIds];

  const paths = allIds.map((id) => ({
    params: { slug: id },
  }));

  return paths;
};
