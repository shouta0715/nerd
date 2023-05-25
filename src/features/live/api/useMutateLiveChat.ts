import { useQueryClient } from "@tanstack/react-query";
import {
  GetChatsEpisodeQuery,
  useInsertChatMutation,
} from "src/graphql/chat/chatQuery.generated";
import { client } from "src/libs/graphqlClient";

type InfiniteLiveChats = {
  pageParams: [];
  pages: GetChatsEpisodeQuery[];
};

type Pages = InfiniteLiveChats["pages"];

type EpisodeData = Pages[0]["chats_by_episode_id"];

export const useMutateLiveChat = () => {
  const queryClient = useQueryClient();

  const insetChat = useInsertChatMutation(client, {
    onSuccess: (variables) => {
      const episode_id = variables.insert_chats_one?.episode_id;
      const prevData = queryClient.getQueryData<InfiniteLiveChats>([
        "LiveChats",
        { episode_id },
      ]);

      if (!prevData) return;

      const { pageParams, pages } = prevData;

      const lastEpisode = pages.at(-1)?.chats_by_episode_id;
      if (!lastEpisode) return;

      const newChat = variables.insert_chats_one;
      if (!newChat) return;

      const newEpisode: EpisodeData = [...lastEpisode, newChat];

      const newPage: Pages = [
        ...pages.slice(0, -1),
        {
          chats_by_episode_id: newEpisode,
        },
      ];
      queryClient.setQueriesData<InfiniteLiveChats>(
        ["LiveChats", { episode_id }],
        {
          pageParams,
          pages: newPage,
        }
      );
    },
  });

  return {
    insetChat,
  };
};
