import {
  GetSeasonWorksQuery,
  GetTodayEpisodesQuery,
  GetWeeklyWorksQuery,
} from "src/gql/graphql";
import { createWorkItems, todayEpisodeData } from "src/tests/mocks";
import { User } from "src/types/userType";

export const seasonData: GetSeasonWorksQuery = {
  works: createWorkItems(10),
};

export const todayData: GetTodayEpisodesQuery = {
  episodes: [todayEpisodeData()],
};

export const weeklyData: GetWeeklyWorksQuery = {
  weekly_works: createWorkItems(10),
};

export const userData: User = {
  id: "1",
  user_name: "test",
  photo_url: "__mocks__/user1.png",
  isDefaultPhoto: false,
  anonymous: false,
  provider_user_name: "test",
};
