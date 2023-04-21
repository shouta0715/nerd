/* eslint-disable no-promise-executor-return */

import { Episodes_Bool_Exp } from "src/types/graphql";
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
