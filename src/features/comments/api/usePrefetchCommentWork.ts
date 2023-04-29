import { useQueryClient } from "@tanstack/react-query";
import { getComments } from "src/features/comments/api/useInfiniteCommentsWork";

export const usePrefetchCommentWork = () => {
  const queryClient = useQueryClient();

  return async (work_id: number) => {
    await queryClient.prefetchInfiniteQuery({
      queryKey: ["comments", { work_id, filter: "new" }],
      queryFn: () =>
        getComments({
          work_id,
          pageParam: { cursor: new Date().toISOString() },
          filter: "new",
        }),
      staleTime: 1000 * 60 * 30,
    });
  };
};
