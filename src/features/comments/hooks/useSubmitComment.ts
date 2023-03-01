/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutateChatComments } from "src/features/comments/api/useMutateChatComments";
import { useInputCommentState } from "src/features/comments/store";
import { useTimerState } from "src/features/timer/store/timerStore";
import { useUserState } from "src/store/user/userState";

type Args = {
  episode_id: string;
};

export const useSubmitComment = ({ episode_id }: Args) => {
  const { insertComment } = useMutateChatComments();
  const getTime = useTimerState((state) => state.getTime);
  const { content } = useInputCommentState((state) => state.inputComment);
  const user = useUserState((state) => state.user);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!content.trim()) return;
      const object = {
        episode_id,
        content: content.trim(),
        comment_time: getTime(),
        commenter_name: user?.user_name || "匿名",
      };
      await insertComment.mutateAsync({
        object,
      });
    } catch (error) {
      //
    }
  };

  return {
    onSubmitHandler,
    isLoading: insertComment.isLoading,
  };
};
