/* eslint-disable react/jsx-no-useless-fragment */
import { Accordion, Loader, UnstyledButton } from "@mantine/core";
import { IconChevronUp } from "@tabler/icons";
import React, { FC, RefObject } from "react";
import { Reply } from "src/features/comments/components/ReplyComment";
import { useFinishComment } from "src/features/comments/hooks/useFinishComment";

type Props = {
  reply_count: number;
  reply_id: string;
  content: RefObject<HTMLParagraphElement>;
};

export const Replies: FC<Props> = ({ reply_count, reply_id, content }) => {
  const {
    clickHandler,
    controlLabel,
    isOpen,
    data,
    showCount,
    isFetchingNextPage,
    closeClickHandler,
  } = useFinishComment({
    reply_id,
    reply_count,
    content,
  });

  return (
    <>
      {reply_count !== 0 && (
        <Accordion
          value={isOpen ? "reply-original" : null}
          ff="Hiragino Sans"
          loop={false}
          disableChevronRotation={controlLabel() !== "返信を閉じる"}
          classNames={{
            control:
              "justify-end w-full text-indigo-500 items-center p-0 hover:bg-transparent w-max mt-1",
            label: " flex-none text-xs md:text-sm",
            content: "p-0",
            chevron: "m-0",
            panel: "py-1",
          }}
        >
          <Accordion.Item className="border-0" value="reply-original">
            <Accordion.Panel ff="Hiragino Sans">
              {data?.pages
                .slice(0, showCount)
                .map((replies) =>
                  replies.finish_comments.map((reply) => (
                    <Reply key={reply.id} reply={reply} />
                  ))
                )}
              {isFetchingNextPage && (
                <div className="flex w-full">
                  <Loader className="mx-auto" variant="dots" />
                </div>
              )}
            </Accordion.Panel>
            <div className="flex w-full justify-between">
              <Accordion.Control onClick={clickHandler}>
                {controlLabel()}
              </Accordion.Control>
              <UnstyledButton
                onClick={closeClickHandler}
                className={`flex items-center space-x-1 text-xs text-indigo-500 md:text-sm ${
                  controlLabel() === "返信を閉じる" || !isOpen ? "hidden" : ""
                }`}
              >
                <span>閉じる</span>
                <IconChevronUp size={16} />
              </UnstyledButton>
            </div>
          </Accordion.Item>
        </Accordion>
      )}
    </>
  );
};
