import { useEffect } from "react";
import { useInfiniteCommentsWork } from "src/features/comments/api/useInfiniteCommentsWork";
import { useInterSection } from "src/hooks/useInterSection";

export const useCommentsWork = (work_id: number) => {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteCommentsWork(work_id);

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
