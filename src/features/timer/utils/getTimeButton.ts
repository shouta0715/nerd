import { LiveTimer } from "src/features/timer/types";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";

type Result = {
  color:
    | "bg-indigo-600"
    | "bg-red-600"
    | "bg-green-600"
    | "bg-blue-600"
    | "bg-teal-600"
    | "bg-gray-600";
  text: "開始" | "再生" | "一時停止" | "変更" | "終了" | "設定";
};

type Props = {
  mode: "up" | "down";
  isChangeTime: boolean;
  time: LiveTimer["time"];
  downInitialTime: LiveTimer["time"];
  active: boolean;
};

export const getTimeButton = ({
  mode,
  isChangeTime,
  downInitialTime,
  active,
  time,
}: Props): Result => {
  if (isChangeTime) {
    return {
      color: "bg-green-600",
      text: "変更",
    };
  }

  if (active) {
    return {
      color: "bg-red-600",
      text: "一時停止",
    };
  }

  if (mode === "down" && timeToSecond(downInitialTime) === 0) {
    return {
      color: "bg-teal-600",
      text: "設定",
    };
  }

  if (mode === "up") {
    const { hours, seconds, minutes } = time;

    if (hours === 0 && seconds === 0 && minutes === 0) {
      return {
        color: "bg-blue-600",
        text: "開始",
      };
    }

    return {
      color: "bg-indigo-600",
      text: "再生",
    };
  }

  if (mode === "down") {
    if (timeToSecond(downInitialTime) === timeToSecond(time)) {
      return {
        color: "bg-blue-600",
        text: "開始",
      };
    }

    if (timeToSecond(time) === 0) {
      return {
        color: "bg-gray-600",
        text: "終了",
      };
    }

    return {
      color: "bg-indigo-600",
      text: "再生",
    };
  }

  return {
    color: "bg-gray-600",
    text: "終了",
  };
};
