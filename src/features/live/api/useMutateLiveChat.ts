import { useMutation, useQueryClient } from "@tanstack/react-query";
import { chatsDocument, insertChatDocument } from "src/documents/chats";
import {
  GetChatsQuery,
  InsertChatMutation,
  InsertChatMutationVariables,
} from "src/gql/graphql";
import { useIp } from "src/hooks/useIp";
import { client } from "src/libs/client/graphql";
import { Error } from "src/libs/error";
import { getQueryKey } from "src/utils/client/getQueryKey";

export const useMutateLiveChat = () => {
  const queryClient = useQueryClient();
  const { getIpAddress } = useIp();

  const insetChat = useMutation<
    InsertChatMutation,
    Error,
    InsertChatMutationVariables
  >({
    mutationFn: (object) => client.request(insertChatDocument, object),
    onSuccess: (data) => {
      if (!data.insert_chats_one) return;

      const { episode_id } = data.insert_chats_one;
      const prevData = queryClient.getQueryData<GetChatsQuery>(
        getQueryKey({
          document: chatsDocument,
          variables: {
            episode_id,
          },
        })
      );

      if (!prevData) return;

      const isDuplicated = prevData.chats.some(
        (chat) => chat.id === data.insert_chats_one?.id
      );

      if (isDuplicated) return;

      const newChats = [...prevData.chats, data.insert_chats_one];

      queryClient.setQueryData<GetChatsQuery>(
        getQueryKey({
          document: chatsDocument,
          variables: {
            episode_id,
          },
        }),
        {
          chats: newChats,
        }
      );
    },
  });

  return {
    insetChat,
    getIpAddress,
  };
};
