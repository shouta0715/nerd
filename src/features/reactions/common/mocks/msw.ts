import { graphql } from "msw";
import { mswReactionsMutateData } from "src/features/reactions/common/mocks/fixture";
import {
  InsertReactionsMutation,
  InsertReactionsMutationVariables,
} from "src/gql/graphql";

export const mswInsertReactionsHandler = (status?: number) => {
  if (status) {
    return graphql.mutation("InsertReactions", (_, res, ctx) => {
      return res(ctx.status(status));
    });
  }

  return graphql.mutation<
    InsertReactionsMutation,
    InsertReactionsMutationVariables
  >("InsertReactions", (req, res, ctx) => {
    return res(ctx.data(mswReactionsMutateData(req.variables)));
  });
};
