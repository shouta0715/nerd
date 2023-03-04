import { randomId } from "@mantine/hooks";
import { useQueryClient } from "@tanstack/react-query";

import { useInputCommentState } from "src/features/comments/store";
import {
  GetChatCommentsQuery,
  useInsertChatCommentMutation,
} from "src/graphql/comment/commentQuery.generated";
import { client } from "src/libs/graphqlClient";

import { useUserState } from "src/store/user/userState";

type PrevData = {
  pages: GetChatCommentsQuery[];
  pageParams: {
    _gte: number;
    _lt: number;
  }[];
};

export const useMutateChatComments = () => {
  const queryClient = useQueryClient();
  const resetInputComment = useInputCommentState(
    (state) => state.resetInputComment
  );
  const user = useUserState((state) => state.user);
  const insertComment = useInsertChatCommentMutation(client, {
    onMutate: async (newComment) => {
      const fake_id = randomId();
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
      const mutateCommentPageIndex = Math.floor(comment_time / 300);

      const prevData = queryClient.getQueryData<PrevData>([
        "GetChatComments",
        { episode_id },
      ]);

      if (prevData) {
        queryClient.setQueryData(["GetChatComments", { episode_id }], {
          pages: prevData.pages.map((page, index) => {
            if (index === mutateCommentPageIndex) {
              const mutateNextTimeIndex =
                page.chat_comments_by_episode_id.findIndex(
                  (comment) => comment.comment_time >= comment_time
                );
              const newPages = {
                chat_comments_by_episode_id: [
                  ...page.chat_comments_by_episode_id,
                ],
              };

              if (mutateNextTimeIndex === -1) {
                newPages.chat_comments_by_episode_id.unshift({
                  comment_time,
                  content,
                  created_at,
                  commenter_name,
                  user,
                  user_id: user.id,
                  id: fake_id,
                });
              } else {
                newPages.chat_comments_by_episode_id.splice(
                  mutateNextTimeIndex,
                  0,
                  {
                    comment_time,
                    content,
                    created_at,
                    commenter_name,
                    user,
                    user_id: user.id,
                    id: fake_id,
                  }
                );
              }

              return newPages;
            }

            return page;
          }),
        });
      }
      resetInputComment();

      return {
        pages: prevData?.pages,
        pageParams: prevData?.pageParams,
        fake_id,
        user,
      };
    },
    onSuccess: (newData, __) => {
      const episode_id = newData.insert_chat_comments_one?.episode_id;
      queryClient.invalidateQueries(["GetChatComments", { episode_id }]);
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (_: any, newComment, context) => {
      const { episode_id } = newComment.object;

      const prevData = context?.pages;
      if (prevData) {
        queryClient.setQueryData(["GetChatComments", { episode_id }], prevData);
      }
    },
  });

  return {
    insertComment,
  };
};
