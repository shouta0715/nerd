import { graphql } from "src/gql/gql";

export const liveIdsDocument = graphql(`
  query GetLiveIds($where: episodes_bool_exp!) {
    episodes(where: $where, order_by: { start_time: asc }) {
      id
    }
  }
`);

export const todayEpisodesDocument = graphql(`
  query GetTodayEpisodes($where: episodes_bool_exp!) {
    episodes(where: $where, order_by: { start_time: asc }) {
      ...TodayFragment
    }
  }
`);

export const seasonEpisodesDocument = graphql(`
  query GetSeasonWorks($season: String!, $year: Int!, $limit: Int) {
    works(
      where: {
        _and: {
          season_year: { _eq: $year }
          season_name: { _eq: $season }
          tid: { _is_null: false }
        }
      }
      limit: $limit
    ) {
      ...FragmentWork
      episodes(order_by: { number: desc_nulls_last }, limit: 8) {
        ...FragmentEpisode
      }
    }
  }
`);

export const weeklyWorksDocument = graphql(`
  query GetWeeklyWorks($limit: Int) {
    weekly_works(args: { limit_num: $limit }) {
      ...FragmentWork
      episodes(order_by: { number: desc_nulls_last }, limit: 8) {
        ...FragmentEpisode
      }
    }
  }
`);
