import { gql } from "graphql-request";

export const RequestFragment = gql`
  fragment RequestFragment on request_works {
    id
    approval_status
    detail
    official_url
    user_id
    work_title
    created_at
    updated_at
  }
`;
