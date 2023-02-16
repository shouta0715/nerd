import { GetTodayEpisodesQuery } from "src/generated/graphql";

export type Episode = GetTodayEpisodesQuery["episodes"][0];
