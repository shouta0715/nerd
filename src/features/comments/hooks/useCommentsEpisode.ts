import { useEffect } from "react";
import { useInfiniteCommentsEpisode } from "src/features/comments/api/useInfiniteCommentsEpisode";
import { useInterSection } from "src/hooks/useInterSection";

export const useCommentsEpisode = (episode_id: string) => {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteCommentsEpisode(episode_id);

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
  };
};
