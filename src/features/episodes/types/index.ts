import { GetTodayEpisodesQuery } from "src/generated/graphql";

export type Episode = GetTodayEpisodesQuery["episodes"][0];

export type AutoCompleteData = {
  title: string;
  episodeTitle: string;
  value: string;
  number: number;
};
