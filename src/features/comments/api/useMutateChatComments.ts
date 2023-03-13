import { randomId } from "@mantine/hooks";
import { useQueryClient } from "@tanstack/react-query";

import { useInputCommentState } from "src/features/comments/store";
import {
  GetChatsQuery,
  useInsertChatMutation,
} from "src/graphql/comment/commentQuery.generated";

import { client } from "src/libs/graphqlClient";

import { useUserState } from "src/store/user/userState";

type PrevData = {
  pages: GetChatsQuery[];
  pageParams: {
    _gte: number;
    _lt: number;
  }[];
};

export const useMutateChats = () => {
  const queryClient = useQueryClient();
  const resetInputComment = useInputCommentState(
    (state) => state.resetInputComment
  );
  const user = useUserState((state) => state.user);
  const insertChat = useInsertChatMutation(client, {
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
        "chats",
        { episode_id },
      ]);

      if (prevData) {
        queryClient.setQueryData(["chats", { episode_id }], {
          pages: prevData.pages.map((page, index) => {
            if (index === mutateCommentPageIndex) {
              const mutateNextTimeIndex = page.chats_by_episode_id.findIndex(
                (comment) => comment.comment_time >= comment_time
              );

              const newPages: GetChatsQuery = {
                chats_by_episode_id: [...page.chats_by_episode_id],
              };

              if (mutateNextTimeIndex === -1 || comment_time === 0) {
                newPages.chats_by_episode_id.push({
                  comment_time,
                  content,
                  created_at,
                  commenter_name,
                  user,
                  user_id: user.id,
                  id: fake_id,
                });
              } else {
                newPages.chats_by_episode_id.splice(mutateNextTimeIndex, 0, {
                  comment_time,
                  content,
                  created_at,
                  commenter_name,
                  user,
                  user_id: user.id,
                  id: fake_id,
                });
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
      // TODO: ここでコメントを追加する
      const episode_id = newData.insert_chats_one?.episode_id;
      queryClient.invalidateQueries(["chats", { episode_id }]);
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (_: any, newComment, context) => {
      const { episode_id } = newComment.object;

      const prevData = context?.pages;
      if (prevData) {
        queryClient.setQueryData(["chats", { episode_id }], prevData);
      }
    },
  });

  return {
    insertChat,
  };
};
