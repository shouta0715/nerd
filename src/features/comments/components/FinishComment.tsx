import { Accordion, ActionIcon, Text, UnstyledButton } from "@mantine/core";
import { IconHeart, IconThumbDown } from "@tabler/icons";
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
        <Text
          ff="Hiragino Sans"
          size="xs"
          color="dimmed"
          component="p"
          className="mb-1 flex items-center space-x-2"
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
        {comment.finish_comments_aggregate.aggregate?.count !== 0 && (
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
        )}
      </div>
    </li>
  );
};
