import { useState } from "react";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { useTimerState } from "src/features/timer/store";
import { MaxTime } from "src/features/timer/store/initialState";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { useCountDownModal } from "src/store/global/globalStore";

export const useTimeInput = () => {
  const [inputTime, setInputTime] = useState<string | null>(null);
  const {
    time,
    padTime,
    mode,
    interval,
    changeTenTime,
    setTime,
    downInitialTime,
  } = useTimerState((state) => ({
    time: state.time,
    padTime: state.padTime(),
    interval: state.interval,
    changeTenTime: state.changeTenTime,
    setTime: state.setTime,
    mode: state.mode,
    downInitialTime: state.downInitialTime,
  }));

  const showNotification = useNotificationState((state) => state.onShow);

  const setIsOpen = useCountDownModal((state) => state.setIsOpen);

  const setChangeTime = () => {
    const digits = inputTime?.match(/.{1,2}/g);
    if (!digits) return;

    const [hours, minutes, seconds] = digits;

    setTime({
      hours: +hours,
      minutes: +minutes,
      seconds: +seconds,
    });

    const timeToSeconds = timeToSecond({
      hours: +hours,
      minutes: +minutes,
      seconds: +seconds,
    });

    if (timeToSeconds > timeToSecond(MaxTime))
      showNotification({
        title: "時間を変更しました",
        message: "最大時間の4時間を超えたため4時間に設定されます。",
        type: "error",
      });
    else showNotification({ title: "時間を変更しました", type: "success" });
  };

  const changeHandler = (newTime: string) => setInputTime(newTime);

  const isChangeTime = inputTime !== null && inputTime !== padTime;

  const onSubmitChangeTime = () => {
    if (mode === "down" && timeToSecond(downInitialTime) === 0) setIsOpen(true);

    if (timeToSecond(time) === 0 && mode === "down") return;

    if (isChangeTime) {
      setChangeTime();
    } else {
      interval.toggle();
    }

    setInputTime(null);
  };

  return {
    inputTime,
    onSubmitChangeTime,
    changeHandler,
    isChangeTime,
    time,
    mode,
    interval,
    changeTenTime,
    padTime,
    downInitialTime,
  };
};
