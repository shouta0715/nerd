import { graphql } from "msw";
import { mswTrendsData } from "src/features/trends/mocks/fixtrue";
import { GetTrendsQuery, GetTrendsQueryVariables } from "src/gql/graphql";

export const mswTrendsHandler = (delay?: number, status?: number) => {
  if (status) {
    return graphql.query("GetTrend", (_, res, ctx) => {
      return res(ctx.delay(delay), ctx.status(status));
    });
  }

  return graphql.query<GetTrendsQuery, GetTrendsQueryVariables>(
    "GetTrend",
    (req, res, ctx) => {
      return delay
        ? res(ctx.delay(delay), ctx.data(mswTrendsData(req.variables)))
        : res(ctx.data(mswTrendsData(req.variables)));
    }
  );
};
