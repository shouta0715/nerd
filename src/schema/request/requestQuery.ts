import { gql } from "graphql-request";

export const INSERT_REQUEST = gql`
  mutation InsertRequest($object: request_works_insert_input!) {
    insert_request_works_one(object: $object) {
      id
    }
  }
`;
