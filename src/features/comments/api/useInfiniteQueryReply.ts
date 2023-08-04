import { useInfiniteQuery } from "@tanstack/react-query";
import { replyDocument } from "src/documents/reply";

import { client } from "src/libs/graphqlClient";

type PageParam = {
  cursor: string | null;
} | null;

type GetReplyArgs = {
  reply_to: string;
  pageParam: PageParam;
};

const InitialPageParam = {
  cursor: null,
};

export const getReplies = async ({ reply_to, pageParam }: GetReplyArgs) => {
  const { cursor } = pageParam || InitialPageParam;

  const data = await client.request(replyDocument, {
    _reply_to: reply_to,
    cursor,
    reply_limit: 10,
  });

  return data;
};

export const useInfiniteQueryReplies = (reply_to: string, isOpen: boolean) => {
  return useInfiniteQuery({
    queryKey: ["replies", { reply_to }],
    queryFn: ({ pageParam }) => {
      return getReplies({
        reply_to,
        pageParam,
      });
    },
    getNextPageParam: (lastPage) => {
      const lastReply = lastPage.replies.at(-1);

      if (!lastReply || lastPage.replies.length < 10) return undefined;

      return {
        cursor: lastReply.created_at,
      };
    },
    defaultPageParam: InitialPageParam,
    suspense: true,
    enabled: isOpen && !!reply_to,
    staleTime: 1000 * 60 * 5,
  });
};
