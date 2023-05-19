import { TodayEpisode, WorkEpisode } from "src/features/episodes/types";
import { GetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";

type Mode = "finished" | "will" | "now";

const createTime = (
  mode: Mode = "finished"
): {
  start_time: string;
  end_time: string;
} => {
  const now = new Date();
  const start_time = new Date();
  const end_time = new Date();

  if (mode === "finished") {
    start_time.setDate(now.getDate() - 1);
    end_time.setDate(now.getDate() - 1);
  }

  if (mode === "will") {
    start_time.setDate(now.getDate() + 1);
    end_time.setDate(now.getDate() + 1);
  }
  if (mode === "now") {
    // 開始から5分後に設定 終了は30分後
    start_time.setMinutes(now.getMinutes() - 5);
    end_time.setMinutes(now.getMinutes() + 25);
  }

  return {
    start_time: start_time.toISOString(),
    end_time: end_time.toISOString(),
  };
};

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

export const todayEpisodeData = (mode: Mode = "finished"): TodayEpisode => {
  const { start_time, end_time } = createTime(mode);

  return {
    __typename: "episodes",
    id: "1",

    title: "緑谷出久：オリジン",
    number: 1,
    has_next_episode: true,
    has_prev_episode: false,
    start_time,
    end_time,
    next_episode_id: "2",
    work: {
      __typename: "works",
      id: 1,
      title: "僕のヒーローアカデミア",

      series_title: "僕のヒーローアカデミア",
      series_id: "U",
    },
  };
};

export const workItemData: WorkEpisode = {
  __typename: "episodes",
  id: "1",
  title: "緑谷出久：オリジン",
  number: 1,
  has_next_episode: true,
  start_time: "2021-04-01T00:00:00+09:00",
  end_time: "2021-04-01T00:30:00+09:00",
  next_episode_id: "2",
};
