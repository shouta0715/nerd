import { useState } from "react";
import { useTimerState } from "src/features/timer/store";
import { timeToPadTime } from "src/features/timer/utils/timeProcessing";
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
    if (!digits) return;
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
  };

  const onSubmitHandler = () => {
    if (getIsChangeTime()) {
      changeTime();
      setInputTime(null);
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
