/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { FC, Suspense, useRef } from "react";
import { Replies } from "./Replies";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { Text } from "src/components/Elements/Text";
import { useReply } from "src/features/comments/hooks/useReply";
import { Comment as TypeComment } from "src/features/comments/types";
import { Like } from "src/features/likes/components/Like";
import { formatTimeDistance } from "src/features/timer/utils/timeProcessing";

type Props = {
  comment: TypeComment;
};

export const Comment: FC<Props> = ({ comment }) => {
  const content = useRef<HTMLParagraphElement>(null);
  const { handleClick } = useReply();

  return (
    <li className="flex w-full animate-comment">
      <figure className="m-0 mr-2">
        <Avatar user_id={comment.user?.id} user_name={comment.commenter_name} />
      </figure>
      <div className="max-w-[calc(100%-46px)] flex-1">
        <div
          className="w-full"
          onClick={() =>
            handleClick({
              reply_to: comment.id,
              replied_to_commenter_name: comment.commenter_name,
            })
          }
          role="button"
        >
          <Text className="font-bold" ff="Hiragino Sans" size="xs">
            {comment.commenter_name}
          </Text>
          <Text
            ref={(comment.reply_count ?? -1) > 0 ? content : null}
            className=" scroll-mt-20 break-words py-1 font-hiragino-sans text-base lg:scroll-mt-10"
            ff="Hiragino Sans"
          >
            {comment.content}
          </Text>
        </div>
        <Text
          className="flex items-center justify-between space-x-2"
          color="dimmed"
          component="div"
          ff="Hiragino Sans"
          size="xs"
        >
          <div className="flex">
            <span className="text-dimmed">
              {formatTimeDistance(comment.created_at)}
            </span>
            <Button
              className="border-none p-0 text-sm text-black"
              onClick={() =>
                handleClick({
                  reply_to: comment.id,
                  replied_to_commenter_name: comment.commenter_name,
                })
              }
            >
              返信
            </Button>
          </div>
          <Like
            comment_id={comment.id}
            is_like={comment.is_like || false}
            like_count={comment.likes_aggregate.aggregate?.count || 0}
          />
        </Text>
        <Suspense
          fallback={
            <div className="mt-1 flex w-full">
              <Loader className="mx-auto" variant="dots" />
            </div>
          }
        >
          <Replies
            content={content}
            reply_count={comment.reply_count || 0}
            reply_id={comment.id}
          />
        </Suspense>
      </div>
    </li>
  );
};
