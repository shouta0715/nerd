import { ScrollArea } from "@mantine/core";
import React, { FC } from "react";
import { useQueryComments } from "../../hooks/comments/useQueryComments";
import { CommentInput } from "./modules/CommentInput";

type Props = {
  postId: string;
};

export const MainComment: FC<Props> = ({ postId }) => {
  const { data: comments } = useQueryComments(postId);

  return (
    <div className="relative top-0  flex flex-1 flex-col overflow-hidden">
      <ScrollArea
        classNames={{
          thumb: "bg-indigo-500",
        }}
        className="mb-30 h-full px-6 md:mb-40"
        scrollbarSize={10}
      >
        {comments?.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ScrollArea>
      <CommentInput postId={postId} />
    </div>
  );
};
