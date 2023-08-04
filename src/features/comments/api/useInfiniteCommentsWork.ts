import { useInfiniteQuery } from "@tanstack/react-query";
import {
  likesWorkCommentsDocument,
  workCommentsDocument,
} from "src/documents/comments";
import { CommentsFilter } from "src/features/comments/types";
import { getInitialPageParam } from "src/features/comments/utils";
import { Order_By } from "src/gql/graphql";
import { client } from "src/libs/graphqlClient";
import { useUserState } from "src/store/user/userState";

type GetFinishCommentsArgs = {
  work_id: number;
  pageParam: {
    cursor: string;
    likes_cursor: number;
  };
  order: CommentsFilter;
};

export const getComments = async ({
  work_id,
  pageParam,
  order,
}: GetFinishCommentsArgs) => {
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
    ? client.request(likesWorkCommentsDocument, {
        work_id,
        cursor,
        limit: 100,
        order_by,
        likes_cursor,
      })
    : client.request(workCommentsDocument, {
        work_id,
        cursor,
        limit: 100,
        order_by,
      });

  return data;
};

export const useInfiniteCommentsWork = (
  work_id: number,
  order: CommentsFilter
) => {
  const user = useUserState((state) => {
    return state.user;
  });

  return useInfiniteQuery({
    queryKey: ["comments", { work_id, order }],
    queryFn: ({ pageParam }) => {
      return getComments({
        work_id,
        pageParam,
        order,
      });
    },
    getNextPageParam: (lastPage) => {
      const lastComments = lastPage.comments.at(-1);
      if (!lastComments || lastPage.comments.length < 100) return undefined;

      return {
        cursor: lastComments?.created_at,
        likes_cursor: lastComments?.likes_aggregate.aggregate?.count ?? 0,
      };
    },
    defaultPageParam: getInitialPageParam(),
    suspense: true,
    enabled: !!work_id && !!user,
  });
};
