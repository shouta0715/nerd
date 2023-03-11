import React, { FC } from "react";
import { ReplyComment as TypeReplyComment } from "src/features/comments/types";

type Props = {
  reply: TypeReplyComment;
};

export const Reply: FC<Props> = ({ reply }) => (
  <div className="">{reply.content}</div>
);
