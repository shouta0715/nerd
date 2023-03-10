import { Accordion, Text } from "@mantine/core";
import React, { FC, useState } from "react";
import { Avatar } from "src/components/Elements/Avatar";
import { ReplyComment } from "src/features/comments/components/ReplyComment";
import { FinishComment as TypeFinishComment } from "src/features/comments/types";
import { formatTimeDistance } from "src/features/timer/utils/timeProcessing";

type Props = {
  comment: TypeFinishComment;
};

export const FinishComment: FC<Props> = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false);

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
          component="p"
          ff="Hiragino Sans"
          className="break-words py-1 text-base"
        >
          {comment.content} lorem
        </Text>
        <Text size="xs" color="dimmed" component="p" className="mb-1">
          {formatTimeDistance(comment.created_at)}
        </Text>
        <Accordion
          onChange={(value) => setIsOpen(value === "customization")}
          ff="Hiragino Sans"
          classNames={{
            control:
              "justify-end w-full text-indigo-500 items-center p-0 hover:bg-transparent w-max",
            label: " flex-none text-xs md:text-sm",
            content: "p-0",
            chevron: "m-0",
          }}
        >
          <Accordion.Item className="border-0" value="customization">
            <Accordion.Panel ff="Hiragino Sans">
              {comment.finish_comments.map((reply) => (
                <ReplyComment key={reply.id} reply={reply} />
              ))}
            </Accordion.Panel>
            <Accordion.Control>
              {isOpen
                ? "返信を隠す"
                : `${comment.finish_comments_aggregate.aggregate?.count}件の返信を表示`}
            </Accordion.Control>
          </Accordion.Item>
        </Accordion>
      </div>
    </li>
  );
};
