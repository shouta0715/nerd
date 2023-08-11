import { graphql } from "src/gql/gql";

export const seriesDocument = graphql(`
  query GetSeries($series_id: String!) {
    works(
      where: { series_id: { _eq: $series_id } }
      order_by: [{ has_episodes: desc }]
    ) {
      ...WorkFragment
      episodes(order_by: { number: desc_nulls_last }, limit: 8) {
        ...FragmentEpisode
      }
    }
  }
`);
