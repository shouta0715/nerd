import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetZeroTimeChatsQuery } from "src/graphql/chat/chatQuery.generated";
import { client } from "src/libs/graphqlClient";

type GetZeroTimeChatsArgs = {
  pageParam: {
    cursor: string;
  };
  episode_id: string;
};

const InitialPageParam = {
  cursor: "2021-01-01T00:00:00.000Z",
};

export const getZeroTimeChats = async ({
  pageParam,
  episode_id,
}: GetZeroTimeChatsArgs) => {
  const { cursor } = pageParam;
  const fetcher = useGetZeroTimeChatsQuery.fetcher(client, {
    episode_id,
    cursor,
    limit: 100,
  });

  const data = await fetcher();

  return data;
};

export const useQueryZeroTimeChats = (episode_id: string, enabled: boolean) =>
  useInfiniteQuery({
    queryKey: ["ZeroTimeChats", { episode_id }],
    queryFn: ({ pageParam = InitialPageParam }) =>
      getZeroTimeChats({
        episode_id,
        pageParam,
      }),
    getNextPageParam: (lastPage) => {
      const firstChats = lastPage.chats[0];

      return {
        cursor: firstChats?.created_at,
      };
    },
    suspense: true,
    enabled,
  });
