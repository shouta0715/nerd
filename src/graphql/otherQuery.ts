import { gql } from "graphql-request";

export const GET_MEDIA_TYPES = gql`
  query GetMediaTypes {
    media_types(order_by: { id: asc }) {
      id
      name
    }
  }
`;
