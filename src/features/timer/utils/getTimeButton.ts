import { MaxTime } from "src/features/timer/store/initialState";
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
  text: "開始" | "再生" | "一時停止" | "変更" | "もう一度見る" | "設定";
};

type Props = {
  mode: "up" | "down";
  isChangeTime: boolean;
  time: number;
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

  if (time === 0) {
    return {
      color: "bg-blue-600",
      text: "開始",
    };
  }

  if (time === timeToSecond(mode === "up" ? MaxTime : downInitialTime)) {
    return {
      color: "bg-gray-600",
      text: "もう一度見る",
    };
  }

  return {
    color: "bg-indigo-600",
    text: "再生",
  };
};
