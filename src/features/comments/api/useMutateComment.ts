import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useCallback } from "react";
import {
  episodeCommentMutateDocument,
  workCommentMutateDocument,
} from "src/documents/comments";
import {
  InfiniteCommentEpisode,
  InfiniteCommentWork,
} from "src/features/comments/types";
import {
  MutateEpisodeCommentMutation,
  MutateEpisodeCommentMutationVariables,
  MutateWorkCommentMutation,
  MutateWorkCommentMutationVariables,
} from "src/gql/graphql";
import { Error } from "src/libs/error";

import { client } from "src/libs/graphqlClient";
import { useUserState } from "src/store/user/userState";

type QueryKey = ["comments", Record<string, unknown>];

export const useMutateComment = (id: number | string) => {
  const user = useUserState((state) => {
    return state.user;
  });
  const query = useRouter();
  const order = query.query.order === "popular" ? "popular" : "new";
  const queryClient = useQueryClient();

  const resetQuery = useCallback(
    (queryKey: QueryKey) => {
      queryClient.invalidateQueries({
        queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: ["replies"],
      });
    },

    [queryClient]
  );

  const insertEpisodeComment = useMutation<
    MutateEpisodeCommentMutation,
    Error,
    MutateEpisodeCommentMutationVariables
  >({
    mutationKey: [
      "comments",
      {
        episode_id: id,
        order,
      },
    ],
    mutationFn: (object) =>
      client.request(episodeCommentMutateDocument, object),
    onSuccess: (data, variables) => {
      if (variables.reply_to) {
        resetQuery(["comments", { episode_id: variables.episode_id, order }]);

        return;
      }

      const prevData = queryClient.getQueryData<InfiniteCommentEpisode>([
        "comments",
        { episode_id: variables.episode_id, order },
      ]);

      const { insert_comments_one } = data;

      if (!prevData || !insert_comments_one || !user) return;

      const createdDate = new Date(insert_comments_one.created_at);
      createdDate.setTime(createdDate.getTime() + 500);

      queryClient.setQueryData<InfiniteCommentEpisode>(
        ["comments", { episode_id: variables.episode_id, order }],
        {
          pageParams: prevData.pageParams.map((pageParam, i) => {
            if (i === 0) {
              return {
                ...pageParam,
                cursor: createdDate.toISOString(),
              };
            }

            return pageParam;
          }),

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
  const insertWorkComment = useMutation<
    MutateWorkCommentMutation,
    Error,
    MutateWorkCommentMutationVariables
  >({
    mutationKey: [
      "comments",
      {
        work_id: id,
        order,
      },
    ],
    mutationFn: (object) => client.request(workCommentMutateDocument, object),
    onSuccess: (data, variables) => {
      if (variables.reply_to) {
        resetQuery(["comments", { work_id: variables.work_id, order }]);

        return;
      }

      const prevData = queryClient.getQueryData<InfiniteCommentWork>([
        "comments",
        { work_id: variables.work_id, order },
      ]);

      const { insert_comments_one } = data;

      if (!prevData || !insert_comments_one || !user) return;

      const createdDate = new Date(insert_comments_one.created_at);
      createdDate.setTime(createdDate.getTime() + 500);

      queryClient.setQueryData<InfiniteCommentWork>(
        ["comments", { work_id: variables.work_id, order }],
        {
          pageParams: prevData.pageParams.map((pageParam, i) => {
            if (i === 0) {
              return {
                ...pageParam,
                cursor: createdDate.toISOString(),
              };
            }

            return pageParam;
          }),
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

  return {
    insertEpisodeComment,
    insertWorkComment,
  };
};
