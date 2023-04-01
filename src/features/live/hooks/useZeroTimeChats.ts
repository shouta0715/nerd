import { useQueryZeroTimeChats } from "src/features/live/api/useQueryZeroTimeChats";

export const useZeroTimeChats = (episode_id: string) => {
  const { data, fetchNextPage, isFetchingNextPage } = useQueryZeroTimeChats(
    episode_id,
    !!episode_id
  );

  return {
    data,
    fetchNextPage,
    isFetchingNextPage,
  };
};
