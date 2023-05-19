import { Work } from "src/features/works/types";
import {
  GetWorkQuery,
  GetWorkSeriesQuery,
  SearchWorksQuery,
} from "src/graphql/work/workQuery.generated";

const createWork = () => {
  return {
    id: 1,
    title: "僕のヒーローアカデミア OVA",
    series_title: "僕のヒーローアカデミア",
    series_id: "boku-no-hero-academia",
    has_episodes: true,
  };
};

const createEpisodes = (length = 24) => {
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

const createWorks = (length = 4) => {
  return [...Array(length)].map((_, i) => {
    return {
      ...createWork(),
      id: i,
      episodes: createEpisodes(),
    };
  });
};

export const workData: GetWorkQuery = {
  works_by_pk: createWork(),
};

export const workWithSeriesData: GetWorkSeriesQuery = {
  works_by_pk: {
    ...createWork(),

    episodes: createEpisodes(),
  },
  works: createWorks(),
};

export const workItemData: Work = {
  ...createWork(),
  episodes: createEpisodes(),
};

export const searchWorksData: SearchWorksQuery = {
  search_works: createWorks(),
};
