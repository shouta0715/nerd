/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
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
            className="w-full resize-none appearance-none rounded-full border  border-gray-300 py-2 px-4 pr-10 placeholder:pt-1 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:border-red-500 disabled:bg-white disabled:placeholder:text-red-500"
            disabled={time === 0 || !user}
            maxLength={100}
            maxRows={4}
            onChange={(e) =>
              content.length <= 100 &&
              setInputComment({
                content: e.currentTarget.value,
              })
            }
            placeholder={
              user && time !== 0
                ? `コメントを入力`
                : !user
                ? "ログイン中です"
                : "再生してください"
            }
            value={content}
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
              className="h-8 w-8 border-none bg-teal-50 p-0 active:translate-y-0"
              radius="full"
              type="submit"
            >
              {isLoading ? (
                <Loader color="green" size="sm" />
              ) : (
                <ArrowUpIcon className=" h-4 w-4 stroke-teal-500" />
              )}
            </Button>
          </div>
        </div>

        <Cog8ToothIcon
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          className="h-6 w-6 cursor-pointer stroke-indigo-500 transition-transform active:scale-90 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </form>
    </div>
  );
});
