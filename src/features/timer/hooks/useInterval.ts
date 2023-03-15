import { useEffect, useRef, useState } from "react";

type UseInterval = {
  toggle: () => void;
  start: () => void;
  stop: () => void;
  active: boolean;
};

export const useInterval = (fn: () => void, interval: number): UseInterval => {
  const fnRef = useRef<() => void>();
  const intervalRef = useRef<number>();
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const start = () => {
    setActive((old) => {
      if (!old && !intervalRef.current && fnRef.current) {
        intervalRef.current = window.setInterval(fnRef.current, interval);
      }

      return true;
    });
  };

  const stop = () => {
    setActive(false);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }

    intervalRef.current = undefined;
  };

  const toggle = () => {
    if (active) {
      stop();
    } else {
      start();
    }
  };

  return { toggle, start, stop, active };
};
