import { graphql } from "msw";
import {
  episodeCommentData,
  episodeCommentDataOrderByLike,
  episodeMutateData,
  replyData,
  workCommentData,
  workCommentDataOrderByLike,
  workMutateData,
} from "src/features/comments/mocks/fixture";
import {
  GetRepliesQuery,
  MutateEpisodeCommentMutation,
  MutateEpisodeCommentMutationVariables,
  MutateWorkCommentMutation,
  MutateWorkCommentMutationVariables,
} from "src/gql/graphql";

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

export const handleReplyEpisodeComment = (status?: number) => {
  return graphql.query<GetRepliesQuery>("GetReplies", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(replyData));
  });
};

export const handleLatestEpisodeComment = (status?: number) => {
  return graphql.query("GetLatestEpisodeComment", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(episodeCommentData));
  });
};

export const handleLatestWorkComment = (status?: number) => {
  return graphql.query("GetLatestWorkComment", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(workCommentData));
  });
};

export const mutateEpisodeComment = (status?: number) => {
  return graphql.mutation<
    MutateEpisodeCommentMutation,
    MutateEpisodeCommentMutationVariables
  >("MutateEpisodeComment", (req, res, ctx) => {
    if (status) {
      return res(ctx.delay(3000), ctx.status(status));
    }

    return res(ctx.delay(5000), ctx.data(episodeMutateData(req.variables)));
  });
};

export const mutateWorkComment = (status?: number) => {
  return graphql.mutation<
    MutateWorkCommentMutation,
    MutateWorkCommentMutationVariables
  >("MutateWorkComment", (req, res, ctx) => {
    if (status) {
      return res(ctx.delay(3000), ctx.status(status));
    }

    return res(ctx.delay(5000), ctx.data(workMutateData(req.variables)));
  });
};

export const handlers = [
  handleEpisodeComment(),
  handleEpisodeCommentByLikes(),
  handleWorkComment(),
  handleWorkCommentByLikes(),
  handleReplyEpisodeComment(),
  handleLatestEpisodeComment(),
  handleLatestWorkComment(),
  mutateEpisodeComment(),
  mutateWorkComment(),
];
