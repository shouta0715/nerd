import { gql } from "graphql-request";

export const INSERT_REACTIONS = gql`
  mutation insertReactions($objects: [reactions_insert_input!]!) {
    insert_reactions(objects: $objects) {
      returning {
        id
      }
    }
  }
`;
