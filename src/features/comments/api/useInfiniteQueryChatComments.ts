import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetChatCommentsQuery } from "src/graphql/comment/commentQuery.generated";
import { client } from "src/libs/graphqlClient";

type Args = {
  episode_id: string;
  enabled: boolean;
};

type GetChatCommentsArgs = {
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

export const useInfiniteQueryChatComments = ({ episode_id, enabled }: Args) =>
  useInfiniteQuery({
    queryKey: ["GetChatComments", { episode_id }],
    queryFn: ({ pageParam = InitialPageParam }) =>
      getChatComments({
        episode_id,
        pageParam,
      }),
    enabled,
  });
