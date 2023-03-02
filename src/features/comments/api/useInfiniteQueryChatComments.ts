import { useInfiniteQuery } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { useGetChatCommentsQuery } from "src/graphql/comment/commentQuery.generated";
import { createClients } from "src/libs/graphqlClient";
import { useGlobalState } from "src/store/global/globalStore";
import { RefreshTokenResult } from "src/types/dataType";

type Args = {
  episode_id: string;
  enabled: boolean;
};

type GetChatCommentsArgs = {
  client: GraphQLClient;
  episode_id: string;
  pageParam: {
    _gte: number;
    _lt: number;
  };
};

const InitialPageParam = {
  _gte: 0,
  _lt: 300,
};

const getChatComments = async ({
  client,
  episode_id,
  pageParam,
}: GetChatCommentsArgs) => {
  const { _gte, _lt } = pageParam;
  const fetcher = useGetChatCommentsQuery.fetcher(client, {
    episode_id,
    get_limit: 40,
    _gte,
    _lt,
  });

  const data = await fetcher();

  return data;
};

export const useInfiniteQueryChatComments = ({ episode_id, enabled }: Args) => {
  const client = useGlobalState((state) => state.client);
  const setClient = useGlobalState((state) => state.setClient);

  const { refetch, ...query } = useInfiniteQuery({
    queryKey: ["GetChatComments", { episode_id }],
    queryFn: ({ pageParam = InitialPageParam }) =>
      getChatComments({
        client,
        episode_id,
        pageParam,
      }),
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

        console.log("error", error);
      }
    },
    enabled,
  });

  return query;
};
