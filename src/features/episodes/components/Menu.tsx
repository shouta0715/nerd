import React from "react";
import { Text } from "src/components/Elements/Text";
import { TimeInput } from "src/components/Elements/TimeInput";
import { MenuForm } from "src/components/Form/Menu";
import { ModeSwitch } from "src/features/timer/components/ModeSwitch";

export const Menu = ({ live = false }) => {
  return (
    <>
      <section>
        <div className="mb-2 flex items-center justify-between">
          <Text size="sm">メニュー</Text>
        </div>
        <MenuForm />
      </section>
      {!live && (
        <section className="border-t py-2 lg:py-6">
          <Text size="sm">タイマー</Text>
          <Text className="text-xs text-dimmed lg:mb-4 lg:mt-2">
            モードを変更すると経過時間から表示か残り時間から表示か変更できます。
          </Text>
          <TimeInput />
          <ModeSwitch />
        </section>
      )}
    </>
  );
};
