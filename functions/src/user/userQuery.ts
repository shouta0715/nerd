import {gql} from "graphql-request";

const userInfo = gql`
  fragment UserInfo on users {
    id
    photo_url
    user_name
  }
`;

export const GET_USER = gql`
  query GetUser($id: String!) {
    users_by_pk(id: $id) {
      ...UserInfo
    }
  }
  ${userInfo}
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $id: String!
    $user_name: String
    $photo_url: String
    $isAnonymous: Boolean
  ) {
    insert_users_one(
      object: {
        id: $id
        user_name: $user_name
        photo_url: $photo_url
        anonymous: $isAnonymous
      }
      on_conflict: { constraint: users_pkey }
    ) {
      ...UserInfo
    }
  }
  ${userInfo}
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    delete_users_by_pk(id: $id) {
      id
    }
  }
`;
