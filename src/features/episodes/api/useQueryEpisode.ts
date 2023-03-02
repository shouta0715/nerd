import { useGetEpisodeQuery } from "src/graphql/episode/episodeQuery.generated";
import { createClients } from "src/libs/graphqlClient";
import { useGlobalState } from "src/store/global/globalStore";
import { RefreshTokenResult } from "src/types/dataType";

export const useQueryEpisode = (id: string | string[] | undefined) => {
  const client = useGlobalState((state) => state.client);
  const setClient = useGlobalState((state) => state.setClient);

  const { refetch, ...query } = useGetEpisodeQuery(
    client,
    {
      id,
    },
    {
      enabled: !!id,
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
    }
  );

  return query;
};
