import { gql } from "graphql-request";

export const GET_RECRUITMENTS = gql`
  query GetRecruitments {
    recruitments {
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
