import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetChatsWorkQuery } from "src/graphql/chat/chatQuery.generated";

import { client } from "src/libs/graphqlClient";

type Args = {
  work_id: number;
  enabled: boolean;
};

type GetChatsWorkArgs = {
  work_id: number;
  pageParam: {
    _gte: number;
    _lt: number;
  };
};

const InitialPageParam = {
  _gte: 1,
  _lt: 300,
};

const getChat = async ({ work_id, pageParam }: GetChatsWorkArgs) => {
  const { _gte, _lt } = pageParam;
  const fetcher = useGetChatsWorkQuery.fetcher(client, {
    work_id,
    get_limit: 40,
    _gte,
    _lt,
  });

  const data = await fetcher();

  return data;
};

export const useInfiniteQueryChatsWork = ({ work_id, enabled }: Args) => {
  return useInfiniteQuery({
    queryKey: ["chats", { work_id }],
    queryFn: ({ pageParam = InitialPageParam }) => {
      return getChat({
        work_id,
        pageParam,
      });
    },
    enabled,
  });
};
