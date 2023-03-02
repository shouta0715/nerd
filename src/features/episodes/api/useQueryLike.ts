import { useQuery } from "@tanstack/react-query";
import {
  GetEpisodeLikesQuery,
  useGetEpisodeLikesQuery,
} from "src/graphql/like/likeQuery.generated";
import { createClients } from "src/libs/graphqlClient";

import { useGlobalState } from "src/store/global/globalStore";
import { useUserLikesStore, useUserState } from "src/store/user/userState";
import { RefreshTokenResult } from "src/types/dataType";

export const useQueryLikes = (episodeIds: string[]) => {
  const client = useGlobalState((state) => state.client);
  const user = useUserState((state) => state.user);
  const setData = useUserLikesStore((state) => state.setData);
  const setClient = useGlobalState((state) => state.setClient);

  const { refetch, ...query } = useQuery<GetEpisodeLikesQuery>({
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
    onError: (error: any) => {
      if (error.message.includes("Could not verify JWT: JWTExpired")) {
        // TODO: handle expired token
        (async () => {
          const data: RefreshTokenResult = await fetch(
            "/api/auth/refreshToken",
            {
              method: "POST",
              credentials: "include",
            }
          ).then((res) => res.json());

          if (data.message === "ok") {
            const newClient = createClients(data.idToken);
            setClient(newClient);
            refetch();
          }
        })();
      }
    },
  });

  return query;
};
