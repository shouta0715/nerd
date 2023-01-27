import { gql } from "graphql-request";

export const GET_INVITES = gql`
  query GetInvites {
    invites(order_by: { created_at: desc }) {
      id
      user_id
      anonymous
      author_name
      category
      content
      created_at
      title
      sub_title
      start_time
      spoiler
      site
      is_start
      is_finished
      topics
      url
      user {
        photo_url
        user_name
      }
    }
  }
`;

export const GET_INVITE = gql`
  query GetInvite($id: uuid!) {
    invites_by_pk(id: $id) {
      id
      user_id
      anonymous
      author_name
      category
      content
      created_at
      title
      sub_title
      start_time
      spoiler
      site
      is_start
      is_finished
      topics
      url
      user {
        photo_url
        user_name
      }
    }
  }
`;

export const GET_INVITES_BY_CATEGORY = gql`
  query GetInvitesByCategory($category: category_enum!) {
    invites(where: { category: { _eq: $category } }) {
      id
      user_id
      anonymous
      author_name
      category
      content
      created_at
      title
      sub_title
      start_time
      spoiler
      site
      is_start
      is_finished
      topics
      url
      user {
        photo_url
        user_name
      }
    }
  }
`;
