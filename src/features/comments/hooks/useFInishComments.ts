import { useIntersection } from "@mantine/hooks";
import { useEffect } from "react";
import { useInfiniteFinishComments } from "src/features/comments/api/useInfiniteFinishComments";

export const useFinishComments = (episode_id: string) => {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteFinishComments(episode_id);

  const { ref, entry } = useIntersection({
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
