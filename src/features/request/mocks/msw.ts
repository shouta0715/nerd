import { graphql } from "msw";
import { requestData } from "src/features/request/mocks/fixture";
import {
  InsertRequestMutation,
  InsertRequestMutationVariables,
} from "src/gql/graphql";

export const handleRequest = (status?: number) => {
  return graphql.mutation<
    InsertRequestMutation,
    InsertRequestMutationVariables
  >("InsertRequest", (_, res, ctx) => {
    if (status) {
      return res(ctx.delay(5000), ctx.status(status));
    }

    return res(ctx.data(requestData));
  });
};
