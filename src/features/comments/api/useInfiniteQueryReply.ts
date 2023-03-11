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
  // TODO アプリ公開日にする
  cursor: "2023-03-10T00:00:00.000Z",
};

export const getReply = async ({ reply_to, pageParam }: GetReplyArgs) => {
  const { cursor } = pageParam;

  const fetcher = useGetReplyQuery.fetcher(client, {
    reply_to,
    cursor,
    limit: 10,
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
      if (!lastReply || lastPage.finish_comments.length < 10) return undefined;

      return {
        cursor: lastReply?.created_at,
      };
    },
    suspense: true,
    enabled: isOpen && !!reply_to,
    staleTime: 1000 * 60 * 5,
  });
