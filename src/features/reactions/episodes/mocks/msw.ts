import { graphql } from "msw";
import { mswInfiniteReactionsEpisodeData } from "./fixture";
import {
  GetReactionsEpisodeQuery,
  GetReactionsEpisodeQueryVariables,
} from "src/gql/graphql";

export const mswInfiniteReactionsEpisodeHandlers = (status?: number) => {
  if (status) {
    return graphql.query("GetReactionsEpisode", (_, res, ctx) => {
      return res(ctx.status(status));
    });
  }

  return graphql.query<
    GetReactionsEpisodeQuery,
    GetReactionsEpisodeQueryVariables
  >("GetReactionsEpisode", (req, res, ctx) => {
    return res(ctx.data(mswInfiniteReactionsEpisodeData(req.variables)));
  });
};
