import { gql } from "graphql-request";

export const GET_COMMENTS = gql`
  query GetComments($post_id: uuid!) {
    comments(where: { post_id: { _eq: $post_id } }) {
      user_id
      spoiler
      created_at
      content
      id
      post_id
    }
  }
`;

export const SUBSCRIPTION_COMMENTS = gql`
  subscription SubscriptionComments($post_id: uuid!) {
    comments(where: { post_id: { _eq: $post_id } }) {
      user_id
      spoiler
      post_id
      id
      content
      created_at
    }
  }
`;
