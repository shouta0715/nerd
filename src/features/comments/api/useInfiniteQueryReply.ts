import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetRepliesQuery } from "src/graphql/comment/commentQuery.generated";
import { client } from "src/libs/graphqlClient";

type GetReplyArgs = {
  reply_to: string;
  pageParam: {
    cursor_created_at: string;
    cursor_reply_to: string;
  };
};

const InitialPageParam = {
  // TODO アプリ公開日にする
  cursor_created_at: "2021-01-01T00:00:00.000Z",
  cursor_reply_to: null,
};

export const getReplies = async ({ reply_to, pageParam }: GetReplyArgs) => {
  const { cursor_created_at, cursor_reply_to } = pageParam;

  const fetcher = useGetRepliesQuery.fetcher(client, {
    original_comment_id: reply_to,
    cursor_created_at,
    cursor_reply_to,
    reply_limit: 10,
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
      const lastReply = lastPage.replies.at(-1);
      if (!lastReply || lastPage.replies.length < 10) return undefined;

      return {
        cursor_created_at: lastReply.created_at,
        cursor_reply_to: lastReply.reply_to,
      };
    },
    suspense: true,
    enabled: isOpen && !!reply_to,
    staleTime: 1000 * 60 * 5,
  });
