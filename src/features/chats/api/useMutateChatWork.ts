import { useQueryClient } from "@tanstack/react-query";
import { useInputCommentState } from "src/features/comments/store";
import {
  GetChatsWorkQuery,
  useInsertChatMutation,
} from "src/graphql/chat/chatQuery.generated";
import { client } from "src/libs/graphqlClient";
import { useUserState } from "src/store/user/userState";
import { genRandomId } from "src/utils/genRandomId";

type PrevData = {
  pages: GetChatsWorkQuery[];
  pageParams: {
    _gte: number;
    _lt: number;
  }[];
};

export const useMutateChatWork = () => {
  const queryClient = useQueryClient();
  const resetInputComment = useInputCommentState((state) => {
    return state.resetInputComment;
  });
  const user = useUserState((state) => {
    return state.user;
  });

  const insertChat = useInsertChatMutation(client, {
    onMutate: async (newComment) => {
      const fake_id = genRandomId();
      const { work_id, comment_time, content, commenter_name } =
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
        { work_id },
      ]);

      if (prevData) {
        queryClient.setQueryData(["chats", { work_id }], {
          pages: prevData.pages.map((page, index) => {
            if (index === mutateCommentPageIndex) {
              const mutateNextTimeIndex = page.chats_by_work_id.findIndex(
                (comment) => {
                  return comment.comment_time >= comment_time;
                }
              );

              const newPages: GetChatsWorkQuery = {
                chats_by_work_id: [...page.chats_by_work_id],
              };

              if (mutateNextTimeIndex === -1 || comment_time === 0) {
                newPages.chats_by_work_id.push({
                  comment_time,
                  content,
                  created_at,
                  commenter_name,
                  user,
                  user_id: user.id,
                  id: fake_id,
                });
              } else {
                newPages.chats_by_work_id.splice(mutateNextTimeIndex, 0, {
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (_: any, newComment, context) => {
      const { work_id } = newComment.object;

      const prevData = context?.pages;
      if (prevData) {
        queryClient.setQueryData(["chats", { work_id }], prevData);
      }
    },
  });

  return {
    insertChat,
  };
};
