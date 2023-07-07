import { useQueryClient } from "@tanstack/react-query";
import { CommentsFilter } from "src/features/comments/types";
import {
  GetCommentsEpisodeQuery,
  useMutateEpisodeCommentMutation,
  useMutateWorkCommentMutation,
} from "src/graphql/comment/commentQuery.generated";
import { client } from "src/libs/graphqlClient";
import { useUserState } from "src/store/user/userState";

type InfiniteCommentEpisode = {
  pageParam: [];
  pages: GetCommentsEpisodeQuery[];
};

export const useMutateComment = (filter: CommentsFilter) => {
  const user = useUserState((state) => {
    return state.user;
  });
  const queryClient = useQueryClient();
  const insertEpisodeComment = useMutateEpisodeCommentMutation(client, {
    onMutate: async (variables) => {
      const { episode_id, reply_to } = variables;

      if (reply_to) return { reply: true, episode_id };

      return {
        reply: false,
        episode_id,
      };
    },
    onSuccess: (data, variables, context) => {
      if (context?.reply) {
        queryClient.invalidateQueries({
          queryKey: ["replies"],
        });
        queryClient.invalidateQueries({
          queryKey: ["comments", { episode_id: context.episode_id }],
        });

        return;
      }
      const prevData = queryClient.getQueryData<InfiniteCommentEpisode>([
        "comments",
        { episode_id: variables.episode_id, filter },
      ]);

      const { insert_comments_one } = data;

      if (!prevData || !insert_comments_one || !user) return;

      queryClient.setQueryData<InfiniteCommentEpisode>(
        ["comments", { episode_id: variables.episode_id, filter }],
        {
          pageParam: prevData.pageParam,
          pages: prevData.pages.map((page, index) => {
            if (!data.insert_comments_one) return page;
            if (index === 0) {
              return {
                comments: [insert_comments_one, ...page.comments],
              };
            }

            return page;
          }),
        }
      );
    },
  });
  const insertWorkComment = useMutateWorkCommentMutation(client, {
    onMutate: async (variables) => {
      const { work_id, reply_to } = variables;

      if (reply_to) return { reply: true, work_id };

      return {
        reply: false,
        work_id,
      };
    },
    onSuccess: (data, variables, context) => {
      if (context?.reply) {
        queryClient.invalidateQueries({
          queryKey: ["replies"],
        });
        queryClient.invalidateQueries({
          queryKey: ["comments", { work_id: context.work_id }],
        });

        return;
      }
      const prevData = queryClient.getQueryData<InfiniteCommentEpisode>([
        "comments",
        { work_id: variables.work_id, filter },
      ]);

      if (!prevData || !user) return;

      // idを更新する
      queryClient.setQueryData<InfiniteCommentEpisode>(
        ["comments", { work_id: variables.work_id, filter }],
        {
          pageParam: prevData.pageParam,
          pages: prevData.pages.map((page, index) => {
            if (!data.insert_comments_one) return page;
            if (index === 0) {
              return {
                comments: [data.insert_comments_one, ...page.comments],
              };
            }

            return page;
          }),
        }
      );
    },
  });

  return {
    insertEpisodeComment,
    insertWorkComment,
  };
};
