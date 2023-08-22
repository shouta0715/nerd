import { InsertRequestMutation, Status_Enum } from "src/gql/graphql";

export const requestData: InsertRequestMutation = {
  insert_request_works_one: {
    id: 1,
    approval_status: Status_Enum.Pending,
    detail: "detail",
    official_url: "https://example.com",
    user_id: "user_id",
    work_title: "work_title",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
};
