/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from "react";
import { TalkForm } from "src/components/Form/Talk";
import { useLiveChatInput } from "src/features/live/hooks/useLiveChatInput";
import { LiveTimer, Time } from "src/features/timer/types";

type Props = {
  mode: LiveTimer["mode"];
  episode_id: string;
  time: Time;
};

export const LiveChatInput: FC<Props> = ({ mode, episode_id, time }) => {
  const { value, setValue, onSubmitHandler, isLoading } = useLiveChatInput({
    mode,
    episode_id,
    time,
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length <= 100) setValue(e.currentTarget.value);
  };

  const genPlaceholder = () => {
    if (mode === "finish") return "終了しました";

    return `コメントを入力してください`;
  };

  return (
    <div className="fixed bottom-0 left-0 z-[1] w-full border-t border-solid border-slate-200  bg-white p-2 lg:sticky lg:border-0">
      <TalkForm
        disabled={mode === "finish"}
        isLoading={isLoading}
        onChange={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        placeholder={genPlaceholder()}
        value={value}
      />
      <p className="mt-4 hidden place-items-center text-sm text-dimmed lg:grid">
        ルールを守って良識のあるコメントをしましょう
      </p>
    </div>
  );
};
