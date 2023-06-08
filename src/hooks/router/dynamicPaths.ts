/* eslint-disable no-promise-executor-return */

import {
  useGetEpisodeQuery,
  useGetTodayEpisodeIdsQuery,
} from "src/graphql/episode/episodeQuery.generated";
import { Episodes_Bool_Exp } from "src/types/graphql";
import { getClient } from "src/utils/getClient";
import { parseXml } from "src/utils/parseXml";

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
    _and: [
      {
        number: { _eq: item.number },
        work: { tid: { _eq: item.TID } },
      },
    ],
  }));

  const query = {
    _or: todayDataQuery,
  };

  return query;
};

export const getLiveIdsPaths = async () => {
  const query = await getTodayData();
  const { request } = getClient();
  const fetcher = useGetTodayEpisodeIdsQuery.fetcher(request, {
    where: {
      _or: [
        query,
        {
          start_time: {
            _is_null: true,
          },
        },
      ],
    },
  });

  const data = await fetcher();

  const paths = data.episodes.map((item) => ({
    params: {
      slug: item.id,
    },
  }));

  return paths;
};

export const getEpisode = async (id: string) => {
  const { request } = getClient();
  const fetcher = useGetEpisodeQuery.fetcher(request, {
    id,
  });

  const data = await fetcher();

  return data;
};
