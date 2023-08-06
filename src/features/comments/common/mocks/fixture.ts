import {
  GetCommentsEpisodeQuery,
  GetCommentsWorkQuery,
  GetRepliesQuery,
  MutateEpisodeCommentMutation,
  MutateEpisodeCommentMutationVariables,
  MutateWorkCommentMutation,
  MutateWorkCommentMutationVariables,
} from "src/gql/graphql";
import { genRandomId } from "src/utils/client/genRandomId";

export const genMockData = (
  orderbyLike = false,
  work = false,
  length = 10
): GetCommentsEpisodeQuery["comments"] => {
  const data = Array.from({ length }).map((_) => {
    return {
      created_at: new Date().toISOString(),
      id: genRandomId(),
      content: genRandomId(),
      user_id: "1",
      episode_id: work ? undefined : "1",
      work_id: work ? 1 : undefined,
      reply_count: Math.floor(Math.random() * 100),
      commenter_name: genRandomId(),
      likes_aggregate: {
        aggregate: {
          count: Math.floor(Math.random() * 100),
        },
      },
      user: {
        id: genRandomId(),
        anonymous: false,
        user_name: genRandomId(),
      },
    };
  });

  if (orderbyLike) {
    return data.sort((a, b) => {
      return (
        b.likes_aggregate.aggregate.count - a.likes_aggregate.aggregate.count
      );
    });
  }

  return data;
};

const getReplyMockData = (): GetRepliesQuery["replies"] => {
  return [
    {
      id: genRandomId(),
      content: Math.random().toString(),
      created_at: new Date().toISOString(),
      user_id: "1",
      episode_id: "1",
      work_id: null,
      reply_to: "1",
      commenter_name: "test",
      likes_aggregate: {
        aggregate: {
          count: 0,
        },
      },
      user: {
        id: "1",
        anonymous: false,
      },
    },
  ];
};

export const episodeCommentData: GetCommentsEpisodeQuery = {
  comments: genMockData(false, false, Math.floor(200)),
};

export const episodeCommentDataOrderByLike: GetCommentsEpisodeQuery = {
  comments: genMockData(true),
};

export const workCommentData: GetCommentsWorkQuery = {
  comments: genMockData(false, false, Math.floor(200)),
};

export const workCommentDataOrderByLike: GetCommentsWorkQuery = {
  comments: genMockData(true),
};

export const replyData: GetRepliesQuery = {
  replies: getReplyMockData(),
};

export const episodeMutateData = (
  variables: MutateEpisodeCommentMutationVariables
): MutateEpisodeCommentMutation => {
  return {
    insert_comments_one: {
      __typename: "comments",
      id: genRandomId(),
      created_at: new Date().toISOString(),
      likes_aggregate: {
        aggregate: {
          count: 0,
        },
      },
      ...variables,
    },
  };
};

export const workMutateData = (
  variables: MutateWorkCommentMutationVariables
): MutateWorkCommentMutation => {
  return {
    insert_comments_one: {
      __typename: "comments",
      id: genRandomId(),
      created_at: new Date().toISOString(),
      likes_aggregate: {
        aggregate: {
          count: 0,
        },
      },
      ...variables,
    },
  };
};
