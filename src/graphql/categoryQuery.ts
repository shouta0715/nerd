import { gql } from "graphql-request";

export const GET_CATEGORY = gql`
  query GetCategory {
    category {
      key
      value
    }
  }
`;
