import {
  GetCommentsEpisodeQuery,
  GetCommentsWorkQuery,
  GetRepliesQuery,
} from "src/graphql/comment/commentQuery.generated";

const genMockData = (
  orderbyLike = false,
  work = false,
  length = 10
): GetCommentsEpisodeQuery["comments"] => {
  const data = Array.from({ length }).map((_, index) => {
    return {
      created_at: "2021-08-01T00:00:00.000Z",
      id: index.toString(),
      content: "test",
      user_id: "1",
      episode_id: work ? undefined : "1",
      work_id: work ? 1 : undefined,
      reply_count: 11,
      commenter_name: "test",
      likes_aggregate: {
        aggregate: {
          count: Math.floor(Math.random() * 100),
        },
      },
      user: {
        id: "1",
        anonymous: false,
        user_name: "test",
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
      id: "1",
      content: "test",
      created_at: "2021-08-01T00:00:00.000Z",
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
  comments: genMockData(),
};

export const episodeCommentDataOrderByLike: GetCommentsEpisodeQuery = {
  comments: genMockData(true),
};

export const workCommentData: GetCommentsWorkQuery = {
  comments: genMockData(),
};

export const workCommentDataOrderByLike: GetCommentsWorkQuery = {
  comments: genMockData(true),
};

export const replyData: GetRepliesQuery = {
  replies: getReplyMockData(),
};
