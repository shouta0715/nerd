import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query GetPosts {
    posts(order_by: { created_at: asc }) {
      title
      user_id
      sub_title
      start_time
      spoiler
      is_write_anonymous
      id
      created_at
      content
      category
      author_name
      number
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: uuid!) {
    posts_by_pk(id: $id) {
      title
      user_id
      sub_title
      start_time
      spoiler
      is_write_anonymous
      id
      created_at
      number
      content
      category
      author_name
      comments {
        spoiler
        id
        created_at
        content
      }
    }
  }
`;
