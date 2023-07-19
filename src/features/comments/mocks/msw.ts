import { graphql } from "msw";
import {
  episodeCommentData,
  episodeCommentDataOrderByLike,
  workCommentData,
  workCommentDataOrderByLike,
} from "src/features/comments/mocks/fixture";

export const handleEpisodeComment = (status?: number) => {
  return graphql.query("GetCommentsEpisode", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(episodeCommentData));
  });
};

export const handleEpisodeCommentByLikes = (status?: number) => {
  return graphql.query("GetCommentsEpisodeByLikes", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(episodeCommentDataOrderByLike));
  });
};

export const handleWorkComment = (status?: number) => {
  return graphql.query("GetCommentsWork", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(workCommentData));
  });
};

export const handleWorkCommentByLikes = (status?: number) => {
  return graphql.query("GetCommentsWorkByLikes", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(workCommentDataOrderByLike));
  });
};

export const handlers = [
  handleEpisodeComment(),
  handleEpisodeCommentByLikes(),
  handleWorkComment(),
  handleWorkCommentByLikes(),
];
