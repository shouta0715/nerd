import { gql } from "graphql-request";

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
      reply_count
    }
  }
`;

export const GET_REPLIES = gql`
  query GetReplies(
    $_reply_to: uuid!
    $cursor: timestamptz!
    $reply_limit: Int!
  ) {
    replies(
      args: {
        _reply_to: $_reply_to
        cursor: $cursor
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
      reply_to
      replied_to_commenter_name
      user {
        anonymous
        user_name
        id
      }
    }
  }
`;
