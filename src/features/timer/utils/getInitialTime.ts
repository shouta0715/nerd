import { Time } from "src/features/timer/types";

export const getInitialTime = (start_time: string): Time => {
  const now = new Date();
  const start = new Date(start_time);

  const diff = start.getTime() - now.getTime();

  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (diff < 0) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  return { hours, minutes, seconds };
};
