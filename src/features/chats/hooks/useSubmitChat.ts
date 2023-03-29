import { useInputChatState } from "src/features/chats/store";
import { useTimerState } from "src/features/timer/store/timerStore";
import { useUserState } from "src/store/user/userState";

export const useSubmitChat = () => {
  const getTime = useTimerState((state) => state.getTime);
  const { content } = useInputChatState((state) => state.inputComment);
  const user = useUserState((state) => state.user);

  return {
    getTime,
    content,
    user,
  };
};
