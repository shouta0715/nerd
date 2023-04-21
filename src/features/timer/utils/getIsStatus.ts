import { LiveTimer, LiveTimerProps } from "src/features/timer/types";

export const getIsStatus = ({
  start_time,
  end_time,
}: LiveTimerProps): LiveTimer["mode"] => {
  if (start_time === null || end_time === null) return "notRegister";
  const nowTime = new Date().getTime();
  const start = new Date(start_time).getTime();
  const end = new Date(end_time).getTime();

  if (nowTime < start) return "down";

  if (nowTime > end) return "finish";

  return "up";
};
