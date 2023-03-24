import { useMutation } from "@tanstack/react-query";
import { useSearchWorksQuery } from "src/graphql/work/workQuery.generated";
import { client } from "src/libs/graphqlClient";

const SearchWorks = async (search: string) => {
  const fetcher = useSearchWorksQuery.fetcher(client, {
    search,
    limit: 100,
  });

  const data = await fetcher();

  return data;
};

export const useQuerySearchWorks = () =>
  useMutation({
    mutationFn: SearchWorks,
  });
