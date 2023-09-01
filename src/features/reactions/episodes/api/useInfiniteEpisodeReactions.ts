import { useInfiniteQuery } from "@tanstack/react-query";
import { ReactionsEpisodeDocument } from "src/documents/reactions";
import { PageParams } from "src/features/chats/common/types";
import { multipleOf300 } from "src/features/chats/common/utils";
import { useTimerState } from "src/features/timer/store";
import {
  GetReactionsEpisodeQuery,
  GetReactionsEpisodeQueryVariables,
} from "src/gql/graphql";
import { client } from "src/libs/client/graphql";

type Args = {
  episode_id: string;
  enabled: boolean;
};

export type GetReactionsEpisodeArgs = {
  episode_id: string;
  pageParam: PageParams;
};

const InitialPageParam: PageParams = {
  _gte: 1,
  _lt: 300,
};

const getReactions = async ({
  episode_id,
  pageParam,
}: GetReactionsEpisodeArgs) => {
  const { _gte, _lt } = pageParam;

  const data = await client.request<
    GetReactionsEpisodeQuery,
    GetReactionsEpisodeQueryVariables
  >(ReactionsEpisodeDocument, {
    episode_id,
    get_limit: 5,
    _gte,
    _lt,
  });

  return data;
};

export const useInfiniteEpisodeReactions = ({ enabled, episode_id }: Args) => {
  const time = useTimerState((state) => state.getTime());

  return useInfiniteQuery({
    queryKey: ["reactions", { episode_id }],
    queryFn: ({ pageParam }) => {
      return getReactions({
        episode_id,
        pageParam,
      });
    },
    getNextPageParam: (_, __, lastPageParam) => {
      const { _lt } = lastPageParam;

      if (time > 14400 || _lt === 14400) return undefined;

      return {
        _gte: _lt,
        _lt: multipleOf300(time),
      };
    },
    defaultPageParam: InitialPageParam,
    enabled,
  });
};
