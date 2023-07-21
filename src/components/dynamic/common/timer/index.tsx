import React from "react";
import { Text } from "src/components/Elements/Text";
import { TimeInput } from "src/components/Elements/TimeInput";
import { SetTimerModal } from "src/components/Modal/SetTimer";
import { ModeSwitch } from "src/features/timer/components/ModeSwitch";

export const Timer = () => {
  return (
    <>
      <Text size="sm">タイマー</Text>
      <TimeInput />
      <ModeSwitch />
      <SetTimerModal />
    </>
  );
};
