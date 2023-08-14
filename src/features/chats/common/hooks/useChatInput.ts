import React from "react";
import { useTimerState } from "src/features/timer/store";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { useGlobalState } from "src/store/global/globalStore";

type Props = {
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

export const useChatInput = ({ setContent }: Props) => {
  const authLoading = useGlobalState((state) => state.authLoading);
  const [timeObj, downInitialTime] = useTimerState((state) => [
    state.time,
    state.downInitialTime,
  ]);
  const time = timeToSecond(timeObj);
  const downTime = timeToSecond(downInitialTime);

  const timeDisabled = time === 0 || time === downTime;

  const getPlaceholder = () => {
    if (authLoading) return "ロード中...";

    if (timeDisabled) return "再生してください";

    return "コメントを入力";
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length <= 100) setContent(e.currentTarget.value);
  };

  return {
    onChangeHandler,
    getPlaceholder,
    timeDisabled,
  };
};
