import { gql } from "graphql-request";

export const GET_USER = gql`
  query GetUser($id: String!) {
    users_by_pk(id: $id) {
      id
      anonymous
      photo_url
      user_name
    }
  }
`;
