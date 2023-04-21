import dynamic from "next/dynamic";
import React, { FC } from "react";
import { TimerSkelton } from "src/components/Elements/Loader/loaders/TimerSkelton";
import { Text } from "src/components/Elements/Text";
import { LiveTimer, PadTime } from "src/features/timer/types";

const DynamicTimer = dynamic(
  () => import("src/features/timer/components/Timer").then((mod) => mod.Timer),
  {
    ssr: false,
    loading: () => <TimerSkelton />,
  }
);

type Props = {
  title?: string;
  episode_title?: string;
  episode_number?: number;
  time: PadTime;
  id: string;
  isTimeLoading: boolean;
  mode: LiveTimer["mode"];
};

export const LiveHeader: FC<Props> = ({
  title,
  episode_number,
  episode_title,
  time,
  id,
  isTimeLoading,
  mode,
}) => (
  <header className="container mx-auto mb-2 flex flex-col bg-white p-6 pb-0">
    <div className="flex w-full flex-1 flex-col items-center gap-2">
      <Text
        className=" text-base font-bold md:text-lg"
        component="h4"
        ff="Hiragino Sans"
      >
        {title}
      </Text>
      <Text className="flex" component="div">
        <Text
          className="mr-2 text-sm md:text-base"
          component="p"
          ff="Hiragino Sans"
        >
          第{episode_number}話
        </Text>
        <Text
          className="line-clamp-3 flex-1 text-sm md:text-base"
          component="p"
          ff="Hiragino Sans"
        >
          {episode_title}
        </Text>
      </Text>
    </div>
    <div className="mx-auto mt-3 flex max-w-max flex-col">
      <Text
        className={`m-0 mx-auto mb-1.5 px-10 text-sm font-bold  md:text-base ${
          mode === "down"
            ? "text-indigo-500"
            : mode === "up"
            ? "text-orange-500"
            : "text-gray-500"
        }`}
      >
        {mode === "up" && "開始から"}
        {mode === "down" && "開始まで"}
        {mode === "finish" && "終了しました"}
        {mode === "notRegister" && "放送日までお待ち下さい"}
      </Text>
      <DynamicTimer
        hours={time.hours}
        id={id}
        isTimeLoading={isTimeLoading}
        minutes={time.minutes}
        seconds={time.seconds}
      />
    </div>
  </header>
);
