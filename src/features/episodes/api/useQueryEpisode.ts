import { useGetEpisodeQuery } from "src/generated/graphql";
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
