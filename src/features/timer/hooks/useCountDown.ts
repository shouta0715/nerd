import { useEffect, useRef, useState } from "react";

const calcTimeToStart = (startTime: string) => {
  const now = new Date();
  const start = new Date(startTime);

  const diff = start.getTime() - now.getTime();
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (diff < 0) {
    return { day: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return { day, hours, minutes, seconds };
};

export const useCountDown = (startTime: string) => {
  const [time, setTime] = useState(calcTimeToStart(startTime));

  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime((prevTime) => ({
        day:
          prevTime.hours === 0 && prevTime.day > 0
            ? prevTime.day - 1
            : prevTime.day,
        hours:
          prevTime.minutes === 0 && prevTime.hours > 0
            ? prevTime.hours - 1
            : prevTime.hours,
        minutes:
          prevTime.seconds === 0 ? prevTime.minutes - 1 : prevTime.minutes,
        seconds: prevTime.seconds === 0 ? 59 : prevTime.seconds - 1,
      }));
    }, 1000);

    if (
      time.day === 0 &&
      time.hours === 0 &&
      time.minutes === 0 &&
      time.seconds === 0
    ) {
      clearInterval(interval.current);
    }

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [time.day, time.hours, time.minutes, time.seconds]);

  return {
    minutes: time.minutes.toString().padStart(2, "0"),
    seconds: time.seconds.toString().padStart(2, "0"),
    hours: time.hours.toString().padStart(2, "0"),
  };
};
