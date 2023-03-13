import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetRepliesQuery } from "src/graphql/comment/commentQuery.generated";
import { client } from "src/libs/graphqlClient";

type GetReplyArgs = {
  reply_to: string;
  pageParam: {
    cursor: string;
  };
};

const InitialPageParam = {
  // TODO アプリ公開日にする
  cursor: "2023-03-10T00:00:00.000Z",
};

export const getReplies = async ({ reply_to, pageParam }: GetReplyArgs) => {
  const { cursor } = pageParam;

  const fetcher = useGetRepliesQuery.fetcher(client, {
    reply_to,
    cursor,
    limit: 10,
  });

  const data = await fetcher();

  return data;
};

export const useInfiniteQueryReplies = (reply_to: string, isOpen: boolean) =>
  useInfiniteQuery({
    queryKey: ["replies", { reply_to }],
    queryFn: ({ pageParam = InitialPageParam }) =>
      getReplies({
        reply_to,
        pageParam,
      }),
    getNextPageParam: (lastPage) => {
      const lastReply = lastPage.comments.at(-1);
      if (!lastReply || lastPage.comments.length < 10) return undefined;

      return {
        cursor: lastReply?.created_at,
      };
    },
    suspense: true,
    enabled: isOpen && !!reply_to,
    staleTime: 1000 * 60 * 5,
  });
