import { useQueryClient, useIsFetching } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteCommentsWork } from "src/features/comments/api/useInfiniteCommentsWork";

import {
  InfiniteCommentEpisode,
  InfiniteCommentWork,
} from "src/features/comments/common/types";
import { getInitialPageParam } from "src/features/comments/common/utils";
import { getLatestWorkComments } from "src/features/comments/common/utils/getLatestComments";
import { GetLatestEpisodeCommentQuery } from "src/gql/graphql";

export const useCommentsWork = (work_id: number) => {
  const router = useRouter();
  const order = router.query.order === "popular" ? "popular" : "new";
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isPending } =
    useInfiniteCommentsWork(work_id, order);

  const queryClient = useQueryClient();
  const isLatestFetching = useIsFetching({
    queryKey: ["latestComments", { work_id }],
  });

  const { ref } = useInView({
    root: null,
    onChange: (inView) => {
      if (isFetchingNextPage || !inView) return;
      fetchNextPage();
    },
    threshold: 1.0,
  });

  const refetchHandler = async () => {
    if (!work_id || isFetchingNextPage) return;

    const prevData = queryClient.getQueryData<InfiniteCommentWork>([
      "comments",
      { work_id, order },
    ]);

    if (!prevData) return;

    const { cursor } = prevData.pageParams[0];

    const latestData =
      await queryClient.fetchQuery<GetLatestEpisodeCommentQuery>({
        queryFn: () =>
          getLatestWorkComments({
            work_id,
            cursor,
          }),
        queryKey: ["latestComments", { work_id }],
        gcTime: 0,
      });

    if (!latestData || latestData.comments.length === 0) return;

    const newPagesArray = latestData.comments.filter(
      (comment) => !prevData.pages[0].comments.some((c) => c.id === comment.id)
    );

    if (newPagesArray.length === 0) return;

    queryClient.setQueryData<InfiniteCommentEpisode>(
      ["comments", { work_id, order }],
      {
        pageParams: [getInitialPageParam(), ...prevData.pageParams],
        pages: [
          {
            comments: newPagesArray,
          },
          ...prevData.pages,
        ],
      }
    );
    queryClient.invalidateQueries({
      queryKey: ["replies"],
    });
  };

  const memoData = useMemo(() => {
    if (!data?.pages) return [];

    const result = data.pages.flatMap((page) => page.comments);

    return result;
  }, [data?.pages]);

  const isLoading =
    isFetchingNextPage || isPending || Boolean(isLatestFetching);

  return {
    data: memoData,
    isFetchingNextPage,
    ref,
    hasNextPage,
    isLoading,
    refetchHandler,
    order,
  };
};
