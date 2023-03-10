import React, { FC } from "react";
import { ReplyComment as TypeReplyComment } from "src/features/comments/types";

type Props = {
  reply: TypeReplyComment;
};

export const ReplyComment: FC<Props> = ({ reply }) => (
  <div>{reply.content}</div>
);
