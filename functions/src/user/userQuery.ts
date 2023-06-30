import {gql} from "graphql-request";

const userInfo = gql`
  fragment UserInfo on users {
    id
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
    $isAnonymous: Boolean
  ) {
    insert_users_one(
      object: {
        id: $id
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
