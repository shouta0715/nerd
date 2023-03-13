import { useQueryClient } from "@tanstack/react-query";
import { getComments } from "src/features/comments/api/useInfiniteFinishComments";

export const usePrefetchFinishEpisode = () => {
  const queryClient = useQueryClient();

  return async (episode_id: string) => {
    await queryClient.prefetchInfiniteQuery({
      queryKey: ["comments", { episode_id }],
      queryFn: () =>
        getComments({
          episode_id,
          pageParam: { cursor: new Date().toISOString() },
        }),
      staleTime: 1000 * 60 * 30,
    });
  };
};
