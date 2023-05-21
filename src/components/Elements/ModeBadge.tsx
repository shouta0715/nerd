import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { LiveTimer } from "src/features/timer/types";

type Props = {
  mode: LiveTimer["mode"];
  start_time: string;
};

export const ModeBadge: FC<Props> = ({ mode, start_time }) => (
  <>
    {mode === "up" && (
      <Text
        className="-ml-1 -mt-1 mb-1.5 inline-flex items-center self-start rounded-md bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-700/10"
        component="span"
      >
        開始中
      </Text>
    )}
    {mode === "down" && (
      <Text
        className="-ml-1 -mt-1 mb-1.5 inline-flex items-center self-start rounded-md bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
        component="span"
      >
        {new Date(start_time).toLocaleString("ja-JP", {
          month: "narrow",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
        より開始
      </Text>
    )}
    {mode === "finish" && (
      <Text
        className="-ml-1 -mt-1 mb-1.5 inline-flex items-center self-start rounded-md bg-pink-50 px-2 py-1 text-xs font-semibold text-pink-700 ring-1 ring-inset ring-pink-700/10"
        component="span"
      >
        終了しました
      </Text>
    )}
  </>
);
