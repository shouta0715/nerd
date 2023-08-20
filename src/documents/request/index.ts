import { graphql } from "src/gql/gql";

export const requestInsertDocument = graphql(`
  mutation InsertRequest($object: request_works_insert_input!) {
    insert_request_works_one(object: $object) {
      ...RequestFragment
    }
  }
`);

export const requestGetDocument = graphql(`
  query GetRequests($user_id: String!, $limit: Int!, $offset: Int!) {
    request_works(
      where: { user_id: { _eq: $user_id } }
      limit: $limit
      offset: $offset
      order_by: { created_at: desc }
    ) {
      ...RequestFragment
    }
    request_works_aggregate(where: { user_id: { _eq: $user_id } }) {
      aggregate {
        count
      }
    }
  }
`);

export const requestGetByStatusDocument = graphql(`
  query GetRequestByStatus(
    $status: status_enum!
    $user_id: String!
    $limit: Int!
    $offset: Int!
  ) {
    request_works(
      where: { user_id: { _eq: $user_id }, approval_status: { _eq: $status } }
      order_by: { created_at: desc }
      limit: $limit
      offset: $offset
    ) {
      ...RequestFragment
    }
    request_works_aggregate(
      where: { user_id: { _eq: $user_id }, approval_status: { _eq: $status } }
    ) {
      aggregate {
        count
      }
    }
  }
`);
