import dynamic from "next/dynamic";
import React, { FC } from "react";
import { Skeleton } from "src/components/Elements/Skeleton";

import { Text } from "src/components/Elements/Text";
import { LiveTimer, PadTime } from "src/features/timer/types";

const DynamicTimer = dynamic(
  () => import("src/features/timer/components/Timer").then((mod) => mod.Timer),
  {
    ssr: false,
    loading: () => <Skeleton theme="timer" />,
  }
);

type Props = {
  title?: string;
  sub_title?: string;
  number?: number;
  time: PadTime;
  id: string;
  mode: LiveTimer["mode"];
};

export const Header: FC<Props> = ({
  title,
  number,
  sub_title,
  time,
  id,
  mode,
}) => (
  <header className="flex flex-col px-4 lg:px-0">
    <div
      className={`flex w-full flex-1 flex-col items-center gap-y-1 lg:rounded-t-2xl lg:px-4 lg:py-6 lg:text-white ${
        mode === "up" ? "lg:bg-orange-600" : "lg:bg-indigo-600"
      }`}
    >
      <Text
        className="line-clamp-1 text-sm font-bold md:line-clamp-2 md:text-lg "
        component="h4"
      >
        {title}
      </Text>
      {sub_title && (
        <Text className="flex" component="div">
          <Text className="mr-2 text-xs md:text-base" component="p">
            第{number}話
          </Text>
          <Text
            className="line-clamp-1 flex-1 text-xs md:line-clamp-2 md:text-base"
            component="p"
          >
            {sub_title}
          </Text>
        </Text>
      )}
    </div>
    <div className="mx-auto mt-1.5 flex max-w-max flex-col md:mt-3">
      <Text
        className={`mx-auto mb-1.5 px-10 text-sm font-bold  md:text-base ${
          mode === "down"
            ? "text-indigo-600"
            : mode === "up"
            ? "text-orange-600"
            : "text-gray-600"
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
        minutes={time.minutes}
        seconds={time.seconds}
      />
    </div>
  </header>
);
