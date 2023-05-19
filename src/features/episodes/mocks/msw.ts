import { graphql } from "msw";
import { handleEpisodeChat } from "src/features/chats/mocks/msw";
import { handlers as commentHandlers } from "src/features/comments/mocks/msw";
import { episodeData } from "src/features/episodes/mocks/fixture";

export const handleEpisode = (status?: number) => {
  return graphql.query("GetEpisode", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(episodeData));
  });
};

export const handlers = [
  handleEpisode(),
  handleEpisodeChat(),
  ...commentHandlers,
];
