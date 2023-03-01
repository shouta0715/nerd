import { useInfiniteQuery } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { useGetChatCommentsQuery } from "src/graphql/comment/commentQuery.generated";
import { useGlobalState } from "src/store/global/globalStore";

type Args = {
  episode_id: string;
  enabled: boolean;
};

type GetChatCommentsArgs = {
  client: GraphQLClient;
  episode_id: string;
  pageParam: {
    min_time: number;
    max_time: number;
  };
};

const InitialPageParam = {
  min_time: 0,
  max_time: 30,
};

const getChatComments = async ({
  client,
  episode_id,
  pageParam,
}: GetChatCommentsArgs) => {
  const { max_time, min_time } = pageParam;
  const fetcher = useGetChatCommentsQuery.fetcher(client, {
    episode_id,
    get_limit: 25,
    min_time,
    max_time,
  });

  const data = await fetcher();

  return data;
};

export const useInfiniteQueryChatComments = ({ episode_id, enabled }: Args) => {
  const client = useGlobalState((state) => state.client);

  return useInfiniteQuery({
    queryKey: ["GetChatComments", { episode_id }],
    queryFn: ({ pageParam = InitialPageParam }) =>
      getChatComments({
        client,
        episode_id,
        pageParam,
      }),
    enabled,
  });
};
