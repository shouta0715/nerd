import { useInfiniteQuery } from "@tanstack/react-query";
import { reactionsWorkDocument } from "src/documents/reactions";
import { PageParams } from "src/features/chats/common/types";
import { multipleOf300 } from "src/features/chats/common/utils";
import { useTimerState } from "src/features/timer/store";
import {
  GetReactionsWorkQuery,
  GetReactionsWorkQueryVariables,
} from "src/gql/graphql";
import { client } from "src/libs/client/graphql";

type Args = {
  work_id: number;
  enabled: boolean;
};

export type GetReactionsWorkArgs = {
  work_id: number;
  pageParam: PageParams;
};

const InitialPageParam: PageParams = {
  _gte: 1,
  _lt: 300,
};

const getReactions = async ({ work_id, pageParam }: GetReactionsWorkArgs) => {
  const { _gte, _lt } = pageParam;

  const data = await client.request<
    GetReactionsWorkQuery,
    GetReactionsWorkQueryVariables
  >(reactionsWorkDocument, {
    work_id,
    get_limit: 5,
    _gte,
    _lt,
  });

  return data;
};

export const useInfiniteWorkReactions = ({ enabled, work_id }: Args) => {
  const time = useTimerState((state) => state.getTime());

  return useInfiniteQuery({
    queryKey: ["reactions", { work_id }],
    queryFn: ({ pageParam }) => {
      return getReactions({
        work_id,
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
