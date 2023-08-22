import {
  GetRequestByStatusQuery,
  GetRequestByStatusQueryVariables,
  GetRequestsQuery,
  GetRequestsQueryVariables,
  Status_Enum,
} from "src/gql/graphql";

export const mswRequestHistory = ({
  offset,
  limit,
  user_id,
  ...rest
}: GetRequestByStatusQueryVariables | GetRequestsQueryVariables):
  | GetRequestsQuery
  | GetRequestByStatusQuery => {
  const hasStatus = "status" in rest;
  const status = hasStatus ? rest.status : undefined;

  const requests: GetRequestsQuery | GetRequestByStatusQuery = {
    request_works: Array.from({ length: limit }, (_, i) => ({
      id: i + offset,
      user_id: user_id ?? i + offset,
      approval_status: hasStatus
        ? rest.status
        : i / 2 === 0
        ? Status_Enum.Approved
        : Status_Enum.Pending,
      official_url: "https://www.google.com",
      detail: `detail${i + offset} ${status ?? ""}`,
      work_title: `title${i + offset} ${status ?? ""}`,
      created_at: new Date(
        new Date().setDate(new Date().getDate() - i - offset)
      ).toISOString(),
      updated_at: new Date().toISOString(),
    })),
    request_works_aggregate: {
      aggregate: {
        count: 32,
      },
    },
  };

  return requests;
};
