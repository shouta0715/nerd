import { gql } from "graphql-request";
import { Categories_Enum } from "../../generated/graphql";

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
    }
  }
`;

export const GET_POST_BY_CATEGORY = gql`
  query GetPostByCategory($category: categories_enum!) {
    posts(where: { category: { _eq: $category } }) {
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
