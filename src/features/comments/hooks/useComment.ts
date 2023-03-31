import { RefObject, useCallback, useState } from "react";
import { useInfiniteQueryReplies } from "src/features/comments/api/useInfiniteQueryReply";

type Props = {
  reply_count: number;
  reply_id: string;
  content: RefObject<HTMLParagraphElement>;
};

export const useComment = ({ reply_count, reply_id }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQueryReplies(reply_id, isOpen);
  const [replyCount, setReplyCount] = useState(0);
  const [showCount, setShowCount] = useState(1);

  const clickHandler = useCallback(async () => {
    if (!data && !isOpen) {
      setIsOpen(true);
      await fetchNextPage();
      setReplyCount((prev) => prev + 10);

      return;
    }

    if (isOpen && replyCount < reply_count) {
      await fetchNextPage();
      setReplyCount((prev) => prev + 10);
      setShowCount((prev) => prev + 1);

      return;
    }

    if (replyCount >= reply_count) {
      setIsOpen(false);
      setReplyCount(0);
      setShowCount(1);

      // // TODO ユーザーの設定によりの設定により変更する
      // if (content.current) {
      //   content.current.scrollIntoView({
      //     behavior: "smooth",
      //     block: "start",
      //   });
      // }

      return;
    }

    if (!isOpen) {
      setIsOpen(true);
      setReplyCount((prev) => prev + 10);
    }
  }, [data, isOpen, replyCount, reply_count, fetchNextPage]);

  const controlLabel = useCallback((): string => {
    if (!reply_count) return "返信を表示";
    if (!isOpen) return `${reply_count}件の返信を表示`;

    if (replyCount < reply_count)
      return `${
        // eslint-disable-next-line no-unsafe-optional-chaining
        reply_count - replyCount
      }件をもっと表示する`;

    return "返信を閉じる";
  }, [reply_count, isOpen, replyCount]);

  const closeClickHandler = useCallback(() => {
    setIsOpen(false);
    setReplyCount(0);
    setShowCount(1);

    // // TODO ユーザーの設定によりの設定により変更する
    // if (content.current) {
    //   content.current.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //   });
    // }
  }, []);

  return {
    isOpen,
    clickHandler,
    controlLabel,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    replyCount,
    showCount,
    closeClickHandler,
    isFetching,
  };
};
