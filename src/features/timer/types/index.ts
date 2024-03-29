export type LiveTimerProps = {
  start_time: string | null;
  end_time: string | null;
};

export type PadTime = {
  hours: string;
  minutes: string;
  seconds: string;
};

export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type LiveTimer = {
  mode: "down" | "up" | "finish" | "notRegister";
  time: Time;
  isFinished: boolean;
  isAlreadyFinished: boolean | null;
};

export type CountDownProps = {
  prevTime: Time;
  setMode: React.Dispatch<React.SetStateAction<LiveTimer["mode"]>>;
  intervalId: React.MutableRefObject<NodeJS.Timeout | null>;
};

export type CountUpProps = {
  prevTime: Time;
  setMode: React.Dispatch<React.SetStateAction<LiveTimer["mode"]>>;
  intervalId: React.MutableRefObject<NodeJS.Timeout | null>;
  maxTime: Time;
};
