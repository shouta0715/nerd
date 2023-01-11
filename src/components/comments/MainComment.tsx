/* eslint-disable no-unsafe-optional-chaining */
import { ScrollArea } from "@mantine/core";
import React, { FC, useRef } from "react";
import { useQueryComments } from "../../hooks/comments/useQueryComments";
import { CommentItem } from "./modules/CommentItem";
import { CommentInput } from "./modules/CommentInput";
import { useCommentTimeStore } from "../../store/comment/commentType";
import { timeProcessing } from "../../hooks/utils/timeProcessing";
import { useScrollTrigger } from "../../hooks/utils/useScrollTrigger";

type Props = {
  postId: string;
};

export const MainComment: FC<Props> = ({ postId }) => {
  const { data: comments } = useQueryComments(postId);
  const timer = useCommentTimeStore((state) => state.time);
  const { timeToSecond } = timeProcessing();
  const ref = useRef<HTMLDivElement>(null);
  const filterComments = comments?.filter(
    (comment) => comment.time <= timeToSecond(timer)
  );
  const { onScrollPositionChange } = useScrollTrigger({
    commentLength: filterComments?.length,
    ref,
  });

  return (
    <div className="relative top-0 flex flex-1 flex-col overflow-hidden">
      <ScrollArea
        viewportRef={ref}
        classNames={{
          thumb: "bg-indigo-500",
        }}
        className="mb-20  px-6 md:mb-44"
        scrollbarSize={10}
        onScrollPositionChange={onScrollPositionChange}
      >
        <ul className="w-full space-y-4  py-4">
          {filterComments?.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      </ScrollArea>
      <CommentInput postId={postId} />
    </div>
  );
};
