/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutateChatComments } from "src/features/comments/api/useMutateChatComments";
import { useInputCommentState } from "src/features/comments/store";
import { InputStateSchema } from "src/features/comments/types";
import { useTimerState } from "src/features/timer/store/timerStore";

type Args = {
  episode_id: string;
};

export const useSubmitComment = ({ episode_id }: Args) => {
  const { insertComment } = useMutateChatComments();
  const getTime = useTimerState((state) => state.getTime);
  const { content } = useInputCommentState((state) => state.inputComment);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const object = InputStateSchema.parse({
        episode_id,
        content: content.trim(),
        time: getTime(),
      });
      await insertComment.mutateAsync({
        object,
      });
    } catch (error) {
      //
    }
  };

  return {
    onSubmitHandler,
    insertComment,
  };
};
