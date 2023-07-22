import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInfiniteCommentsWork } from "src/features/comments/api/useInfiniteCommentsWork";
import { CommentsFilter } from "src/features/comments/types";
import { useInterSection } from "src/hooks/useInterSection";

export const useCommentsWork = (work_id: number, filter: CommentsFilter) => {
  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
  } = useInfiniteCommentsWork(work_id, filter);
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
    if (!work_id || isFetchingNextPage || isFetching) return;

    queryClient.invalidateQueries([
      "comments",
      {
        work_id,
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
