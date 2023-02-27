import { randomId } from "@mantine/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useInputCommentState } from "src/features/comments/store";
import {
  GetChatCommentsQuery,
  useGetChatCommentsQuery,
  useInsertChatCommentMutation,
} from "src/graphql/comment/commentQuery.generated";

import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

export const useMutateChatComments = () => {
  const client = useGlobalState((state) => state.client);
  const queryClient = useQueryClient();
  const resetInputComment = useInputCommentState(
    (state) => state.resetInputComment
  );
  const user = useUserState((state) => state.user);

  const insertComment = useInsertChatCommentMutation(client, {
    onMutate: async (newComment) => {
      const fake_id = randomId();
      const { episode_id } = newComment.object;
      const created_at = new Date().toString();
      const prevDataQueryKey = useGetChatCommentsQuery.getKey({ episode_id });
      const prevData =
        queryClient.getQueryData<GetChatCommentsQuery>(prevDataQueryKey);
      if (prevData) {
        queryClient.setQueryData(prevDataQueryKey, {
          chat_comments: [
            ...prevData.chat_comments,
            { ...newComment.object, id: fake_id, user, created_at },
          ],
        });
      }

      resetInputComment();

      return { chat_comments: prevData?.chat_comments, fake_id, user };
    },
    onError: (_, newComment, context) => {
      const { episode_id } = newComment.object;
      const prevDataQueryKey = useGetChatCommentsQuery.getKey({ episode_id });
      const prevData = context?.chat_comments;

      if (prevData) {
        queryClient.setQueryData(prevDataQueryKey, prevData);
      }
    },

    onSettled: (context) => {
      const episode_id = context?.insert_chat_comments_one?.episode_id;
      const prevDataQueryKey = useGetChatCommentsQuery.getKey({ episode_id });
      queryClient.invalidateQueries(prevDataQueryKey);
    },
  });

  return {
    insertComment,
  };
};
