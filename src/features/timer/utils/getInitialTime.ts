import { Time } from "src/features/timer/types";

export const getInitialTime = (start_time: string): Time => {
  const now = new Date();
  const start = new Date(start_time);

  const diff = start.getTime() - now.getTime();

  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (diff < 0) {
    // 開始済みの場合は開始から経過した時間を表示する

    const progress_hours = Math.floor(
      (-diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const progress_minutes = Math.floor(
      (-diff % (1000 * 60 * 60)) / (1000 * 60)
    );
    const progress_seconds = Math.floor((-diff % (1000 * 60)) / 1000);

    return {
      hours: progress_hours,
      minutes: progress_minutes,
      seconds: progress_seconds,
    };
  }

  return { hours, minutes, seconds };
};
