import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertChatDocument } from "src/documents/chats";
import { PageParams } from "src/features/chats/common/types";
import {
  GetChatsEpisodeQuery,
  InsertChatMutation,
  InsertChatMutationVariables,
} from "src/gql/graphql";
import { client } from "src/libs/client/graphql";
import { Error } from "src/libs/error";

type PrevData = {
  pages: GetChatsEpisodeQuery[];
  pageParams: PageParams[];
};

export const useMutateChatEpisode = () => {
  const queryClient = useQueryClient();
  const insertChat = useMutation<
    InsertChatMutation,
    Error,
    InsertChatMutationVariables
  >({
    mutationFn: (object) => client.request(insertChatDocument, object),
    onSuccess: (data) => {
      if (!data.insert_chats_one) return;

      const { episode_id, comment_time } = data.insert_chats_one;

      const prevData = queryClient.getQueryData<PrevData>([
        "chats",
        { episode_id },
      ]);

      if (!prevData) return;

      const mutateCommentPageIndex = Math.floor(comment_time / 300);

      const newPages = prevData.pages.map((page, index) => {
        if (index !== mutateCommentPageIndex || !data.insert_chats_one)
          return page;
        const nextTimeIndex = page.chats_by_episode_id.findIndex(
          (comment) => comment.comment_time >= comment_time
        );

        const prevEpisodes: GetChatsEpisodeQuery = {
          chats_by_episode_id: [...page.chats_by_episode_id],
        };

        if (nextTimeIndex === -1) {
          prevEpisodes.chats_by_episode_id.push({
            ...data.insert_chats_one,
          });

          return prevEpisodes;
        }

        prevEpisodes.chats_by_episode_id.splice(nextTimeIndex, 0, {
          ...data.insert_chats_one,
        });

        return prevEpisodes;
      });

      queryClient.setQueryData(["chats", { episode_id }], {
        pages: newPages,
        pageParams: prevData.pageParams,
      });
    },
  });

  return {
    insertChat,
  };
};
