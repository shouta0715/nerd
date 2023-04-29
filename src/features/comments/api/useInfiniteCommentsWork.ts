import { useInfiniteQuery } from "@tanstack/react-query";
import { CommentsFilter } from "src/features/comments/types";
import { useGetCommentsWorkQuery } from "src/graphql/comment/commentQuery.generated";
import { client } from "src/libs/graphqlClient";
import { useUserState } from "src/store/user/userState";
import { Order_By } from "src/types/graphql";

type GetFinishCommentsArgs = {
  work_id: number;
  pageParam: {
    cursor: string;
  };
  filter: CommentsFilter;
};

const InitialPageParam = {
  cursor: new Date().toISOString(),
};

export const getComments = async ({
  work_id,
  pageParam,
  filter,
}: GetFinishCommentsArgs) => {
  const { cursor } = pageParam;
  const isPopular = filter === "popular";

  const order_by = isPopular
    ? {
        likes_aggregate: {
          count: Order_By.Desc,
        },
      }
    : {
        created_at: Order_By.Desc,
      };

  const fetcher = useGetCommentsWorkQuery.fetcher(client, {
    work_id,
    cursor,
    limit: 100,
    order_by,
  });

  const data = await fetcher();

  return data;
};

export const useInfiniteCommentsWork = (
  work_id: number,
  filter: CommentsFilter
) => {
  const user = useUserState((state) => state.user);

  return useInfiniteQuery({
    queryKey: ["comments", { work_id, filter }],
    queryFn: ({ pageParam = InitialPageParam }) =>
      getComments({
        work_id,
        pageParam,
        filter,
      }),
    getNextPageParam: (lastPage) => {
      const lastFinishComments = lastPage.comments.at(-1);
      if (!lastFinishComments || lastPage.comments.length < 100)
        return undefined;

      return {
        cursor: lastFinishComments?.created_at,
      };
    },
    keepPreviousData: true,
    suspense: true,
    enabled: !!work_id && !!user,
  });
};
