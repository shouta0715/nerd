/* eslint-disable no-promise-executor-return */

import { episodeDocument } from "src/documents/episodes";
import { liveIdsDocument } from "src/documents/routers";
import { Episodes_Bool_Exp, GetLiveIdsQuery } from "src/gql/graphql";
import { getClient } from "src/utils/server/getClient";
import { parseXml } from "src/utils/server/parseXml";

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
  const { client } = getClient();
  const data = await client.request<GetLiveIdsQuery>(liveIdsDocument, {
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

  const paths = data.episodes.map((item) => ({
    params: {
      slug: item.id,
    },
  }));

  return paths;
};

export const getEpisode = async (id: string) => {
  const { client } = getClient();

  const data = await client.request(episodeDocument, {
    id,
  });

  return data;
};
