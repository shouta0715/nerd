import { chatsDocument } from "src/documents/chats";
import { GetChatsQuery, GetChatsQueryVariables } from "src/gql/graphql";
import { useGraphQL } from "src/hooks/useGraphQL";

export const useQueryLiveChat = ({
  episode_id,
  enabled,
}: {
  episode_id: string;
  enabled: boolean;
}) => {
  return useGraphQL<GetChatsQuery, GetChatsQueryVariables>({
    document: chatsDocument,
    options: {
      enabled,
      gcTime: 0,
    },
    variables: {
      episode_id,
    },
  });
};
