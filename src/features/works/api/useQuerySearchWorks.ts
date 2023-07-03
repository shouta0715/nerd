import { useQuery } from "@tanstack/react-query";
import { useSearchWorksQuery } from "src/graphql/work/workQuery.generated";
import { client } from "src/libs/graphqlClient";

export const SearchWorks = async (search: string) => {
  const fetcher = useSearchWorksQuery.fetcher(client, {
    search,
    limit: 100,
  });

  const data = await fetcher();

  return data;
};

export const useQuerySearchWorks = (q: string) => {
  return useQuery({
    queryKey: ["SearchWorks", { q }],
    queryFn: () => {
      return SearchWorks(q);
    },
    enabled: !!q,
    staleTime: 1000 * 60 * 5,
    suspense: false,
  });
};
