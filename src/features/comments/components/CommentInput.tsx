/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { FC, useEffect, useRef } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { useInputCommentState, useRefState } from "src/features/comments/store";
import { useOpenState } from "src/features/episodes/store";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

type Props = {
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
};

export const CommentInput: FC<Props> = ({ onSubmitHandler, isLoading }) => {
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);
  const { authLoading, setIsOpenModal } = useGlobalState((state) => ({
    authLoading: state.authLoading,
    setIsOpenModal: state.setIsOpenModal,
  }));
  const [isMenuOpen, setIsMenuOpen] = useOpenState((state) => [
    state.isMenuOpen,
    state.setIsMenuOpen,
  ]);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const setInputRef = useRefState((state) => state.setInputRef);
  const [inputState, setInputComment] = useInputCommentState((state) => [
    state.inputComment,
    state.setInputComment,
  ]);

  const onHandleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      const { form } = e.currentTarget;
      if (form) {
        form.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      }
    }
  };

  useEffect(() => {
    setInputRef(inputRef);
  }, [setInputRef]);

  return (
    <div className="fixed bottom-0 left-0 z-[1] w-full border-t border-solid border-slate-200 bg-white p-2 lg:relative lg:mt-4 lg:border-0">
      <form
        className="flex items-center justify-center space-x-2 opacity-100 lg:justify-between lg:space-x-6"
        onSubmit={onSubmitHandler}
      >
        <button
          onClick={() => {
            if (user?.anonymous) setIsOpenModal(true);

            if (!user?.anonymous && user)
              setUser({ ...user, isDefaultPhoto: !user.isDefaultPhoto });
          }}
        >
          {authLoading ? (
            <Loader />
          ) : user?.isDefaultPhoto ? (
            <Image
              alt="avatar"
              className="rounded-full object-contain"
              height={38}
              src={user?.photo_url ?? ""}
              width={38}
            />
          ) : (
            <Avatar
              user_id={user?.id ?? ""}
              user_name={user?.user_name ?? ""}
            />
          )}
        </button>
        <div className="relative mr-2  flex  flex-1 items-center">
          <ReactTextareaAutosize
            className="w-full flex-1 resize-none appearance-none rounded-md border  border-gray-300 px-4 py-2 pr-10 placeholder:pt-1 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:border-red-500 disabled:bg-white disabled:placeholder:text-red-500"
            disabled={!user}
            maxLength={100}
            maxRows={4}
            minRows={1}
            onBlur={() => {
              if (!inputState.content) {
                setInputComment({
                  ...inputState,
                  replied_to_commenter_name: null,
                  reply_to: null,
                });
              }
            }}
            onChange={(e) =>
              setInputComment({
                ...inputState,
                content: e.target.value,
              })
            }
            onKeyDown={onHandleKeyDown}
            placeholder={
              inputState.replied_to_commenter_name
                ? `${inputState.replied_to_commenter_name}さんに返信`
                : `コメントを入力してください`
            }
            value={inputState.content}
          />
          <div className="absolute right-2 flex flex-col ">
            <div
              className={`ml-1 text-xs transition-opacity ${
                inputState.content.length === 100
                  ? "text-red-400"
                  : "text-gray-500"
              }
        ${inputState.content.length < 50 ? "opacity-0" : "opacity-100"}`}
            >
              {inputState.content.length > 50 &&
                inputState.content.length.toString()}
            </div>
            <Button
              className="h-8 w-8 border-none bg-teal-500 p-0 active:translate-y-0 lg:hidden"
              radius="full"
              type="submit"
            >
              {isLoading ? (
                <Loader color="green" size="sm" />
              ) : (
                <PaperAirplaneIcon className=" h-4 w-4 fill-white stroke-white" />
              )}
            </Button>
          </div>
        </div>

        <Cog8ToothIcon
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          className="h-6 w-6 cursor-pointer stroke-indigo-500 transition-transform active:scale-90 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <Button
          className="hidden h-9 w-9 place-items-center rounded-full bg-teal-500 p-0 lg:grid"
          type="submit"
        >
          {isLoading || !user ? (
            <Loader color="white" size="sm" />
          ) : (
            <PaperAirplaneIcon className="h-full w-full fill-white stroke-white" />
          )}
        </Button>
      </form>
    </div>
  );
};
