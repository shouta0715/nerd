import { graphql } from "src/gql/gql";

export const replyDocument = graphql(`
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
        id
      }
      is_like
      likes_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`);
