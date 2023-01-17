/* eslint-disable react-hooks/exhaustive-deps */
import { useInterval } from "@mantine/hooks";
import { useEffect } from "react";
import { useCommentTimeStore } from "../../store/comment/commentType";
import { useGlobalTimerStore } from "../../store/global/globalStore";

export const useCountUp = () => {
  const setTimer = useCommentTimeStore((state) => state.setTime);
  const time = useCommentTimeStore((state) => state.time);
  const setInterval = useGlobalTimerStore((state) => state.setInterval);
  const interval = useInterval(setTimer, 1000);
  useEffect(() => {
    setInterval(interval);
  }, [interval.active]);

  useEffect(() => () => interval.stop(), []);

  return {
    minutes: time.minutes.toString().padStart(2, "0"),
    seconds: time.seconds.toString().padStart(2, "0"),
    hours: time.hours.toString().padStart(2, "0"),
  };
};
