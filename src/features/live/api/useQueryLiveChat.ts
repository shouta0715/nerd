import { useGetChatsQuery } from "src/graphql/chat/chatQuery.generated";
import { client } from "src/libs/graphqlClient";

export const useQueryLiveChat = ({
  episode_id,
  enabled,
}: {
  episode_id: string;
  enabled: boolean;
}) => {
  return useGetChatsQuery(
    client,
    {
      episode_id,
    },
    {
      enabled: enabled && !!episode_id,
    }
  );
};
