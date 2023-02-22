import { useQueryClient } from "@tanstack/react-query";
import {
  GetChatCommentsQuery,
  useGetChatCommentsQuery,
  useInsertChatCommentMutation,
} from "src/generated/graphql";
import { useGlobalStore } from "src/store/global/globalStore";

export const useMutateChatComments = () => {
  const client = useGlobalStore((state) => state.client);
  const queryClient = useQueryClient();
  const insertComment = useInsertChatCommentMutation(client, {
    onSuccess: (data) => {
      const { episode_id } = data.insert_chat_comments_one || {};
      const prevDataQueryKey = useGetChatCommentsQuery.getKey({ episode_id });
      const prevData =
        queryClient.getQueryData<GetChatCommentsQuery>(prevDataQueryKey);

      if (prevData) {
        const newComment = data.insert_chat_comments_one;
        queryClient.setQueryData(prevDataQueryKey, {
          chat_comments: [...prevData.chat_comments, newComment],
        });
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return {
    insertComment,
  };
};
