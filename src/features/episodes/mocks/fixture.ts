import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

export const episodeData: GetEpisodeQuery = {
  __typename: "query_root",
  episodes_by_pk: {
    __typename: "episodes",
    id: "1",
    title: "緑谷出久：オリジン",
    number: 1,
    has_next_episode: true,
    start_time: "2021-04-01T00:00:00+09:00",
    end_time: "2021-04-01T00:30:00+09:00",
    next_episode_id: "2",
    work: {
      __typename: "works",
      id: 1,
      title: "僕のヒーローアカデミア",
      series_title: "僕のヒーローアカデミア",
      series_id: "U",
      has_episodes: true,
    },
  },
};
