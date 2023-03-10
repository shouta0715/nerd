import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetFinishCommentsQuery } from "src/graphql/comment/commentQuery.generated";

import { client } from "src/libs/graphqlClient";

type GetFinishCommentsArgs = {
  episode_id: string;
  pageParam: {
    cursor: string;
  };
};

const InitialPageParam = {
  cursor: new Date().toISOString(),
};

export const getFinishComments = async ({
  episode_id,
  pageParam,
}: GetFinishCommentsArgs) => {
  const { cursor } = pageParam;

  const fetcher = useGetFinishCommentsQuery.fetcher(client, {
    episode_id,
    cursor,
    limit: 100,
  });

  const data = await fetcher();

  return data;
};

export const useInfiniteFinishComments = (episode_id: string) =>
  useInfiniteQuery({
    queryKey: ["GetFinishComments", { episode_id }],
    queryFn: ({ pageParam = InitialPageParam }) =>
      getFinishComments({
        episode_id,
        pageParam,
      }),
    getNextPageParam: (lastPage) => {
      const lastFinishComments = lastPage.finish_comments.at(-1);
      if (!lastFinishComments || lastPage.finish_comments.length < 100)
        return undefined;

      return {
        cursor: lastFinishComments?.created_at,
      };
    },
    suspense: true,
    enabled: !!episode_id,
  });
