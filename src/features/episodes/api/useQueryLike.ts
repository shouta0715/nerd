import { useQuery } from "@tanstack/react-query";
import {
  GetEpisodeLikesQuery,
  useGetEpisodeLikesQuery,
} from "src/graphql/like/likeQuery.generated";
import { client } from "src/libs/graphqlClient";

import { useUserLikesStore, useUserState } from "src/store/user/userState";

export const useQueryLikes = (episodeIds: string[]) => {
  const user = useUserState((state) => state.user);
  const setData = useUserLikesStore((state) => state.setData);

  return useQuery<GetEpisodeLikesQuery>({
    queryKey: ["todayEpisodesLikes", episodeIds],
    queryFn: useGetEpisodeLikesQuery.fetcher(client, {
      episodeIds,
    }),
    enabled: !!user?.id && !!episodeIds.length && !user?.anonymous,
    suspense: false,
    onSuccess: (data) => {
      setData(data);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  });
};
