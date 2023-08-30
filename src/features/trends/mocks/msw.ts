import { graphql } from "msw";
import { mswTrendingChatsEpisodeData } from "src/features/trends/mocks/fixtrue";
import { GetTrendQuery, GetTrendQueryVariables } from "src/gql/graphql";

export const trendingChatsEpisodesHandler = (
  delay?: number,
  status?: number
) => {
  if (status) {
    return graphql.query("GetTrendingChatsEpisodes", (_, res, ctx) => {
      return res(ctx.delay(delay), ctx.status(status));
    });
  }

  return graphql.query<GetTrendQuery, GetTrendQueryVariables>(
    "GetTrendingChatsEpisodes",
    (req, res, ctx) => {
      return delay
        ? res(
            ctx.delay(delay),
            ctx.data(mswTrendingChatsEpisodeData(req.variables))
          )
        : res(ctx.data(mswTrendingChatsEpisodeData(req.variables)));
    }
  );
};
