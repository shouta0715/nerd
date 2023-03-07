import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";

export type Episode = GetTodayEpisodesQuery["episodes"][0];

export type WorkEpisode = GetSeasonWorksQuery["works"][0]["episodes"][0];

export type AutoCompleteData = {
  title: string;
  episodeTitle?: string;
  value: string;
  number?: number;
};
