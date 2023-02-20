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

export const CREATE_USER = gql`
  mutation createUser(
    $id: String!
    $anonymous: Boolean!
    $photo_url: String!
    $user_name: String!
  ) {
    insert_users_one(
      object: {
        anonymous: $anonymous
        photo_url: $photo_url
        id: $id
        user_name: $user_name
      }
    ) {
      id
    }
  }
`;
