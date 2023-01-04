import { gql } from "graphql-request";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
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
    }
  }
`;
