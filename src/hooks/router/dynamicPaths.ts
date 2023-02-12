/* eslint-disable no-promise-executor-return */
import axios from "axios";
import { GraphQLClient } from "graphql-request";
import {
  Episodes_Bool_Exp,
  GetMediaTypesQuery,
  // UpdateTodayEpisodeMutation,
} from "../../generated/graphql";
import { GET_MEDIA_TYPES } from "../../graphql/otherQuery";
import { UPDATE_TODAY_EPISODE } from "../../graphql/episode/episodeQuery";

type ResultData = {
  TID: number;
  title: string;
  number: number;
  start_time: string;
  end_time: string;
};

export const getAllMediaTypes = async () => {
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string);

  const data = await client.request<GetMediaTypesQuery>(GET_MEDIA_TYPES);

  const paths = data.media_types.map((media) => ({
    params: { category: media.name.toString() },
  }));

  return paths;
};

export const getTodayData = async () => {
  const data = await axios
    .get<ResultData[]>("http://localhost:3000/api/data/today")
    .then((response) => response.data);
  // const client = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string, {
  //   headers: {
  //     "x-hasura-admin-secret": process.env.NEXT_PUBLIC_ADMIN_SECRET as string,
  //   },
  // });

  // await Promise.all(
  //   data.map(async (item) => {
  //     // TODO 本番のときは消去する
  //     await new Promise((resolve) => setTimeout(resolve, 2000));
  //     const result = await client.request<UpdateTodayEpisodeMutation>(
  //       UPDATE_TODAY_EPISODE,
  //       {
  //         tid: item.TID,
  //         number: item.number,
  //         episodes_set_input: {
  //           start_time: item.start_time,
  //           end_time: item.end_time,
  //         },
  //       }
  //     );

  //     return result;
  //   })
  // );

  const todayDataQuery: Episodes_Bool_Exp[] = data.map((item) => ({
    _and: [{ number: { _eq: item.number }, work: { tid: { _eq: item.TID } } }],
  }));

  const query = {
    _or: todayDataQuery,
  };

  return query;
};
