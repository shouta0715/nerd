import React, { FC, memo } from "react";
import { useMutateChatComments } from "src/features/comments/api/useMutateChatComments";
import { useQueryComments } from "src/features/comments/api/useQueryComments";

type Props = {
  episode_id: string;
};

export const ChatComments: FC<Props> = memo(({ episode_id }) => {
  const { data } = useQueryComments(episode_id);
  const { insertComment } = useMutateChatComments();
  const [commentInput, setCommentInput] = React.useState("");

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (commentInput) {
      await insertComment.mutateAsync({
        object: {
          episode_id,
          content: commentInput,
          time: 1,
        },
      });
    }
  };

  return (
    <>
      {data?.chat_comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.content}</p>
        </li>
      ))}
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
      </form>
    </>
  );
});
