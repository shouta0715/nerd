import { useQuery } from "@tanstack/react-query";
import { SearchWorks } from "src/features/works/api/useMutateSearchWorks";

export const useQuerySearchWorks = (q: string) =>
  useQuery({
    queryKey: ["SearchWorks", { q }],
    queryFn: () => SearchWorks(q),
    enabled: !!q,
    staleTime: 1000 * 60 * 5,
  });
