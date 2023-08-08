/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC } from "react";
import { TalkForm } from "src/components/Form/Talk";
import { useChatInput } from "src/features/chats/common/hooks/useChatInput";

type Props = {
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  value: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

export const ChatInput: FC<Props> = ({
  onSubmitHandler,
  isLoading,
  value,
  setContent,
}) => {
  const { onChangeHandler, timeDisabled, getPlaceholder } = useChatInput({
    setContent,
  });

  return (
    <div className="fixed bottom-0 left-0 z-[1] w-full border-t border-solid border-slate-200 bg-white p-2 lg:relative lg:border-0 lg:bg-transparent lg:p-0">
      <TalkForm
        disabled={timeDisabled}
        isLoading={isLoading}
        onChange={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        placeholder={getPlaceholder()}
        value={value}
      />
      <p className="mt-4 hidden place-items-center text-sm text-dimmed lg:grid ">
        ルールを守って良識のあるコメントをしましょう
      </p>
    </div>
  );
};
