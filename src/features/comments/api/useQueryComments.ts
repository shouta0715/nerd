import { useGetChatCommentsQuery } from "src/generated/graphql";
import { useGlobalState } from "src/store/global/globalStore";

export const useQueryComments = (episode_id: string) => {
  const client = useGlobalState((state) => state.client);
  const isCLient = useGlobalState((state) => state.isClient);

  return useGetChatCommentsQuery(
    client,
    {
      episode_id,
    },
    {
      enabled: !!episode_id && isCLient,
    }
  );
};
