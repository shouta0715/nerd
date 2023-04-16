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
        className="mb-1.5 inline-block self-start rounded-md bg-amber-50 px-1.5 py-1 text-xs font-semibold text-amber-500"
        component="span"
      >
        開始中
      </Text>
    )}
    {mode === "down" && (
      <Text
        className="mb-1.5 inline-block self-start rounded-md bg-indigo-50 px-1.5 py-1 text-xs font-semibold text-indigo-500"
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
        className="mb-1.5 inline-block self-start rounded-md bg-pink-50 px-1.5 py-1 text-xs font-semibold text-pink-500"
        component="span"
      >
        終了しました
      </Text>
    )}
  </>
);
