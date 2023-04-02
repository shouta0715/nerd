import { LiveTimer, LiveTimerProps } from "src/features/timer/types";

export const getIsStatus = ({
  start_time,
  end_time,
}: LiveTimerProps): LiveTimer["mode"] => {
  const now = new Date();
  const start = new Date(start_time);
  const end = new Date(end_time);

  if (now.getTime() < start.getTime()) return "down";

  if (now.getTime() > end.getTime()) return "finish";

  return "up";
};
