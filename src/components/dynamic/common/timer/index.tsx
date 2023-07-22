import React from "react";
import { Text } from "src/components/Elements/Text";
import { TimeInput } from "src/components/Elements/TimeInput";
import { SetTimerModal } from "src/components/Modal/SetTimer";
import { ModeSwitch } from "src/features/timer/components/ModeSwitch";

export const Timer = () => {
  return (
    <>
      <Text size="sm">タイマー</Text>
      <Text className="mb-2 text-dimmed" size="xs">
        表示されているタイマーの時間などを変更できます。
      </Text>
      <TimeInput />
      <ModeSwitch />
      <SetTimerModal />
    </>
  );
};
