/* eslint-disable no-unsafe-optional-chaining */
import { ScrollArea } from "@mantine/core";
import React, { FC, useRef } from "react";
import { IconArrowBigDown } from "@tabler/icons";
import { useQueryComments } from "../../hooks/comments/useQueryComments";
import { CommentItem } from "./modules/CommentItem";
import { CommentInput } from "./modules/CommentInput";
import {
  useCommentScrollStore,
  useCommentTimeStore,
} from "../../store/comment/commentType";
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
  const { onScrollPositionChange, useScrollBottom } = useScrollTrigger({
    commentLength: filterComments?.length,
    ref,
  });

  const isScroll = useCommentScrollStore((state) => state.isScroll);

  return (
    <div className="relative top-0 flex flex-1 flex-col overflow-hidden">
      <ScrollArea
        viewportRef={ref}
        classNames={{
          thumb: "bg-indigo-500",
        }}
        className=" mb-20  px-6 md:mb-44"
        scrollbarSize={10}
        onScrollPositionChange={onScrollPositionChange}
      >
        <ul className=" w-full space-y-4  py-4">
          {filterComments?.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
        {isScroll && (
          <button
            onClick={useScrollBottom}
            color="blue"
            className="absolute bottom-10 left-1/2 m-0 flex h-8 w-8 -translate-x-1/2 animate-bounce cursor-pointer  items-center justify-center rounded-full border-none bg-indigo-500  p-0 text-white"
          >
            <IconArrowBigDown className="fill-white" />
          </button>
        )}
      </ScrollArea>

      <CommentInput postId={postId} />
    </div>
  );
};
