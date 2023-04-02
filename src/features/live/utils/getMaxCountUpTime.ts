import { LiveTimerProps, Time } from "src/features/live/types";

export const getMaxCountUpTime = ({
  end_time,
  start_time,
}: LiveTimerProps): Time => {
  const start = new Date(start_time);
  const end = new Date(end_time);

  const diff = end.getTime() - start.getTime();

  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    hours,
    minutes,
    seconds,
  };
};
