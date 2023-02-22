import { useGetChatCommentsQuery } from "src/generated/graphql";
import { getClient } from "src/utils/getClient";

export const useQueryComments = (episode_id: string) => {
  const { request } = getClient();

  return useGetChatCommentsQuery(
    request,
    {
      episode_id,
    },
    {
      enabled: !!episode_id,
    }
  );
};
