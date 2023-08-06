import { useQueryClient, useIsFetching } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useMemo, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteCommentsEpisode } from "src/features/comments/api/useInfiniteCommentsEpisode";
import { InfiniteCommentEpisode } from "src/features/comments/common/types";
import { getInitialPageParam } from "src/features/comments/common/utils";
import { getLatestEpisodeComments } from "src/features/comments/common/utils/getLatestComments";
import { GetLatestEpisodeCommentQuery } from "src/gql/graphql";

export const useCommentsEpisode = (episode_id: string) => {
  const router = useRouter();
  const order = router.query.order === "popular" ? "popular" : "new";
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isPending } =
    useInfiniteCommentsEpisode(episode_id, order);
  const queryClient = useQueryClient();
  const isLatestFetching = useIsFetching({
    queryKey: ["latestComments", { episode_id }],
  });

  const { ref } = useInView({
    root: null,
    onChange: (inView) => {
      if (isFetchingNextPage || !inView) return;

      fetchNextPage();
    },
    threshold: 1.0,
  });

  const refetchHandler = useCallback(async () => {
    if (!episode_id || isFetchingNextPage) return;
    const prevData = queryClient.getQueryData<InfiniteCommentEpisode>([
      "comments",
      { episode_id, order },
    ]);

    if (!prevData) return;

    const { cursor } = prevData.pageParams[0];

    const latestData =
      await queryClient.fetchQuery<GetLatestEpisodeCommentQuery>({
        queryFn: () =>
          getLatestEpisodeComments({
            episode_id,
            cursor,
          }),
        queryKey: ["latestComments", { episode_id }],
        gcTime: 0,
      });

    if (!latestData || latestData.comments.length === 0) return;

    const newPagesArray = latestData.comments.filter(
      (comment) => !prevData.pages[0].comments.some((c) => c.id === comment.id)
    );

    if (newPagesArray.length === 0) return;

    queryClient.setQueryData<InfiniteCommentEpisode>(
      ["comments", { episode_id, order }],
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
  }, [episode_id, isFetchingNextPage, order, queryClient]);

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
