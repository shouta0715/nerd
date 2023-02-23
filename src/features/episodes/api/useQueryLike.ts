import { useQuery } from "@tanstack/react-query";
import {
  GetEpisodeLikesQuery,
  useGetEpisodeLikesQuery,
} from "src/generated/graphql";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserLikesStore, useUserState } from "src/store/user/userState";

export const useQueryLikes = (episodeIds: string[]) => {
  const client = useGlobalState((state) => state.client);
  const isClient = useGlobalState((state) => state.isClient);
  const user = useUserState((state) => state.user);
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
