import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetChatsEpisodeQuery } from "src/graphql/chat/chatQuery.generated";

import { client } from "src/libs/graphqlClient";

type Args = {
  episode_id: string;
  enabled: boolean;
};

export type GetChatsEpisodeArgs = {
  episode_id: string;
  pageParam: {
    _gte: number;
    _lt: number;
  };
};

const InitialPageParam = {
  _gte: 1,
  _lt: 300,
};

const getChat = async ({ episode_id, pageParam }: GetChatsEpisodeArgs) => {
  const { _gte, _lt } = pageParam;
  const fetcher = useGetChatsEpisodeQuery.fetcher(client, {
    episode_id,
    get_limit: 40,
    _gte,
    _lt,
  });

  const data = await fetcher();

  return data;
};

export const useInfiniteQueryChatsEpisode = ({ episode_id, enabled }: Args) => {
  return useInfiniteQuery({
    queryKey: ["chats", { episode_id }],
    queryFn: ({ pageParam = InitialPageParam }) => {
      return getChat({
        episode_id,
        pageParam,
      });
    },
    enabled,
  });
};
