import { IconHeart, IconThumbDown } from "@tabler/icons";
import React, { FC, Suspense, useRef } from "react";
import { Replies } from "./Replies";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Loader } from "src/components/Elements/Loader/Loader";
import { Text } from "src/components/Elements/Text";
import { Comment as TypeComment } from "src/features/comments/types";
import { formatTimeDistance } from "src/features/timer/utils/timeProcessing";

type Props = {
  comment: TypeComment;
};

export const Comment: FC<Props> = ({ comment }) => {
  const content = useRef<HTMLParagraphElement>(null);

  return (
    <li className="flex w-full animate-comment">
      <figure className="m-0 mr-2">
        <Avatar user_id={comment.user?.id} user_name={comment.commenter_name} />
      </figure>
      <div className="max-w-[calc(100%-46px)] flex-1">
        <Text ff="Hiragino Sans" size="xs" className="font-bold">
          {comment.commenter_name}
        </Text>
        <p
          ref={
            (comment.replies_aggregate.aggregate?.count ?? -1) > 0
              ? content
              : null
          }
          className=" scroll-mt-20 break-words py-1 font-hiragino-sans text-base lg:scroll-mt-10"
        >
          {comment.content} lorem
        </p>
        <Text
          ff="Hiragino Sans"
          size="xs"
          component="div"
          className="flex items-center space-x-1 text-dimmed"
        >
          <span>{formatTimeDistance(comment.created_at)}</span>
          <Button className="border-none p-0 text-sm text-black">返信</Button>
          <div className="flex items-center">
            <IconHeart size={20} />
            <span>1</span>
          </div>
          <div className="flex items-center">
            <IconThumbDown size={20} />
            <span>100</span>
          </div>
        </Text>
        <Suspense
          fallback={
            <div className="mt-1 flex w-full">
              <Loader className="mx-auto" variant="dots" />
            </div>
          }
        >
          <Replies
            reply_count={comment.replies_aggregate.aggregate?.count || 0}
            reply_id={comment.id}
            content={content}
          />
        </Suspense>
      </div>
    </li>
  );
};
