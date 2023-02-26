import { gql } from "graphql-request";

export const GET_CHAT_COMMENTS = gql`
  query GetChatComments($episode_id: uuid!) {
    chat_comments(
      where: { _and: { episode_id: { _eq: $episode_id }, time: { _gte: 0 } } }
      order_by: { time: asc, created_at: asc }
    ) {
      content
      anonymous
      created_at
      episode_id
      id
      time
      commenter_name
      user {
        anonymous
        user_name
        photo_url
        id
      }
    }
  }
`;

export const INSERT_CHAT_COMMENT = gql`
  mutation InsertChatComment($object: chat_comments_insert_input!) {
    insert_chat_comments_one(object: $object) {
      content
      work_id
      user_id
      time
      id
      episode_id
      created_at
      commenter_name
      user {
        anonymous
        user_name
        photo_url
        id
      }
    }
  }
`;

export const SUBSCRIPTION_CHAT_COMMENT = gql`
  subscription SubscriptionChatComments($episode_id: uuid!) {
    chat_comments(where: { episode_id: { _eq: $episode_id } }) {
      content
      work_id
      user_id
      time
      id
      episode_id
      created_at
      commenter_name
      user {
        anonymous
        user_name
        photo_url
        id
      }
    }
  }
`;
