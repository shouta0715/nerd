import { gql } from "graphql-request";

export const ChatFragment = gql`
  fragment ChatFragment on chats {
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
      id
    }
  }
`;

export const GET_CHATS_EPISODE = gql`
  query GetChatsEpisode(
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
      ...ChatFragment
    }
  }
`;

export const GET_CHATS_WORK = gql`
  query GetChatsWork(
    $work_id: Int!
    $get_limit: Int!
    $_lt: Int!
    $_gte: Int!
  ) {
    chats_by_work_id(
      args: {
        _work_id: $work_id
        get_limit: $get_limit
        _gte: $_gte
        _lt: $_lt
      }
      order_by: { comment_time: asc }
    ) {
      ...ChatFragment
    }
  }
`;

export const INSERT_CHAT = gql`
  mutation InsertChat($object: chats_insert_input!) {
    insert_chats_one(object: $object) {
      ...ChatFragment
    }
  }
`;
export const SUBSCRIPTION_CHATS = gql`
  subscription SubscriptionChats(
    $episode_id: uuid!
    $initial_created_at: timestamptz!
  ) {
    chats_stream(
      cursor: {
        initial_value: { created_at: $initial_created_at }
        ordering: ASC
      }
      batch_size: 100
      where: { episode_id: { _eq: $episode_id }, comment_time: { _gte: 0 } }
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
        id
      }
    }
  }
`;

export const GET_CHATS = gql`
  query GetChats($episode_id: uuid!) {
    chats(
      where: { episode_id: { _eq: $episode_id }, comment_time: { _gte: 0 } }
      order_by: { comment_time: asc }
      limit: 100
    ) {
      ...ChatFragment
    }
  }
`;
