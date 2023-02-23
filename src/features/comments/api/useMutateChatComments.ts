import { randomId } from "@mantine/hooks";
import { useQueryClient } from "@tanstack/react-query";
import {
  GetChatCommentsQuery,
  useGetChatCommentsQuery,
  useInsertChatCommentMutation,
} from "src/generated/graphql";
import { useGlobalState } from "src/store/global/globalStore";

export const useMutateChatComments = () => {
  const client = useGlobalState((state) => state.client);
  const queryClient = useQueryClient();
  const insertComment = useInsertChatCommentMutation(client, {
    onMutate: async (newComment) => {
      const fake_id = randomId();
      const { episode_id } = newComment.object;
      const prevDataQueryKey = useGetChatCommentsQuery.getKey({ episode_id });
      const prevData =
        queryClient.getQueryData<GetChatCommentsQuery>(prevDataQueryKey);
      if (prevData) {
        queryClient.setQueryData(prevDataQueryKey, {
          chat_comments: [
            ...prevData.chat_comments,
            { ...newComment.object, id: fake_id },
          ],
        });
      }

      return { chat_comments: prevData?.chat_comments, fake_id };
    },
    onSuccess: (newData, _, context) => {
      const { episode_id } = newData?.insert_chat_comments_one || {};
      const fake_id = context?.fake_id;
      const prevDataQueryKey = useGetChatCommentsQuery.getKey({ episode_id });
      const prevData =
        queryClient.getQueryData<GetChatCommentsQuery>(prevDataQueryKey);
      if (prevData) {
        prevData.chat_comments = prevData.chat_comments.filter(
          (comment) => comment.id !== fake_id
        );
        queryClient.setQueryData(prevDataQueryKey, {
          chat_comments: [
            ...prevData.chat_comments,
            newData?.insert_chat_comments_one,
          ],
        });
      } else {
        queryClient.invalidateQueries(prevDataQueryKey);
      }
    },
    onError: (_, newComment, context) => {
      const { episode_id } = newComment.object;
      const prevDataQueryKey = useGetChatCommentsQuery.getKey({ episode_id });
      const prevData = context?.chat_comments;

      if (prevData) {
        queryClient.setQueryData(prevDataQueryKey, prevData);
      }
    },
  });

  return {
    insertComment,
  };
};
