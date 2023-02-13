import { useQuery } from "@tanstack/react-query";

export const useQueryTodayEpisodes = () =>
  useQuery({
    queryKey: ["todayEpisodes"],
    enabled: false,
    cacheTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  });
