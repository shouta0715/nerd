import { useInfiniteQuery } from "@tanstack/react-query";
import { CommentsFilter } from "src/features/comments/types";
import {
  useGetCommentsEpisodeByLikesQuery,
  useGetCommentsEpisodeQuery,
} from "src/graphql/comment/commentQuery.generated";

import { client } from "src/libs/graphqlClient";
import { useUserState } from "src/store/user/userState";
import { Order_By } from "src/types/graphql";

type GetFinishCommentsArgs = {
  episode_id: string;
  pageParam?: {
    cursor: string;
    likes_cursor: number;
  };
  filter: CommentsFilter;
};

const getInitialPageParam = () => {return {
  cursor: new Date().toISOString(),
  likes_cursor: 100000,
}};

export const getComments = async ({
  episode_id,
  pageParam,
  filter,
}: GetFinishCommentsArgs) => {
  const { cursor, likes_cursor } = pageParam ?? getInitialPageParam();

  const isPopular = filter === "popular";

  const order_by = isPopular
    ? [
        {
          likes_aggregate: {
            count: Order_By.Desc,
          },
        },
        {
          created_at: Order_By.Desc,
        },
      ]
    : {
        created_at: Order_By.Desc,
      };

  const fetcher = isPopular
    ? useGetCommentsEpisodeByLikesQuery.fetcher(client, {
        episode_id,
        cursor,
        limit: 100,
        order_by,
        likes_cursor,
      })
    : useGetCommentsEpisodeQuery.fetcher(client, {
        episode_id,
        cursor,
        limit: 100,
        order_by,
      });

  const data = await fetcher();

  return data;
};

export const useInfiniteCommentsEpisode = (
  episode_id: string,
  filter: "new" | "popular"
) => {
  const user = useUserState((state) => {return state.user});

  return useInfiniteQuery({
    queryKey: ["comments", { episode_id, filter }],
    queryFn: ({ pageParam }) =>
      {return getComments({
        episode_id,
        pageParam,
        filter,
      })},
    getNextPageParam: (lastPage) => {
      const lastFinishComments = lastPage.comments.at(-1);
      if (!lastFinishComments || lastPage.comments.length < 100)
        return undefined;

      return {
        cursor: lastFinishComments?.created_at,
        likes_cursor: lastFinishComments?.likes_aggregate.aggregate?.count,
      };
    },
    keepPreviousData: true,
    suspense: true,
    enabled: !!episode_id && !!user,
  });
};
