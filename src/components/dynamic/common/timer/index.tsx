import React from "react";
import { Text } from "src/components/Elements/Text";
import { TimeInput } from "src/components/Elements/TimeInput";
import { SetTimerModal } from "src/components/Modal/SetTimer";
import { ModeSwitch } from "src/features/timer/components/ModeSwitch";

export const Timer = () => {
  return (
    <>
      <Text size="sm">タイマー</Text>
      <Text className="text-xs text-dimmed lg:mb-4 lg:mt-2">
        モードを変更すると経過時間から表示か残り時間から表示か変更できます。
      </Text>
      <TimeInput />
      <ModeSwitch />
      <SetTimerModal />
    </>
  );
};
