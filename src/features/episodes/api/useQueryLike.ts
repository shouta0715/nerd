import { useQuery } from "@tanstack/react-query";
import {
  GetEpisodeLikesQuery,
  useGetEpisodeLikesQuery,
} from "src/generated/graphql";
import { useGlobalStore } from "src/store/global/globalStore";
import { useUserLikesStore, useUserStore } from "src/store/user/userState";

export const useQueryLikes = (episodeIds: string[]) => {
  const client = useGlobalStore((state) => state.client);
  const isClient = useGlobalStore((state) => state.isClient);
  const user = useUserStore((state) => state.user);
  const setData = useUserLikesStore((state) => state.setData);

  return useQuery<GetEpisodeLikesQuery>({
    queryKey: ["todayEpisodesLikes", episodeIds],
    queryFn: useGetEpisodeLikesQuery.fetcher(client, {
      episodeIds,
    }),
    enabled: isClient && !!user?.id && !!episodeIds.length && !user?.anonymous,
    suspense: false,
    onSuccess: (data) => {
      setData(data);
    },
  });
};
