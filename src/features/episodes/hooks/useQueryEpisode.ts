import { useGetEpisodeQuery } from "src/generated/graphql";
import { useGlobalStore } from "src/store/global/globalStore";

export const useQueryEpisode = (id: string | string[] | undefined) => {
  const client = useGlobalStore((state) => state.client);

  console.log("client", client);

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
