import { useQueryClient } from "@tanstack/react-query";
import {
  GetChatsQuery,
  useInsertChatMutation,
} from "src/graphql/chat/chatQuery.generated";
import { UnauthorizedError } from "src/libs/error";
import { client } from "src/libs/graphqlClient";
import { useUserState } from "src/store/user/userState";
import { genRandomId } from "src/utils/genRandomId";

const genQueryKey = (episode_id: string) => {
  return ["GetChats", { episode_id }];
};

export const useMutateLiveChat = () => {
  const queryClient = useQueryClient();
  const user = useUserState((state) => state.user);

  const insetChat = useInsertChatMutation(client, {
    onMutate: async (newComment) => {
      const fake_id = genRandomId();

      const { episode_id, comment_time, content, commenter_name } =
        newComment.object;

      if (!user) throw new UnauthorizedError();

      const created_at = new Date().toString();
      const prevData = queryClient.getQueryData<GetChatsQuery>(
        genQueryKey(episode_id)
      );

      if (comment_time !== 0 || !prevData)
        return { prevData, fake_id, comment_time };

      const newChat: GetChatsQuery["chats"][0] = {
        id: fake_id,
        episode_id,
        comment_time,
        content: content || "",
        commenter_name: commenter_name || "",
        created_at,
        user_id: user.id,
        user,
      };

      queryClient.setQueryData<GetChatsQuery>(genQueryKey(episode_id), {
        chats: [...prevData.chats, newChat],
      });

      return { prevData, fake_id, comment_time };
    },

    onSuccess: (data, _, context) => {
      if (!data.insert_chats_one) return;

      const { episode_id } = data.insert_chats_one;
      const prevData = queryClient.getQueryData<GetChatsQuery>(
        genQueryKey(episode_id)
      );

      if (!prevData || !context) return;

      if (context.comment_time !== 0) {
        const newChats = [...prevData.chats, data.insert_chats_one];

        queryClient.setQueryData<GetChatsQuery>(genQueryKey(episode_id), {
          chats: newChats,
        });

        return;
      }

      const { fake_id } = context;

      const newChats: GetChatsQuery["chats"] = prevData.chats.map((chat) => {
        if (chat.id === fake_id) {
          return {
            ...chat,
            id: data.insert_chats_one?.id,
          };
        }

        return chat;
      });

      queryClient.setQueryData<GetChatsQuery>(genQueryKey(episode_id), {
        chats: newChats,
      });
    },
  });

  return {
    insetChat,
  };
};
