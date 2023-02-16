import { useQuery } from "@tanstack/react-query";
import { GetSeasonWorksQuery } from "src/generated/graphql";

export const useQuerySeasonWorks = () =>
  useQuery<GetSeasonWorksQuery>({
    queryKey: ["seasonWorks"],
    enabled: false,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
  });
