import { graphql } from "src/gql/gql";

export const requestDocument = graphql(`
  mutation InsertRequest($object: request_works_insert_input!) {
    insert_request_works_one(object: $object) {
      id
    }
  }
`);
