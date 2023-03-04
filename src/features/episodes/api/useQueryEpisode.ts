import { useGetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { client } from "src/libs/graphqlClient";

export const useQueryEpisode = (id: string | string[] | undefined) =>
  useGetEpisodeQuery(
    client,
    {
      id,
    },
    {
      enabled: !!id,
    }
  );
