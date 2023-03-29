import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetCommentsWorkQuery } from "src/graphql/comment/commentQuery.generated";
import { client } from "src/libs/graphqlClient";

type GetFinishCommentsArgs = {
  work_id: number;
  pageParam: {
    cursor: string;
  };
};

const InitialPageParam = {
  cursor: new Date().toISOString(),
};

export const getComments = async ({
  work_id,
  pageParam,
}: GetFinishCommentsArgs) => {
  const { cursor } = pageParam;

  const fetcher = useGetCommentsWorkQuery.fetcher(client, {
    work_id,
    cursor,
    limit: 100,
  });

  const data = await fetcher();

  return data;
};

export const useInfiniteCommentsWork = (work_id: number) =>
  useInfiniteQuery({
    queryKey: ["comments", { work_id }],
    queryFn: ({ pageParam = InitialPageParam }) =>
      getComments({
        work_id,
        pageParam,
      }),
    getNextPageParam: (lastPage) => {
      const lastFinishComments = lastPage.comments.at(-1);
      if (!lastFinishComments || lastPage.comments.length < 100)
        return undefined;

      return {
        cursor: lastFinishComments?.created_at,
      };
    },
    suspense: true,
    enabled: !!work_id,
  });
