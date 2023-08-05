import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertChatDocument } from "src/documents/chats";
import { PageParams } from "src/features/chats/common/types";
import {
  GetChatsWorkQuery,
  InsertChatMutation,
  InsertChatMutationVariables,
} from "src/gql/graphql";
import { Error } from "src/libs/error";
import { client } from "src/libs/graphqlClient";

type PrevData = {
  pages: GetChatsWorkQuery[];
  pageParams: PageParams[];
};

export const useMutateChatWork = () => {
  const queryClient = useQueryClient();
  const insertChat = useMutation<
    InsertChatMutation,
    Error,
    InsertChatMutationVariables
  >({
    mutationFn: (object) => client.request(insertChatDocument, object),
    onSuccess: (data) => {
      if (!data.insert_chats_one) return;

      const { work_id, comment_time } = data.insert_chats_one;

      if (!work_id) return;

      const prevData = queryClient.getQueryData<PrevData>([
        "chats",
        { work_id },
      ]);

      if (!prevData) return;

      const mutateCommentPageIndex = Math.floor(comment_time / 300);

      const newPages = prevData.pages.map((page, index) => {
        if (index !== mutateCommentPageIndex || !data.insert_chats_one)
          return page;
        const nextTimeIndex = page.chats_by_work_id.findIndex(
          (comment) => comment.comment_time >= comment_time
        );

        const prevEpisodes: GetChatsWorkQuery = {
          chats_by_work_id: [...page.chats_by_work_id],
        };

        if (nextTimeIndex === -1) {
          prevEpisodes.chats_by_work_id.push({
            ...data.insert_chats_one,
          });

          return prevEpisodes;
        }

        prevEpisodes.chats_by_work_id.splice(nextTimeIndex, 0, {
          ...data.insert_chats_one,
        });

        return prevEpisodes;
      });

      queryClient.setQueryData(["chats", { work_id }], {
        pages: newPages,
        pageParams: prevData.pageParams,
      });
    },
  });

  return {
    insertChat,
  };
};
