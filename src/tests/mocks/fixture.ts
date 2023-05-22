import { GetTodayEpisodesQuery } from "src/graphql/episode/episodeQuery.generated";
import {
  GetSeasonWorksQuery,
  GetWeeklyWorksQuery,
} from "src/graphql/work/workQuery.generated";
import { createWorkItems, todayEpisodeData } from "src/tests/mocks";

export const seasonData: GetSeasonWorksQuery = {
  works: createWorkItems(10),
};

export const todayData: GetTodayEpisodesQuery = {
  episodes: [todayEpisodeData()],
};

export const weeklyData: GetWeeklyWorksQuery = {
  weekly_works: createWorkItems(10),
};
