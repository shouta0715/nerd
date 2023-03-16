import { gql } from "graphql-request";

export const INSERT_CHAT = gql`
  mutation InsertChat($object: chats_insert_input!) {
    insert_chats_one(object: $object) {
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

export const GET_CHATS = gql`
  query GetChats(
    $episode_id: uuid!
    $get_limit: Int!
    $_lt: Int!
    $_gte: Int!
  ) {
    chats_by_episode_id(
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

export const GET_COMMENTS = gql`
  query GetComments($episode_id: uuid!, $cursor: timestamptz, $limit: Int!) {
    comments(
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
      replies_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

export const GET_REPLIES = gql`
  query GetReplies(
    $original_comment_id: uuid!
    $cursor_reply_to: uuid
    $cursor_created_at: timestamptz
    $reply_limit: Int!
  ) {
    replies(
      args: {
        original_comment_id: $original_comment_id
        cursor_reply_to: $cursor_reply_to
        cursor_created_at: $cursor_created_at
        reply_limit: $reply_limit
      }
    ) {
      content
      work_id
      user_id
      id
      episode_id
      created_at
      commenter_name
      replied_to_commenter_name
      user {
        anonymous
        user_name
        id
      }
    }
  }
`;
