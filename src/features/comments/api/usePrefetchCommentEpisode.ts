import { useQueryClient } from "@tanstack/react-query";
import { getComments } from "src/features/comments/api/useInfiniteCommentsEpisode";

export const usePrefetchCommentEpisode = () => {
  const queryClient = useQueryClient();

  return async (episode_id: string) => {
    await queryClient.prefetchInfiniteQuery({
      queryKey: ["comments", { episode_id, filter: "new" }],
      queryFn: () =>
        getComments({
          episode_id,
          filter: "new",
        }),
      staleTime: 1000 * 60 * 30,
    });
  };
};
