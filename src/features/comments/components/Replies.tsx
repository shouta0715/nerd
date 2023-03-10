import { Accordion, Loader } from "@mantine/core";
import React, { FC } from "react";
import { ReplyComment } from "src/features/comments/components/ReplyComment";
import { useFinishComment } from "src/features/comments/hooks/useFinishComment";

type Props = {
  reply_count: number;
  reply_id: string;
};

export const Replies: FC<Props> = ({ reply_count, reply_id }) => {
  const { clickHandler, controlLabel, isOpen, data, isFetchingNextPage } =
    useFinishComment({
      reply_id,
      reply_count,
    });

  return (
    <div>
      {reply_count !== 0 && (
        <Accordion
          value={isOpen ? "reply-original" : null}
          ff="Hiragino Sans"
          disableChevronRotation={controlLabel() !== "返信を閉じる"}
          classNames={{
            control:
              "justify-end w-full text-indigo-500 items-center p-0 hover:bg-transparent w-max",
            label: " flex-none text-xs md:text-sm",
            content: "p-0",
            chevron: "m-0",
          }}
        >
          <Accordion.Item className="border-0" value="reply-original">
            <Accordion.Panel ff="Hiragino Sans">
              {data?.pages.map((replies) =>
                replies.finish_comments.map((reply) => (
                  <ReplyComment key={reply.id} reply={reply} />
                ))
              )}
              {isFetchingNextPage && <Loader variant="dots" />}
            </Accordion.Panel>
            <Accordion.Control onClick={clickHandler}>
              {controlLabel()}
            </Accordion.Control>
          </Accordion.Item>
        </Accordion>
      )}
    </div>
  );
};
