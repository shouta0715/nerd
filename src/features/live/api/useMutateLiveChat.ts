import { useQueryClient } from "@tanstack/react-query";
import {
  GetChatsQuery,
  useInsertChatMutation,
} from "src/graphql/chat/chatQuery.generated";
import { client } from "src/libs/graphqlClient";

const genQueryKey = (episode_id: string) => {
  return ["GetChats", { episode_id }];
};

export const useMutateLiveChat = () => {
  const queryClient = useQueryClient();

  const insetChat = useInsertChatMutation(client, {
    onSuccess: (data) => {
      if (!data.insert_chats_one) return;

      const { episode_id } = data.insert_chats_one;
      const prevData = queryClient.getQueryData<GetChatsQuery>(
        genQueryKey(episode_id)
      );

      if (!prevData) return;

      const isDuplicated = prevData.chats.some(
        (chat) => chat.id === data.insert_chats_one?.id
      );

      if (isDuplicated) return;

      const newChats = [...prevData.chats, data.insert_chats_one];

      queryClient.setQueryData<GetChatsQuery>(genQueryKey(episode_id), {
        chats: newChats,
      });
    },
  });

  return {
    insetChat,
  };
};
