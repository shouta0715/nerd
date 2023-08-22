import { graphql } from "msw";
import { mswRequestHistory } from "src/features/request/history/mocks/fixture";
import {
  GetRequestByStatusQuery,
  GetRequestByStatusQueryVariables,
  GetRequestsQuery,
  GetRequestsQueryVariables,
} from "src/gql/graphql";

export const requestQueryHandler = (status?: number) => {
  if (status) {
    return graphql.query<GetRequestsQuery, GetRequestsQueryVariables>(
      "GetRequests",
      (req, res, ctx) => {
        return res(ctx.data(mswRequestHistory(req.variables)));
      }
    );
  }

  return graphql.query<GetRequestsQuery, GetRequestsQueryVariables>(
    "GetRequests",
    (req, res, ctx) => {
      return res(ctx.data(mswRequestHistory(req.variables)));
    }
  );
};

export const requestByStatusQueryHandler = (status?: number) => {
  if (status) {
    return graphql.query<
      GetRequestByStatusQuery,
      GetRequestByStatusQueryVariables
    >("GetRequestByStatus", (req, res, ctx) => {
      return res(ctx.data(mswRequestHistory(req.variables)));
    });
  }

  return graphql.query<
    GetRequestByStatusQuery,
    GetRequestByStatusQueryVariables
  >("GetRequestByStatus", (req, res, ctx) => {
    return res(ctx.data(mswRequestHistory(req.variables)));
  });
};

export const requestHistoryHandlers = (status?: number) => [
  requestQueryHandler(status),
  requestByStatusQueryHandler(status),
];
