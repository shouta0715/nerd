import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetReplyQuery } from "src/graphql/comment/commentQuery.generated";
import { client } from "src/libs/graphqlClient";

type GetReplyArgs = {
  reply_to: string;
  pageParam: {
    cursor: string;
  };
};

const InitialPageParam = {
  cursor: new Date().toISOString(),
};

export const getReply = async ({ reply_to, pageParam }: GetReplyArgs) => {
  const { cursor } = pageParam;

  const fetcher = useGetReplyQuery.fetcher(client, {
    reply_to,
    cursor,
    limit: 20,
  });

  const data = await fetcher();

  return data;
};

export const useInfiniteQueryReply = (reply_to: string, isOpen: boolean) =>
  useInfiniteQuery({
    queryKey: ["GetReply", { reply_to }],
    queryFn: ({ pageParam = InitialPageParam }) =>
      getReply({
        reply_to,
        pageParam,
      }),
    getNextPageParam: (lastPage) => {
      const lastReply = lastPage.finish_comments.at(-1);
      if (!lastReply || lastPage.finish_comments.length < 20) return undefined;

      return {
        cursor: lastReply?.created_at,
      };
    },
    suspense: true,
    enabled: isOpen && !!reply_to,
    staleTime: 1000 * 60 * 5,
  });
