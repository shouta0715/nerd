import { graphql } from "src/gql";

export const insertReactionsDocument = graphql(`
  mutation InsertReactions($objects: [reactions_insert_input!]!) {
    insert_reactions(objects: $objects) {
      returning {
        id
      }
    }
  }
`);
