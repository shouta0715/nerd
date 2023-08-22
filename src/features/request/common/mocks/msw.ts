import { graphql } from "msw";
import {
  deleteRequestData,
  requestData,
} from "src/features/request/common/mocks/fixture";
import {
  DeleteRequestMutation,
  DeleteRequestMutationVariables,
  InsertRequestMutation,
  InsertRequestMutationVariables,
} from "src/gql/graphql";

export const handleRequest = (status?: number, delay?: number | "infinite") => {
  return graphql.mutation<
    InsertRequestMutation,
    InsertRequestMutationVariables
  >("InsertRequest", (_, res, ctx) => {
    if (status) {
      return res(ctx.delay(delay), ctx.status(status));
    }

    return status
      ? res(ctx.delay(delay), ctx.status(status))
      : res(ctx.data(requestData));
  });
};

export const deleteRequestHandler = (
  status?: number,
  delay?: number | "infinite"
) => {
  return graphql.mutation<
    DeleteRequestMutation,
    DeleteRequestMutationVariables
  >("DeleteRequest", (_, res, ctx) => {
    if (status) {
      return res(ctx.delay(delay), ctx.status(status));
    }

    return status
      ? res(ctx.delay(delay), ctx.status(status))
      : res(ctx.data(deleteRequestData));
  });
};

export const requestMutateHandlers = (
  delay?: number | "infinite",
  status?: number
) => [handleRequest(status, delay), deleteRequestHandler(status, delay)];
