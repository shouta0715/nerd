import { gql } from "graphql-request";

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
