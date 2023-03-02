import { useGetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { useGlobalState } from "src/store/global/globalStore";

export const useQueryEpisode = (id: string | string[] | undefined) => {
  const client = useGlobalState((state) => state.client);

  return useGetEpisodeQuery(
    client,
    {
      id,
    },
    {
      enabled: !!id,
    }
  );
};
