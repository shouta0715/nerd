import {
  GetEpisodeQuery,
  GetSeasonWorksQuery,
  GetTodayEpisodesQuery,
} from "src/gql/graphql";

export type Episode = GetEpisodeQuery["episodes_by_pk"];

export type TodayEpisode = GetTodayEpisodesQuery["episodes"][0];

export type WorkEpisode = GetSeasonWorksQuery["works"][0]["episodes"][0];

export type AutoCompleteData = {
  title: string;
  episodeTitle?: string;
  value: string;
  number?: number;
  start_time?: string;
  end_time?: string;
};
