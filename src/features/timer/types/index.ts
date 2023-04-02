export type LiveTimerProps = {
  start_time: string;
  end_time: string;
};

export type PadTime = {
  hours: string;
  minutes: string;
  seconds: string;
};

export type LiveTimer = {
  mode: "down" | "up" | "finish";
  time: PadTime;
  isTime: boolean;
};

export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
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
