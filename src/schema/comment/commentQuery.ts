import { gql } from "graphql-request";

const _ = gql`
  fragment CommentFragment on comments {
    content
    work_id
    user_id
    id
    episode_id
    created_at
    commenter_name
    user {
      anonymous
      id
    }
    reply_count
    is_like
    likes_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const GET_COMMENTS_EPISODE = gql`
  query GetCommentsEpisode(
    $episode_id: uuid!
    $cursor: timestamptz
    $limit: Int!
    $order_by: [comments_order_by!]
  ) {
    comments(
      where: {
        episode_id: { _eq: $episode_id }
        created_at: { _lt: $cursor }
        reply_to: { _is_null: true }
      }
      order_by: $order_by
      limit: $limit
    ) {
      ...CommentFragment
    }
  }
`;

export const GET_COMMENTS_EPISODE_BY_LIKES = gql`
  query GetCommentsEpisodeByLikes(
    $episode_id: uuid!
    $cursor: timestamptz
    $likes_cursor: Int
    $limit: Int!
    $order_by: [comments_order_by!]
  ) {
    comments(
      where: {
        episode_id: { _eq: $episode_id }
        _and: {
          created_at: { _lt: $cursor }
          likes_aggregate: { count: { predicate: { _lte: $likes_cursor } } }
        }
        reply_to: { _is_null: true }
      }
      order_by: $order_by
      limit: $limit
    ) {
      ...CommentFragment
    }
  }
`;

export const GET_LATEST_EPISODE_COMMENT = gql`
  query GetLatestEpisodeComment(
    $episode_id: uuid!
    $cursor: timestamptz
    $limit: Int!
    $order_by: [comments_order_by!]
  ) {
    comments(
      where: {
        episode_id: { _eq: $episode_id }
        created_at: { _gt: $cursor }
        reply_to: { _is_null: true }
      }
      order_by: $order_by
      limit: $limit
    ) {
      ...CommentFragment
    }
  }
`;

export const GET_LATEST_WORK_COMMENT = gql`
  query GetLatestWorkComment(
    $work_id: Int!
    $cursor: timestamptz
    $limit: Int!
    $order_by: [comments_order_by!]
  ) {
    comments(
      where: {
        work_id: { _eq: $work_id }
        created_at: { _gt: $cursor }
        reply_to: { _is_null: true }
      }
      order_by: $order_by
      limit: $limit
    ) {
      ...CommentFragment
    }
  }
`;

export const GET_COMMENTS_WORK = gql`
  query GetCommentsWork(
    $work_id: Int!
    $cursor: timestamptz
    $limit: Int!
    $order_by: [comments_order_by!]
  ) {
    comments(
      where: {
        work_id: { _eq: $work_id }
        created_at: { _lt: $cursor }
        reply_to: { _is_null: true }
      }
      order_by: $order_by
      limit: $limit
    ) {
      ...CommentFragment
    }
  }
`;

export const GET_COMMENTS_WORK_BY_LIKES = gql`
  query GetCommentsWorkByLikes(
    $work_id: Int!
    $cursor: timestamptz
    $likes_cursor: Int
    $limit: Int!
    $order_by: [comments_order_by!]
  ) {
    comments(
      where: {
        work_id: { _eq: $work_id }
        _and: {
          created_at: { _lt: $cursor }
          likes_aggregate: { count: { predicate: { _lte: $likes_cursor } } }
        }
        reply_to: { _is_null: true }
      }
      order_by: $order_by
      limit: $limit
    ) {
      ...CommentFragment
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
`;

export const MUTATE_EPISODE_COMMENT = gql`
  mutation MutateEpisodeComment(
    $episode_id: uuid!
    $content: String!
    $reply_to: uuid
    $replied_to_commenter_name: String
    $commenter_name: String!
    $ip: String
  ) {
    insert_comments_one(
      object: {
        episode_id: $episode_id
        content: $content
        reply_to: $reply_to
        replied_to_commenter_name: $replied_to_commenter_name
        commenter_name: $commenter_name
        ip: $ip
      }
    ) {
      ...CommentFragment
    }
  }
`;

export const MUTATE_WORK_COMMENT = gql`
  mutation MutateWorkComment(
    $work_id: Int!
    $content: String!
    $reply_to: uuid
    $replied_to_commenter_name: String
    $commenter_name: String!
    $ip: String
  ) {
    insert_comments_one(
      object: {
        work_id: $work_id
        content: $content
        reply_to: $reply_to
        replied_to_commenter_name: $replied_to_commenter_name
        commenter_name: $commenter_name
        ip: $ip
      }
    ) {
      ...CommentFragment
    }
  }
`;
