import { AutoCompleteData, TodayEpisode } from "src/features/episodes/types";
import { Mode, createTime } from "src/tests/storybook";

export const createWork = () => {
  return {
    id: 1,
    title: "僕のヒーローアカデミア OVA",
    series_title: "僕のヒーローアカデミア",
    series_id: "boku-no-hero-academia",
    has_episodes: true,
  };
};

export const createEpisodes = (length = 24) => {
  return [...Array(length)].map((_, i) => {
    return {
      id: i,
      title: "僕のヒーローアカデミア",
      number: i + 1,
      end_time: "2021-03-27T17:30:00+09:00",
      start_time: "2021-03-27T17:00:00+09:00",
      next_episode_id: "2",
      has_next_episode: true,
    };
  });
};

export const createWorks = (length = 4) => {
  return [...Array(length)].map((_, i) => {
    return {
      ...createWork(),
      id: i,
      episodes: createEpisodes(),
    };
  });
};

export const createWorkItem = () => {
  return { ...createWork(), episodes: createEpisodes() };
};

export const createWorkItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    return {
      ...createWorkItem(),
      title: `${createWorkItem().title} ${i}`,
    };
  });
};

export const createAutoCompleteData = (): AutoCompleteData[] => {
  return [
    {
      title: "僕のヒーローアカデミア",
      episodeTitle: "僕のヒーローアカデミア",
      number: 1,
      start_time: "2021-03-27T17:00:00+09:00",
      end_time: "2021-03-27T17:30:00+09:00",
      value: "僕のヒーローアカデミア",
    },
  ];
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
