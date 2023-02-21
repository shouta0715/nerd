/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useCountDown = (startTime: string) => {
  const [time, setTime] = useState({
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const calcTimeToStart = () => {
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

  useEffect(() => {
    const { day, hours, minutes, seconds } = calcTimeToStart();

    setTime({ day, hours, minutes, seconds });

    const countDown = setInterval(() => {
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
      clearInterval(countDown);
    }

    return () => {
      clearInterval(countDown);
    };
  }, [time.day, time.hours, time.minutes, time.seconds]);

  return { time };
};
