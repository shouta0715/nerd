import {
  GetSeasonWorksQuery,
  GetTodayEpisodesQuery,
} from "src/generated/graphql";

export type Episode = GetTodayEpisodesQuery["episodes"][0];

export type WorkEpisode = GetSeasonWorksQuery["works"][0]["episodes"][0];
