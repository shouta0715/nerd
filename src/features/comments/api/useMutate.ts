import { useQueryClient } from "@tanstack/react-query";
import { CommentsFilter } from "src/features/comments/types";
import {
  GetCommentsEpisodeQuery,
  useMutateEpisodeCommentMutation,
  useMutateWorkCommentMutation,
} from "src/graphql/comment/commentQuery.generated";
import { client } from "src/libs/graphqlClient";
import { useUserState } from "src/store/user/userState";
import { genRandomId } from "src/utils/genRandomId";

type InfiniteCommentEpisode = {
  pageParam: [];
  pages: GetCommentsEpisodeQuery[];
};

export const useMutateComment = (filter: CommentsFilter) => {
  const user = useUserState((state) => state.user);
  const queryClient = useQueryClient();
  const insertEpisodeComment = useMutateEpisodeCommentMutation(client, {
    onMutate: async (variables) => {
      const {
        episode_id,
        replied_to_commenter_name,
        reply_to,
        content,
        commenter_name,
      } = variables;

      const fakeId = genRandomId();
      if (reply_to) {
        return { fakeId, reply: true, episode_id };
      }

      const prevData = queryClient.getQueryData<InfiniteCommentEpisode>([
        "comments",
        { episode_id, filter },
      ]);

      if (prevData) {
        // pagesの[0]の一番上に追加する
        queryClient.setQueryData<InfiniteCommentEpisode>(
          ["comments", { episode_id, filter }],
          {
            pageParam: prevData.pageParam,
            pages: prevData.pages.map((page, index) => {
              if (index === 0) {
                return {
                  comments: [
                    {
                      id: fakeId,
                      content,
                      commenter_name,
                      created_at: new Date().toString(),
                      episode_id,
                      replied_to_commenter_name,
                      reply_to,
                      reply_count: 0,
                      user_id: user?.id ?? "",
                      user: {
                        id: user?.id ?? "",
                        user_name: user?.user_name ?? "匿名",
                        anonymous: user?.anonymous ?? false,
                      },
                      likes_aggregate: {
                        aggregate: {
                          count: 0,
                        },
                      },
                    },
                    ...page.comments,
                  ],
                };
              }

              return page;
            }),
          }
        );

        return { fakeId };
      }

      return { fakeId };
    },
    onSuccess: (data, variables, context) => {
      if (context?.reply) {
        queryClient.invalidateQueries({
          queryKey: ["replies"],
        });
        queryClient.invalidateQueries({
          queryKey: ["comments", { episode_id: context.episode_id }],
        });
      }
      const prevData = queryClient.getQueryData<InfiniteCommentEpisode>([
        "comments",
        { episode_id: variables.episode_id },
      ]);

      if (prevData) {
        // idを更新する
        queryClient.setQueryData<InfiniteCommentEpisode>(
          ["comments", { episode_id: variables.episode_id, filter }],
          {
            pageParam: prevData.pageParam,
            pages: prevData.pages.map((page, index) => {
              if (index === 0) {
                return {
                  comments: page.comments.map((comment) => {
                    if (comment.id === context?.fakeId) {
                      return {
                        ...comment,
                        id: data.insert_comments_one?.id,
                      };
                    }

                    return comment;
                  }),
                };
              }

              return page;
            }),
          }
        );
      }
    },
  });
  const insertWorkComment = useMutateWorkCommentMutation(client, {
    onMutate: async (variables) => {
      const {
        work_id,
        replied_to_commenter_name,
        reply_to,
        content,
        commenter_name,
      } = variables;

      const fakeId = genRandomId();
      if (reply_to) {
        return { fakeId, reply: true, work_id };
      }

      const prevData = queryClient.getQueryData<InfiniteCommentEpisode>([
        "comments",
        { work_id, filter },
      ]);

      if (prevData) {
        // pagesの[0]の一番上に追加する
        queryClient.setQueryData<InfiniteCommentEpisode>(
          ["comments", { work_id, filter }],
          {
            pageParam: prevData.pageParam,
            pages: prevData.pages.map((page, index) => {
              if (index === 0) {
                return {
                  comments: [
                    {
                      id: fakeId,
                      content,
                      commenter_name,
                      created_at: new Date().toString(),
                      work_id,
                      replied_to_commenter_name,
                      reply_to,
                      reply_count: 0,
                      user_id: user?.id ?? "",
                      user: {
                        id: user?.id ?? "",
                        user_name: user?.user_name ?? "匿名",
                        anonymous: user?.anonymous ?? false,
                      },
                      likes_aggregate: {
                        aggregate: {
                          count: 0,
                        },
                      },
                    },
                    ...page.comments,
                  ],
                };
              }

              return page;
            }),
          }
        );

        return { fakeId };
      }

      return { fakeId };
    },
    onSuccess: (data, variables, context) => {
      if (context?.reply) {
        queryClient.invalidateQueries({
          queryKey: ["replies"],
        });
        queryClient.invalidateQueries({
          queryKey: ["comments", { work_id: context.work_id }],
        });
      }
      const prevData = queryClient.getQueryData<InfiniteCommentEpisode>([
        "comments",
        { work_id: variables.work_id, filter },
      ]);

      if (prevData) {
        // idを更新する
        queryClient.setQueryData<InfiniteCommentEpisode>(
          ["comments", { work_id: variables.work_id, filter }],
          {
            pageParam: prevData.pageParam,
            pages: prevData.pages.map((page, index) => {
              if (index === 0) {
                return {
                  comments: page.comments.map((comment) => {
                    if (comment.id === context?.fakeId) {
                      return {
                        ...comment,
                        id: data.insert_comments_one?.id,
                      };
                    }

                    return comment;
                  }),
                };
              }

              return page;
            }),
          }
        );
      }
    },
  });

  return {
    insertEpisodeComment,
    insertWorkComment,
  };
};
