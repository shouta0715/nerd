/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useEffect, useRef } from "react";
import { TalkForm } from "src/components/Form/Talk";
import { useInputCommentState, useRefState } from "src/features/comments/store";

type Props = {
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

export const CommentInput: FC<Props> = ({ onSubmitHandler, isLoading }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const setInputRef = useRefState((state) => state.setInputRef);
  const [inputState, setInputComment, content, setContent] =
    useInputCommentState((state) => [
      state.inputComment,
      state.setInputComment,
      state.content,
      state.setContent,
    ]);

  useEffect(() => {
    const isVisited = inputRef.current?.clientHeight !== 0;

    if (inputRef.current && isVisited) setInputRef(inputRef);
  }, [setInputRef]);

  const onBlurHandler = () => {
    if (content) return;
    setInputComment({
      replied_to_commenter_name: null,
      reply_to: null,
    });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length <= 300) setContent(e.currentTarget.value);
  };

  const genPlaceholder = () => {
    if (inputState.replied_to_commenter_name)
      return `${inputState.replied_to_commenter_name}さんに返信`;

    return `コメントを入力してください`;
  };

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
      <p className="mt-4 hidden place-items-center text-sm text-dimmed lg:grid">
        ルールを守って良識のあるコメントをしましょう
      </p>
    </div>
  );
};
