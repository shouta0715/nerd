import { GetEpisodeQuery } from "src/gql/graphql";
import { Mode, createTime } from "src/tests/storybook";

export const liveData = (mode: Mode): GetEpisodeQuery => {
  const { start_time, end_time } = createTime(mode);

  return {
    episodes_by_pk: {
      __typename: "episodes",
      id: "1",
      title: "緑谷出久：オリジン",
      number: 1,
      has_next_episode: true,
      start_time,
      end_time,
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
};
