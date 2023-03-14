/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { IconArrowUp, IconSettings } from "@tabler/icons";
import React, { FC, memo } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Loader } from "src/components/Elements/Loader/Loader";
import { useSubmitComment } from "src/features/comments/hooks/useSubmitComment";
import { useInputCommentState } from "src/features/comments/store";
import { useOpenState } from "src/features/episodes/store";
import { useTimerState } from "src/features/timer/store/timerStore";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

type Props = {
  episode_id: string;
};

export const InputFiled: FC<Props> = memo(({ episode_id }) => {
  const { content } = useInputCommentState((state) => state.inputComment);
  const setInputComment = useInputCommentState(
    (state) => state.setInputComment
  );
  const { onSubmitHandler, isLoading } = useSubmitComment({ episode_id });
  const user = useUserState((state) => state.user);
  const setIsOpenModal = useGlobalState((state) => state.setIsOpenModal);
  const authLoading = useGlobalState((state) => state.authLoading);
  const setIsMenuOpen = useOpenState((state) => state.setIsMenuOpen);
  const isMenuOpen = useOpenState((state) => state.isMenuOpen);
  const time = useTimerState((state) => state.getTime());

  return (
    <div className="fixed left-0 bottom-0 w-full animate-fadeIn border-0 border-t border-solid border-slate-200 bg-white px-4 py-2">
      <form
        className="container mx-auto flex items-center justify-center opacity-100"
        onSubmit={onSubmitHandler}
      >
        <figure
          className="m-0 mr-2"
          onClick={() => {
            if (user?.anonymous) setIsOpenModal(true);
          }}
        >
          {authLoading ? (
            <Loader />
          ) : (
            <Avatar
              user_id={user?.id ?? ""}
              user_name={user?.user_name ?? ""}
            />
          )}
        </figure>
        <div className="relative mr-2  flex max-w-sm flex-1 items-center">
          <TextareaAutosize
            disabled={time === 0 || !user}
            placeholder={
              user && time !== 0
                ? `コメントを入力`
                : !user
                ? "ログイン中です"
                : "再生してください"
            }
            className="w-full resize-none appearance-none rounded-full border  border-gray-300 py-2 px-4 pr-10  placeholder:pt-0.5 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:border-red-500 disabled:bg-white disabled:placeholder:text-red-500"
            maxRows={4}
            maxLength={100}
            value={content}
            onChange={(e) =>
              content.length <= 100 &&
              setInputComment({
                content: e.currentTarget.value,
              })
            }
          />
          <div className="absolute right-2 flex flex-col ">
            <div
              className={`text-xs transition-opacity ${
                content.length === 100 ? "text-red-400" : "text-gray-500"
              }
                  ${content.length < 50 ? "opacity-0" : "opacity-100"}`}
            >
              {content.length > 50 && content.length.toString()}
            </div>
            <Button
              className="h-8 w-8 border-none bg-teal-50 p-0"
              type="submit"
              radius="full"
            >
              {isLoading ? (
                <Loader size="sm" color="green" />
              ) : (
                <IconArrowUp className=" stroke-teal-500" />
              )}
            </Button>
          </div>
        </div>

        <IconSettings
          className="cursor-pointer stroke-indigo-500 transition-transform active:scale-90 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        />
      </form>
    </div>
  );
});
