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
        id
      }
    }
  }
`;

export const GET_FINISH_COMMENTS = gql`
  query GetFinishComments(
    $episode_id: uuid!
    $cursor: timestamptz
    $limit: Int!
  ) {
    finish_comments(
      where: {
        episode_id: { _eq: $episode_id }
        created_at: { _lt: $cursor }
        reply_to: { _is_null: true }
      }
      order_by: { created_at: desc }
      limit: $limit
    ) {
      content
      work_id
      user_id
      id
      episode_id
      created_at
      commenter_name
      user {
        anonymous
        user_name
        id
      }
      finish_comments_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export const GET_REPLY = gql`
  query GetReply($reply_to: uuid!, $cursor: timestamptz, $limit: Int!) {
    finish_comments(
      where: { reply_to: { _eq: $reply_to }, created_at: { _gt: $cursor } }
      order_by: { created_at: asc }
      limit: $limit
    ) {
      content
      user_id
      id
      created_at
      commenter_name
      reply_to
      user {
        anonymous
        user_name
        id
      }
    }
  }
`;
