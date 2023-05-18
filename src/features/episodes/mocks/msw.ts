import { graphql } from "msw";
import { episodeData } from "src/features/episodes/mocks/fixture";

export const handleEpisode = (status?: number) => {
  return graphql.query("GetEpisode", (_, res, ctx) => {
    if (status) {
      return res(ctx.status(status));
    }

    return res(ctx.data(episodeData));
  });
};
