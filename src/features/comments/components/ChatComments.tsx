import React, { FC, memo } from "react";
import { useQueryComments } from "src/features/comments/api/useQueryComments";

type Props = {
  episode_id: string;
};

const ChatComments: FC<Props> = memo(({ episode_id }) => {
  const { data } = useQueryComments(episode_id);

  return (
    <ul>
      {data?.chat_comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.content}</p>
        </li>
      ))}
    </ul>
  );
});

export default ChatComments;
