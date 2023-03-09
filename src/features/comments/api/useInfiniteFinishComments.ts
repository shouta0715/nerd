import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetFinishCommentsQuery } from "../../../graphql/comment/commentQuery.generated";
import { client } from "src/libs/graphqlClient";

type GetFInishCommentsArgs = {
  episode_id: string;
  pageParam: {
    cursor: string;
  };
};

const InitialPageParam = {
  cursor: new Date().toISOString(),
};

const getFinishComments = async ({
  episode_id,
  pageParam,
}: GetFInishCommentsArgs) => {
  const { cursor } = pageParam;

  const fetcher = useGetFinishCommentsQuery.fetcher(client, {
    episode_id,
    cursor,
    limit: 10,
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
      if (!lastFinishComments || lastPage.finish_comments.length < 10)
        return undefined;

      return {
        cursor: lastFinishComments?.created_at,
      };
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
    enabled: !!episode_id,
  });
