import { useState } from "react";
import { useTimerState } from "src/features/timer/store";
import { useUserState } from "src/store/user/userState";

export const useSubmitChat = () => {
  const getTime = useTimerState((state) => state.getTime);
  const [value, setValue] = useState<string>("");
  const user = useUserState((state) => state.user);

  return {
    getTime,
    user,
    value,
    setValue,
  };
};
