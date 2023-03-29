import { useQueryClient } from "@tanstack/react-query";
import { getComments } from "src/features/comments/api/useInfiniteCommentsWork";

export const usePrefetchCommentWork = () => {
  const queryClient = useQueryClient();

  return async (work_id: number) => {
    await queryClient.prefetchInfiniteQuery({
      queryKey: ["comments", { work_id }],
      queryFn: () =>
        getComments({
          work_id,
          pageParam: { cursor: new Date().toISOString() },
        }),
      staleTime: 1000 * 60 * 30,
    });
  };
};
