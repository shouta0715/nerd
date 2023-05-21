/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { Text } from "src/components/Elements/Text";
import { TimeInput } from "src/components/Elements/TimeInput";
import { MenuForm } from "src/components/Form/Menu";
import { MenuWrapper } from "src/components/Wrapper/Menu";
import { useOpenState } from "src/features/episodes/store";
import { ModeSwitch } from "src/features/timer/components/ModeSwitch";

type Props = {
  children?: React.ReactNode;
  live?: boolean;
};

export const Menu: FC<Props> = ({ children, live = false }) => {
  const setIsMenuOpen = useOpenState((state) => state.setIsMenuOpen);

  return (
    <MenuWrapper>
      <section className="px-6 py-5">
        <div className="mb-2 flex items-center justify-between">
          <Text className="text-dimmed" size="sm">
            メニュー
          </Text>
          <button
            className="h-5 w-5 transition-transform active:translate-y-0.5 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          >
            <XMarkIcon />
          </button>
        </div>
        <MenuForm />
        {!live && (
          <>
            <TimeInput />
            <ModeSwitch />
          </>
        )}
      </section>
      {children}
    </MenuWrapper>
  );
};
