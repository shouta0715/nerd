/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from "react";
import { TalkForm } from "src/components/Form/Talk";
import { useCommentLogic } from "src/features/comments/common/hooks/useCommentLogic";

type Props = {
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

export const CommentInput: FC<Props> = ({ onSubmitHandler, isLoading }) => {
  const { content, onBlurHandler, onChangeHandler, inputRef, genPlaceholder } =
    useCommentLogic();

  return (
    <div className="fixed bottom-0 left-0 z-[1] w-full border-t border-solid border-slate-200 bg-white p-2 lg:relative lg:border-0 lg:bg-transparent lg:p-0">
      <TalkForm
        ref={inputRef}
        isLoading={isLoading}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        placeholder={genPlaceholder()}
        validLength={300}
        value={content}
      />
      <p className="mt-4 hidden place-items-center text-sm text-dimmed lg:grid ">
        ルールを守って良識のあるコメントをしましょう
      </p>
    </div>
  );
};
