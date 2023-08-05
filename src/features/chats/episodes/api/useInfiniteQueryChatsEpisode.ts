import { useInfiniteQuery } from "@tanstack/react-query";
import { episodeChatsDocument } from "src/documents/chats";
import { PageParams } from "src/features/chats/common/types";
import { multipleOf300 } from "src/features/chats/common/utils";
import { useTimerState } from "src/features/timer/store";
import {
  GetChatsEpisodeQuery,
  GetChatsEpisodeQueryVariables,
} from "src/gql/graphql";

import { client } from "src/libs/graphqlClient";

type Args = {
  episode_id: string;
  enabled: boolean;
};

export type GetChatsEpisodeArgs = {
  episode_id: string;
  pageParam: PageParams;
};

const InitialPageParam: PageParams = {
  _gte: 1,
  _lt: 300,
};

const getChat = async ({ episode_id, pageParam }: GetChatsEpisodeArgs) => {
  const { _gte, _lt } = pageParam;

  const data = await client.request<
    GetChatsEpisodeQuery,
    GetChatsEpisodeQueryVariables
  >(episodeChatsDocument, {
    episode_id,
    get_limit: 40,
    _gte,
    _lt,
  });

  return data;
};

export const useInfiniteQueryChatsEpisode = ({ episode_id, enabled }: Args) => {
  const time = useTimerState((state) => state.getTime());

  return useInfiniteQuery({
    queryKey: ["chats", { episode_id }],
    queryFn: ({ pageParam }) => {
      return getChat({
        episode_id,
        pageParam,
      });
    },
    getNextPageParam: (_, __, lastPageParam) => {
      const { _lt } = lastPageParam;

      return {
        _gte: _lt,
        _lt: multipleOf300(time),
      };
    },
    defaultPageParam: InitialPageParam,
    enabled,
  });
};
