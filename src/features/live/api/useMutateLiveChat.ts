import { useQueryClient } from "@tanstack/react-query";
import {
  GetChatsEpisodeQuery,
  useInsertChatMutation,
} from "src/graphql/chat/chatQuery.generated";
import { UnauthorizedError } from "src/libs/error";
import { client } from "src/libs/graphqlClient";
import { useUserState } from "src/store/user/userState";
import { genRandomId } from "src/utils/genRandomId";

type InfiniteLiveChats = {
  pageParams: [];
  pages: GetChatsEpisodeQuery[];
};

type Pages = InfiniteLiveChats["pages"];

type EpisodeData = Pages[0]["chats_by_episode_id"];

const genQueryKey = (episode_id: string) => {
  return ["LiveChats", { episode_id }];
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
      const prevData = queryClient.getQueryData<InfiniteLiveChats>([
        "LiveChats",
        { episode_id },
      ]);

      if (comment_time !== 0) return { prevData, fake_id, comment_time };

      if (prevData) {
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

      return { prevData, fake_id, comment_time };
    },
    onSuccess: (data, _, context) => {
      const episode_id = data.insert_chats_one?.episode_id;
      const prevData = queryClient.getQueryData<InfiniteLiveChats>([
        "LiveChats",
        { episode_id },
      ]);

      if (!prevData) return;
      const { pageParams, pages } = prevData;

      if (context?.comment_time === 0) {
        if (!context || !data.insert_chats_one) return;
        const [{ fake_id }, { id }, zeroData] = [
          context,
          data.insert_chats_one,
          prevData.pages[0].chats_by_episode_id,
        ];

        const newEpisodes = zeroData.map((chat) => {
          if (chat.id === fake_id) {
            return {
              ...chat,
              id,
            };
          }

          return chat;
        });

        const newPage: Pages = [
          {
            chats_by_episode_id: newEpisodes,
          },
        ];

        queryClient.setQueriesData<InfiniteLiveChats>(genQueryKey(episode_id), {
          pageParams: prevData.pageParams,
          pages: newPage,
        });

        return;
      }

      const lastEpisode = pages.at(-1)?.chats_by_episode_id;
      if (!lastEpisode) return;

      const newChat = data.insert_chats_one;
      if (!newChat) return;

      const newEpisode: EpisodeData = [...lastEpisode, newChat];

      const newPage: Pages = [
        ...pages.slice(0, -1),
        {
          chats_by_episode_id: newEpisode,
        },
      ];
      queryClient.setQueriesData<InfiniteLiveChats>(genQueryKey(episode_id), {
        pageParams,
        pages: newPage,
      });
    },
  });

  return {
    insetChat,
  };
};
