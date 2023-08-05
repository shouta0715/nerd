import { useInfiniteQuery } from "@tanstack/react-query";
import { workChatsDocument } from "src/documents/chats";

import { PageParams } from "src/features/chats/types";
import { multipleOf300 } from "src/features/chats/utils";
import { useTimerState } from "src/features/timer/store";
import { GetChatsWorkQuery, GetChatsWorkQueryVariables } from "src/gql/graphql";

import { client } from "src/libs/graphqlClient";

type Args = {
  work_id: number;
  enabled: boolean;
};

type GetChatsWorkArgs = {
  work_id: number;
  pageParam: PageParams;
};

const InitialPageParam: PageParams = {
  _gte: 1,
  _lt: 300,
};

const getChat = async ({ work_id, pageParam }: GetChatsWorkArgs) => {
  const { _gte, _lt } = pageParam;

  const data = await client.request<
    GetChatsWorkQuery,
    GetChatsWorkQueryVariables
  >(workChatsDocument, {
    work_id,
    get_limit: 40,
    _gte,
    _lt,
  });

  return data;
};

export const useInfiniteQueryChatsWork = ({ work_id, enabled }: Args) => {
  const time = useTimerState((state) => state.getTime());

  return useInfiniteQuery({
    queryKey: ["chats", { work_id }],
    queryFn: ({ pageParam }) => {
      return getChat({
        work_id,
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
