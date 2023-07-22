import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInfiniteCommentsEpisode } from "src/features/comments/api/useInfiniteCommentsEpisode";
import { CommentsFilter } from "src/features/comments/types";
import { useInterSection } from "src/hooks/useInterSection";

export const useCommentsEpisode = (
  episode_id: string,
  filter: CommentsFilter
) => {
  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
  } = useInfiniteCommentsEpisode(episode_id, filter);
  const queryClient = useQueryClient();

  const { ref, entry } = useInterSection({
    root: null,
    rootMargin: "",
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [entry?.isIntersecting, fetchNextPage, hasNextPage, isFetchingNextPage]);

  const refetchHandler = () => {
    if (!episode_id || isFetchingNextPage || isFetching) return;

    queryClient.invalidateQueries([
      "comments",
      {
        episode_id,
        filter,
      },
    ]);
    queryClient.invalidateQueries({
      queryKey: ["replies"],
    });
  };

  return {
    data,
    isFetchingNextPage,
    ref,
    hasNextPage,
    isLoading: isFetching || isFetchingNextPage || isLoading,
    refetchHandler,
  };
};
