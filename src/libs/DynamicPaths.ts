import { GraphQLClient } from "graphql-request";
import { GetMediaTypesQuery } from "../generated/graphql";
import { GET_MEDIA_TYPES } from "../graphql/otherQuery";

export const getAllMediaTypes = async () => {
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string);

  const data = await client.request<GetMediaTypesQuery>(GET_MEDIA_TYPES);

  const paths = data.media_types.map((media) => ({
    params: { category: media.name.toString() },
  }));

  return paths;
};
