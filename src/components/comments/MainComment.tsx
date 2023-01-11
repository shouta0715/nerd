import { ScrollArea } from "@mantine/core";
import React, { FC } from "react";
import { useQueryComments } from "../../hooks/comments/useQueryComments";
import { CommentItem } from "./modules/CommentItem";
import { CommentInput } from "./modules/CommentInput";
import { useCommentTimeStore } from "../../store/comment/commentType";
import { timeProcessing } from "../../hooks/utils/timeProcessing";

type Props = {
  postId: string;
};

export const MainComment: FC<Props> = ({ postId }) => {
  const { data: comments } = useQueryComments(postId);
  const timer = useCommentTimeStore((state) => state.time);
  const { timeToSecond } = timeProcessing();

  return (
    <div className="relative top-0 flex flex-1 flex-col overflow-hidden">
      <ScrollArea
        classNames={{
          thumb: "bg-indigo-500",
        }}
        className="mb-20 h-full px-6 md:mb-44"
        scrollbarSize={10}
      >
        <ul className="w-full space-y-4  py-4">
          {comments
            ?.filter((comment) => comment.time <= timeToSecond(timer))
            .map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
        </ul>
      </ScrollArea>
      <CommentInput postId={postId} />
    </div>
  );
};