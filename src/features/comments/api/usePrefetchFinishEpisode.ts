import { useQueryClient } from "@tanstack/react-query";
import { getFinishComments } from "src/features/comments/api/useInfiniteFinishComments";

export const usePrefetchFinishEpisode = () => {
  const queryClient = useQueryClient();

  return async (episode_id: string) => {
    await queryClient.prefetchInfiniteQuery({
      queryKey: ["GetFinishComments", { episode_id }],
      queryFn: () =>
        getFinishComments({
          episode_id,
          pageParam: { cursor: new Date().toISOString() },
        }),
      staleTime: 1000 * 60 * 30,
    });
  };
};
