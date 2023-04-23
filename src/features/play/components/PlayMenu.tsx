/* eslint-disable no-unused-expressions */
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { Input } from "src/components/Elements/Input/Input";
import { Text } from "src/components/Elements/Text";
import { PlayTimeInput } from "src/features/play/components/PlayTimeInput";
import { useInputMenu } from "src/features/play/hooks/useInputMenu";
import { ModeSwitch } from "src/features/timer/components/ModeSwitch";

type Props = {
  setIsCountDownModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCountDownModalOpen: boolean;
};

export const PlayMenu: FC<Props> = ({
  setIsCountDownModalOpen,
  isCountDownModalOpen,
}) => {
  const { onSubmitHandler, inputValue, setInputValue, setIsMenuOpen, user } =
    useInputMenu();

  return (
    <section className="px-4 py-2">
      <div className="mb-2 flex items-center justify-between">
        <Text className="text-dimmed" size="sm">
          メニュー
        </Text>
        <XMarkIcon
          aria-label="Close modal"
          className="h-4 w-4 cursor-pointer text-dimmed lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
      <form className="mb-3 space-y-1" onSubmit={onSubmitHandler}>
        <label className="flex items-center" htmlFor="commenter-name-input">
          <PencilIcon className="mr-1 h-4 w-4" />
          <Text className="text-xs" component="span">
            投稿名の変更
          </Text>
          <Button
            className={`ml-auto rounded bg-indigo-500 px-2 py-1 text-xs font-bold text-white transition-transform active:translate-y-0.5 ${
              inputValue === user?.user_name || !inputValue.trim()
                ? "pointer-events-none opacity-0"
                : "opacity-100"
            }`}
            onClick={() => {
              if (!inputValue.trim()) setInputValue(user?.user_name ?? "");
            }}
            type="submit"
          >
            変更
          </Button>
        </label>
        <Input
          className="py-1 font-hiragino-sans"
          id="commenter-name-input"
          inputSize="xs"
          maxLength={30}
          onBlur={() => {
            if (!inputValue.trim()) setInputValue(user?.user_name ?? "");
          }}
          onChange={(e) => {
            if (e.target.value.length > 30) return;
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
      </form>
      <PlayTimeInput />
      <ModeSwitch
        isOpen={isCountDownModalOpen}
        setIsOpen={setIsCountDownModalOpen}
      />
    </section>
  );
};
