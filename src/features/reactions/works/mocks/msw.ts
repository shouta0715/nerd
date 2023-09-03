import { graphql } from "msw";
import { mswInfiniteReactionsWorkData } from "src/features/reactions/works/mocks/fixture";
import {
  GetReactionsWorkQuery,
  GetReactionsWorkQueryVariables,
} from "src/gql/graphql";

export const mswInfiniteReactionsWorkHandlers = (status?: number) => {
  if (status) {
    return graphql.query("GetReactionsWork", (_, res, ctx) => {
      return res(ctx.status(status));
    });
  }

  return graphql.query<GetReactionsWorkQuery, GetReactionsWorkQueryVariables>(
    "GetReactionsWork",
    (req, res, ctx) => {
      return res(ctx.data(mswInfiniteReactionsWorkData(req.variables)));
    }
  );
};
