import axios from "axios";
import { GraphQLClient } from "graphql-request";
import { GetMediaTypesQuery } from "../../generated/graphql";
import { GET_MEDIA_TYPES } from "../../graphql/otherQuery";

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
    .get<ResultData>("http://localhost:3000/api/data/today")
    .then((response) => response.data);

  return data;
};
