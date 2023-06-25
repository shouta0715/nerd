import { useState } from "react";
import { useNotificationState } from "src/components/Elements/Notification/store";
import { useTimerState } from "src/features/timer/store";
import { MaxTime } from "src/features/timer/store/initialState";
import {
  timeToPadTime,
  timeToSecond,
} from "src/features/timer/utils/timeProcessing";
import { useCountDownModal } from "src/store/global/globalStore";

export const useDownModal = () => {
  const { downInitialTime, setDownInitialTime, setTime, changeMode } =
    useTimerState((state) => ({
      downInitialTime: state.downInitialTime,
      setDownInitialTime: state.setDownInitialTime,
      setTime: state.setTime,
      changeMode: state.changeMode,
    }));

  const setIsOpen = useCountDownModal((state) => state.setIsOpen);
  const padTime = timeToPadTime(downInitialTime);
  const [inputTime, setInputTime] = useState<string | null>(null);
  const onNotification = useNotificationState((state) => state.onShow);

  const handleChange = (newTime: string) => setInputTime(newTime);

  const getIsChangeTime = (): boolean => {
    if (!inputTime?.trim()) {
      setIsOpen(false);

      if (padTime === "000000") changeMode();

      return false;
    }

    if (padTime === inputTime || inputTime === "000000") {
      changeMode();
      setIsOpen(false);

      return false;
    }

    return true;
  };

  const changeTime = () => {
    const digits = inputTime?.match(/.{1,2}/g);
    if (!digits) return false;
    const [hours, minutes, seconds] = digits;

    setDownInitialTime({
      hours: +hours,
      minutes: +minutes,
      seconds: +seconds,
    });
    setTime({
      hours: +hours,
      minutes: +minutes,
      seconds: +seconds,
    });

    const time = timeToSecond({
      hours: +hours,
      minutes: +minutes,
      seconds: +seconds,
    });

    return time > timeToSecond(MaxTime);
  };

  const onSubmitHandler = () => {
    if (getIsChangeTime()) {
      const isOverMaxTime = changeTime();
      setInputTime(null);

      const seconds = timeToSecond(downInitialTime);

      switch (seconds) {
        case 0:
          if (isOverMaxTime) {
            onNotification({
              title: "時間を設定しました。",
              message: "最大時間の4時間を超えたため4時間に設定されました。",
              type: "info",
            });

            break;
          }

          onNotification({
            title: "時間を設定しました。",
            type: "success",
          });

          break;

        default:
          if (isOverMaxTime) {
            onNotification({
              title: "時間を変更しました。",
              message: "最大時間の4時間を超えたため4時間に設定されました。",
              type: "info",
            });

            break;
          }

          onNotification({
            title: "時間を変更しました。",
            type: "success",
          });
      }
    }

    setIsOpen(false);
  };

  return {
    handleChange,
    onSubmitHandler,
    inputTime,
    padTime,
  };
};
