import { graphql } from "src/gql/gql";

export const episodeCommentsDocument = graphql(`
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
`);

export const likesEpisodeCommentsDocument = graphql(`
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
`);

export const workCommentsDocument = graphql(`
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
`);

export const episodeLatestCommentsDocument = graphql(`
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
`);

export const workLatestCommentsDocument = graphql(`
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
`);

export const likesWorkCommentsDocument = graphql(`
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
`);

export const episodeCommentMutateDocument = graphql(`
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
`);

export const workCommentMutateDocument = graphql(`
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
`);
