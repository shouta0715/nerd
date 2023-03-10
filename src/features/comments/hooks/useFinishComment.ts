import { useCallback, useState } from "react";
import { useInfiniteQueryReply } from "src/features/comments/api/useInfiniteQueryReply";

type Props = {
  reply_count: number;
  reply_id: string;
};

export const useFinishComment = ({ reply_count, reply_id }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQueryReply(reply_id, isOpen);
  const [replyCount, setReplyCount] = useState(
    data?.pages[0].finish_comments.length ?? 0
  );

  const clickHandler = useCallback(() => {
    if (replyCount < reply_count) {
      setIsOpen(true);
      fetchNextPage();
      setReplyCount(replyCount + 20);
    } else {
      setIsOpen(!isOpen);
    }
  }, [replyCount, reply_count, fetchNextPage, isOpen]);

  const controlLabel = useCallback((): string => {
    if (!reply_count) return "返信を表示";
    if (!isOpen) return `${reply_count}件の返信を表示`;

    if (replyCount < (reply_count ?? 0) && hasNextPage)
      return `${
        // eslint-disable-next-line no-unsafe-optional-chaining
        reply_count - replyCount
      }件をもっと表示する`;

    return "返信を閉じる";
  }, [reply_count, hasNextPage, isOpen, replyCount]);

  return {
    isOpen,
    clickHandler,
    controlLabel,
    replyCount,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};
