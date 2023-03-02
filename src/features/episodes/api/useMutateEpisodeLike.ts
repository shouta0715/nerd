/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useDeleteEpisodeLikesMutation,
  useInsertEpisodeLikesMutation,
} from "src/graphql/like/likeQuery.generated";
import { createClients } from "src/libs/graphqlClient";
import { useGlobalState } from "src/store/global/globalStore";
import { RefreshTokenResult } from "src/types/dataType";

export const useMutateEpisodeLike = () => {
  const client = useGlobalState((state) => state.client);
  const setClient = useGlobalState((state) => state.setClient);

  const insertLikesMutation = useInsertEpisodeLikesMutation(client, {
    onError: (error: any, newData) => {
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
            insertLikesMutation.mutate(newData);
          }
        })();
      }
    },
  });
  const deleteLikeMutation = useDeleteEpisodeLikesMutation(client, {
    onError: (error: any, newData) => {
      if (error.message === "Could not verify JWT: JWTExpired") {
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
            deleteLikeMutation.mutate(newData);
          }
        })();
      }
    },
  });

  return {
    insertLikesMutation,
    deleteLikeMutation,
  };
};
