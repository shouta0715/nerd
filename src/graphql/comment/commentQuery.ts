import { gql } from "graphql-request";

export const INSERT_CHAT_COMMENT = gql`
  mutation InsertChatComment($object: chat_comments_insert_input!) {
    insert_chat_comments_one(object: $object) {
      content
      work_id
      user_id
      comment_time
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
      comment_time
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

export const GET_CHAT_COMMENTS = gql`
  query GetChatComments(
    $episode_id: uuid!
    $get_limit: Int!
    $_lt: Int!
    $_gte: Int!
  ) {
    chat_comments_by_episode_id(
      args: {
        _episode_id: $episode_id
        get_limit: $get_limit
        _gte: $_gte
        _lt: $_lt
      }
      order_by: { comment_time: asc }
    ) {
      content
      work_id
      user_id
      comment_time
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
