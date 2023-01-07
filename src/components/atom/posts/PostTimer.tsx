import React, { FC } from "react";
import { useTimer } from "../../../hooks/time/useTimer";

type Props = {
  start_time: string;
};

export const PostTimer: FC<Props> = ({ start_time }) => {
  const { time } = useTimer(start_time);
  const startTime = new Date(start_time).toString();

  return (
    <>
      <p>{startTime}</p>
      <p>
        {`開始まであと${time.days}日${time.hours}時間${time.minutes}分${time.seconds}秒`}
      </p>
    </>
  );
};
