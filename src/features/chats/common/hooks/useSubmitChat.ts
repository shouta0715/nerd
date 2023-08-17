import { useState } from "react";
import { useTimerState } from "src/features/timer/store";
import { useIp } from "src/hooks/useIp";
import { useUserState } from "src/store/user/userState";

export const useSubmitChat = () => {
  const getTime = useTimerState((state) => state.getTime);
  const [value, setValue] = useState<string>("");
  const user = useUserState((state) => state.user);
  const { getIpAddress } = useIp();

  return {
    getTime,
    user,
    value,
    setValue,
    getIpAddress,
  };
};
