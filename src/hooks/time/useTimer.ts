import { useCallback, useEffect, useState } from "react";

export const useTimer = (startTime: string) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const calcTimeToStart = useCallback(() => {
    const UTCTime = new Date(startTime);
    const japanTime = UTCTime.toLocaleString("ja-JP", {
      timeZone: "Europe/London",
    });
    const now = new Date();
    const start = new Date(japanTime);

    const diff = start.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if (diff < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return { days, hours, minutes, seconds };
  }, []);

  useEffect(() => {
    const { days, hours, minutes, seconds } = calcTimeToStart();
    setTime({ days, hours, minutes, seconds });

    const countDown = setInterval(() => {
      setTime((prevTime) => ({
        days:
          prevTime.hours === 0 && prevTime.days > 0
            ? prevTime.days - 1
            : prevTime.days,
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
      time.days === 0 &&
      time.hours === 0 &&
      time.minutes === 0 &&
      time.seconds === 0
    ) {
      clearInterval(countDown);
    }

    return () => {
      clearInterval(countDown);
    };
  }, [calcTimeToStart, time.days, time.hours, time.minutes, time.seconds]);

  return { time };
};
