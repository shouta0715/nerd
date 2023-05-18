import { GetCommentsEpisodeQuery } from "src/graphql/comment/commentQuery.generated";

const genMockData = (
  orderbyLike = false,
  length = 10
): GetCommentsEpisodeQuery["comments"] => {
  const data = Array.from({ length }).map((_, index) => {
    return {
      created_at: "2021-08-01T00:00:00.000Z",
      id: index.toString(),
      content: "test",
      user_id: "1",
      episode_id: "1",
      reply_count: 0,
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

export const episodeCommentData: GetCommentsEpisodeQuery = {
  comments: genMockData(),
};

export const episodeCommentDataOrderByLike: GetCommentsEpisodeQuery = {
  comments: genMockData(true),
};
