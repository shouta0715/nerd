import { gql } from "graphql-request";

export const INSERT_REQUEST = gql`
  mutation InsertRequest($object: request_works_insert_input!) {
    insert_request_works_one(object: $object) {
      ...RequestFragment
    }
  }
`;

export const GET_REQUESTS = gql`
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
`;

export const GET_REQUEST_BY_STATUS = gql`
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
`;
