import { useQuery } from "@tanstack/react-query";
import { GetTodayEpisodesQuery } from "src/generated/graphql";

export const useQueryTodayEpisodes = () =>
  useQuery<GetTodayEpisodesQuery>({
    queryKey: ["todayEpisodes"],
    enabled: false,
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  });
