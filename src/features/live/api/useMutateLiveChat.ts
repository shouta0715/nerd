import { useQueryClient } from "@tanstack/react-query";
import {
  GetChatsEpisodeQuery,
  useInsertChatMutation,
} from "src/graphql/chat/chatQuery.generated";
import { client } from "src/libs/graphqlClient";
import { useUserState } from "src/store/user/userState";
import { genRandomId } from "src/utils/genRandomId";

type InfiniteLiveChats = {
  pageParams: [];
  pages: GetChatsEpisodeQuery[];
};
export const useMutateLiveChat = () => {
  const queryClient = useQueryClient();
  const user = useUserState((state) => {
    return state.user;
  });

  const insetChat = useInsertChatMutation(client, {
    onMutate: async (newComment) => {
      const fake_id = genRandomId();

      const { episode_id, comment_time, content, commenter_name } =
        newComment.object;

      if (
        !content?.trim() ||
        comment_time === undefined ||
        comment_time === null ||
        !commenter_name?.trim() ||
        !user
      ) {
        throw new Error("Invalid comment");
      }

      const created_at = new Date().toString();
      const prevData = queryClient.getQueryData<InfiniteLiveChats>([
        "LiveChats",
        { episode_id },
      ]);

      if (prevData) {
        if (comment_time === 0) {
          const prevChats = prevData.pages[0].chats_by_episode_id;
          queryClient.setQueryData(["LiveChats", { episode_id }], {
            pages: [
              {
                chats_by_episode_id: [
                  {
                    id: fake_id,
                    episode_id,
                    comment_time,
                    content,
                    commenter_name,
                    created_at,
                    user_id: user.id,
                    user,
                  },
                  ...prevChats,
                ],
              },
            ],
          });

          return { prevData, fake_id, comment_time };
        }

        const lastPageIndex = prevData.pages.length - 1;
        const prevChats = prevData.pages[lastPageIndex].chats_by_episode_id;

        queryClient.setQueryData(["LiveChats", { episode_id }], {
          pages: [
            {
              chats_by_episode_id: [
                ...prevChats,
                {
                  id: fake_id,
                  episode_id,
                  comment_time,
                  content,
                  commenter_name,
                  created_at,
                  user_id: user.id,
                  user,
                },
              ],
            },
            ...prevData.pages.slice(0, lastPageIndex),
          ],
          pageParams: prevData.pageParams,
        });
      }

      return { prevData, fake_id, comment_time };
    },

    onSuccess: (data, variables, context) => {
      if (context?.comment_time !== 0) return;
      const { episode_id } = variables.object;
      const fake_id = context?.fake_id;
      const prevData = queryClient.getQueryData<InfiniteLiveChats>([
        "LiveChats",
        { episode_id },
      ]);

      if (prevData) {
        const ZeroTimeData = prevData.pages[0].chats_by_episode_id;
        queryClient.setQueryData(["LiveChats", { episode_id }], {
          pages: [
            {
              chats_by_episode_id: ZeroTimeData.map((chat) => {
                if (chat.id === fake_id) {
                  return {
                    ...chat,
                    id: data.insert_chats_one?.id,
                  };
                }

                return chat;
              }),
            },
          ],
          pageParams: prevData.pageParams,
        });
      }
    },
  });

  return {
    insetChat,
  };
};
