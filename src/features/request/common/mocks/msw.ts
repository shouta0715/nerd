import { graphql } from "msw";
import { requestData } from "src/features/request/common/mocks/fixture";
import {
  InsertRequestMutation,
  InsertRequestMutationVariables,
} from "src/gql/graphql";

export const handleRequest = (status?: number, delay = 0) => {
  return graphql.mutation<
    InsertRequestMutation,
    InsertRequestMutationVariables
  >("InsertRequest", (_, res, ctx) => {
    if (status) {
      return res(ctx.delay(delay), ctx.status(status));
    }

    return res(ctx.delay(delay), ctx.data(requestData));
  });
};
