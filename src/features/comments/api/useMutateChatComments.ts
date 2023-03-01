import { randomId } from "@mantine/hooks";
import { useQueryClient } from "@tanstack/react-query";
import { useInputCommentState } from "src/features/comments/store";
import {
  GetChatCommentsQuery,
  useInsertChatCommentMutation,
} from "src/graphql/comment/commentQuery.generated";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

type PrevData = {
  pages: GetChatCommentsQuery[];
  pageParams: {
    min_time: number;
    max_time: number;
  }[];
};

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

      const prevData = queryClient.getQueryData<PrevData>([
        "GetChatComments",
        { episode_id },
      ]);

      if (prevData) {
        queryClient.setQueryData(["GetChatComments", { episode_id }], {});
      }
      resetInputComment();

      return {
        chat_comments_by_episode_id:
          prevData?.pages[0].chat_comments_by_episode_id,
        fake_id,
        user,
      };
    },
    onError: (_, newComment, context) => {
      const { episode_id } = newComment.object;

      const prevData = context?.chat_comments_by_episode_id;
      if (prevData) {
        queryClient.setQueryData(["GetChatComments", { episode_id }], prevData);
      }
    },
  });

  return {
    insertComment,
  };
};
