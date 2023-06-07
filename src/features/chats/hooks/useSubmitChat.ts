import { useState } from "react";
import { useTimerState } from "src/features/timer/store";
import { useUserState } from "src/store/user/userState";

export const useSubmitChat = () => {
  const getTime = useTimerState((state) => state.getTime);
  const [content, setContent] = useState<string>("");
  const user = useUserState((state) => state.user);

  return {
    getTime,
    content,
    user,
    setContent,
  };
};
