import { Time } from "src/features/timer/types";

type Props = {
  start_time: string | null;
  end_time: string | null;
};

export const getInitialTime = ({ start_time, end_time }: Props): Time => {
  if (start_time === null || end_time === null)
    return { hours: 0, minutes: 0, seconds: 0 };

  const now = new Date();
  const start = new Date(start_time);
  const end = new Date(end_time);

  if (now.getTime() > end.getTime()) {
    // 終了済みなら0を返す

    return { hours: 0, minutes: 0, seconds: 0 };
  }

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
