import { useQuery } from "@tanstack/react-query";

export const useQuerySeasonWorks = () =>
  useQuery({
    queryKey: ["seasonWorks"],
    enabled: false,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });
