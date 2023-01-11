import { gql } from "graphql-request";

export const GET_COMMENTS = gql`
  query GetComments($post_id: uuid!) {
    comments(order_by: { time: asc }, where: { post_id: { _eq: $post_id } }) {
      user_id
      time
      spoiler
      post_id
      id
      created_at
      content
    }
  }
`;

export const SUBSCRIPTION_COMMENTS = gql`
  subscription SubscriptionComments($post_id: uuid!) {
    comments(
      order_by: { time: asc, created_at: asc }
      where: { post_id: { _eq: $post_id } }
    ) {
      user_id
      time
      spoiler
      post_id
      id
      created_at
      content
    }
  }
`;

export const INSERT_COMMENT = gql`
  mutation InsertComment($object: comments_insert_input!) {
    insert_comments_one(object: $object) {
      user_id
      time
      spoiler
      post_id
      id
      created_at
      content
    }
  }
`;
