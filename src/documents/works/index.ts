import { graphql } from "src/gql/gql";

export const workDocument = graphql(`
  query GetWork($id: Int!) {
    works_by_pk(id: $id) {
      ...FragmentWork
    }
  }
`);

export const searchWorksDocument = graphql(`
  query SearchWorks($search: String!, $limit: Int) {
    search_works(
      args: { search: $search, _limit: $limit }
      order_by: { series_title: asc }
    ) {
      ...FragmentWork
      episodes(order_by: { number: desc_nulls_last }, limit: 8) {
        ...FragmentEpisode
      }
    }
  }
`);
export const workSiresDocument = graphql(`
  query GetWorkSeries($id: Int!, $series_id: String!) {
    works_by_pk(id: $id) {
      ...FragmentWork
      episodes(order_by: { number: desc_nulls_last }) {
        ...FragmentEpisode
      }
    }
    works(
      where: { _and: { id: { _neq: $id }, series_id: { _eq: $series_id } } }
      order_by: [{ has_episodes: desc }]
    ) {
      ...FragmentWork
      episodes(order_by: { number: desc_nulls_last }, limit: 8) {
        ...FragmentEpisode
      }
    }
  }
`);
