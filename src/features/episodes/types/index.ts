import {
  GetEpisodeQuery,
  GetRankingQuery,
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

export type GenEpisodePlaceholder = {
  episode:
    | WorkEpisode
    | GetEpisodeQuery["episodes_by_pk"]
    | GetRankingQuery["works_all_ranking"][0]["episodes"][0];
  title?: string;
  work_id?: number;
  series_id?: string | null;
};
