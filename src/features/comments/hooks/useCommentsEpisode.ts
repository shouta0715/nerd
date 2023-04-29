import { useEffect } from "react";
import { useInfiniteCommentsEpisode } from "src/features/comments/api/useInfiniteCommentsEpisode";
import { CommentsFilter } from "src/features/comments/types";
import { useInterSection } from "src/hooks/useInterSection";

export const useCommentsEpisode = (
  episode_id: string,
  filter: CommentsFilter
) => {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteCommentsEpisode(episode_id, filter);

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

  return {
    data,
    isFetchingNextPage,
    ref,
    hasNextPage,
    isLoading: isFetching,
  };
};
