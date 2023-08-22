import { graphql } from "msw";
import { mswRequestHistory } from "src/features/request/history/mocks/fixture";
import {
  GetRequestByStatusQuery,
  GetRequestByStatusQueryVariables,
  GetRequestsQuery,
  GetRequestsQueryVariables,
} from "src/gql/graphql";

export const requestQueryHandler = (
  status?: number,
  delay?: number | "infinite"
) => {
  if (status) {
    return graphql.query<GetRequestsQuery, GetRequestsQueryVariables>(
      "GetRequests",
      (_, res, ctx) => {
        return res(ctx.delay(delay), ctx.status(status));
      }
    );
  }

  return graphql.query<GetRequestsQuery, GetRequestsQueryVariables>(
    "GetRequests",
    (req, res, ctx) => {
      return delay
        ? res(ctx.delay(delay), ctx.data(mswRequestHistory(req.variables)))
        : res(ctx.data(mswRequestHistory(req.variables)));
    }
  );
};

export const requestByStatusQueryHandler = (
  status?: number,
  delay?: number | "infinite"
) => {
  if (status) {
    return graphql.query<
      GetRequestByStatusQuery,
      GetRequestByStatusQueryVariables
    >("GetRequestByStatus", (_, res, ctx) => {
      return res(ctx.delay(delay), ctx.status(status));
    });
  }

  return graphql.query<
    GetRequestByStatusQuery,
    GetRequestByStatusQueryVariables
  >("GetRequestByStatus", (req, res, ctx) => {
    return delay
      ? res(ctx.delay(delay), ctx.data(mswRequestHistory(req.variables)))
      : res(ctx.data(mswRequestHistory(req.variables)));
  });
};

export const requestHistoryHandlers = (
  delay?: number | "infinite",
  status?: number
) => [
  requestQueryHandler(status, delay),
  requestByStatusQueryHandler(status, delay),
];
