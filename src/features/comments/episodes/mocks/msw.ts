import { graphql } from "msw";
import { generateInfiniteComments } from "src/features/comments/episodes/mocks/fixture";
import {
  GetCommentsEpisodeByLikesQuery,
  GetCommentsEpisodeByLikesQueryVariables,
  GetCommentsEpisodeQuery,
  GetCommentsEpisodeQueryVariables,
} from "src/gql/graphql";

export const mswInfiniteComments = (status?: number, delay = 500) => {
  return graphql.query<
    GetCommentsEpisodeQuery,
    GetCommentsEpisodeQueryVariables
  >("GetCommentsEpisode", (req, res, ctx) => {
    if (status) {
      return res(ctx.delay(delay), ctx.status(status));
    }

    return res(ctx.data(generateInfiniteComments("new", req.variables)));
  });
};

export const mswInfiniteCommentsByLikes = (status?: number, delay = 500) => {
  return graphql.query<
    GetCommentsEpisodeByLikesQuery,
    GetCommentsEpisodeByLikesQueryVariables
  >("GetCommentsEpisodeByLikes", (req, res, ctx) => {
    if (status) {
      return res(ctx.delay(delay), ctx.status(status));
    }

    return res(ctx.data(generateInfiniteComments("popular", req.variables)));
  });
};

export const mswInfiniteCommentsHandlers = [
  mswInfiniteComments(),
  mswInfiniteCommentsByLikes(),
];
