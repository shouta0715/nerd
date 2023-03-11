/* eslint-disable no-nested-ternary */
import { ActionIcon, Loader, Text, UnstyledButton } from "@mantine/core";
import { IconHeart, IconThumbDown } from "@tabler/icons";
import React, { FC, Suspense, useRef } from "react";
import { Replies } from "./Replies";
import { Avatar } from "src/components/Elements/Avatar";
import { FinishComment as TypeFinishComment } from "src/features/comments/types";
import { formatTimeDistance } from "src/features/timer/utils/timeProcessing";

type Props = {
  comment: TypeFinishComment;
};

export const FinishComment: FC<Props> = ({ comment }) => {
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
        <Text
          ref={
            (comment.finish_comments_aggregate.aggregate?.count ?? -1) > 0
              ? content
              : null
          }
          component="p"
          ff="Hiragino Sans"
          className=" scroll-mt-20 break-words py-1 text-base lg:scroll-mt-10"
        >
          {comment.content} lorem
        </Text>
        <Text
          ff="Hiragino Sans"
          size="xs"
          color="dimmed"
          component="div"
          className="flex items-center space-x-2"
        >
          <span>{formatTimeDistance(comment.created_at)}</span>
          <UnstyledButton className="text-sm text-black">返信</UnstyledButton>
          <div className="flex items-center">
            <ActionIcon variant="transparent">
              <IconHeart size={20} />
            </ActionIcon>
            <span>1</span>
          </div>
          <div className="flex items-center">
            <ActionIcon variant="transparent">
              <IconThumbDown size={20} />
            </ActionIcon>
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
            reply_count={
              comment.finish_comments_aggregate.aggregate?.count || 0
            }
            reply_id={comment.id}
            content={content}
          />
        </Suspense>
      </div>
    </li>
  );
};
