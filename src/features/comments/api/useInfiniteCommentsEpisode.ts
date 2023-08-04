import { useInfiniteQuery } from "@tanstack/react-query";
import {
  episodeCommentsDocument,
  likesEpisodeCommentsDocument,
} from "src/documents/comments";
import { CommentsFilter } from "src/features/comments/types";
import { getInitialPageParam } from "src/features/comments/utils";
import { Order_By } from "src/gql/graphql";
import { client } from "src/libs/graphqlClient";
import { useUserState } from "src/store/user/userState";

type GetCommentsArgs = {
  episode_id: string;
  pageParam: {
    cursor: string;
    likes_cursor: number;
  };
  order: CommentsFilter;
};

export const getComments = async ({
  episode_id,
  pageParam,
  order,
}: GetCommentsArgs) => {
  const { cursor, likes_cursor } = pageParam;

  const isPopular = order === "popular";

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

  const data = isPopular
    ? client.request(likesEpisodeCommentsDocument, {
        episode_id,
        cursor,
        limit: 100,
        order_by,
        likes_cursor,
      })
    : client.request(episodeCommentsDocument, {
        episode_id,
        cursor,
        limit: 100,
        order_by,
      });

  return data;
};

export const useInfiniteCommentsEpisode = (
  episode_id: string,
  order: CommentsFilter
) => {
  const user = useUserState((state) => {
    return state.user;
  });

  return useInfiniteQuery({
    queryKey: ["comments", { episode_id, order }],
    queryFn: ({ pageParam }) => getComments({ episode_id, pageParam, order }),
    getNextPageParam: (lastPage) => {
      const lastComments = lastPage.comments.at(-1);
      if (!lastComments || lastPage.comments.length < 100) return undefined;

      return {
        cursor: lastComments?.created_at,
        likes_cursor: lastComments?.likes_aggregate.aggregate?.count ?? 0,
      };
    },
    defaultPageParam: getInitialPageParam(),
    gcTime: 0,
    suspense: true,
    enabled: !!episode_id && !!user,
  });
};
