import { gql } from "graphql-request";

export const GET_COMMENTS = gql`
  query GetComments($invite_id: uuid!) {
    comments(where: { invite_id: { _eq: $invite_id } }) {
      user_id
      updated_at
      time
      invite_id
      id
      created_at
      content
    }
  }
`;

export const INSERT_COMMENT = gql`
  mutation InsertComment($object: comments_insert_input!) {
    insert_comments_one(object: $object) {
      content
      updated_at
      user_id
      time
      invite_id
      id
      created_at
    }
  }
`;

export const SUBSCRIPTION_COMMENTS = gql`
  subscription SubscriptionComments($invite_id: uuid!) {
    comments(where: { invite_id: { _eq: $invite_id } }) {
      user_id
      updated_at
      time
      invite_id
      id

      created_at
      content
    }
  }
`;
