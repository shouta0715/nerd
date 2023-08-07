import React, { useEffect, useRef } from "react";
import {
  useInputCommentState,
  useRefState,
} from "src/features/comments/common/store";

export const useCommentLogic = () => {
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

  return {
    inputRef,
    onBlurHandler,
    onChangeHandler,
    genPlaceholder,
    content,
  };
};
