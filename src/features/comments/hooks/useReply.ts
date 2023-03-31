import { useInputCommentState, useRefState } from "src/features/comments/store";

type HandleClick = {
  reply_to: string;
  replied_to_commenter_name: string;
};

export const useReply = () => {
  const focus = useRefState((state) => state.focusRef);
  const [inputState, setInputState] = useInputCommentState((state) => [
    state.inputComment,
    state.setInputComment,
  ]);

  const handleClick = ({
    reply_to,
    replied_to_commenter_name,
  }: HandleClick) => {
    setInputState({
      ...inputState,
      reply_to,
      replied_to_commenter_name,
    });
    focus();
  };

  return {
    handleClick,
  };
};
