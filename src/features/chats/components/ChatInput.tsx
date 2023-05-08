/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { FC } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Loader } from "src/components/Elements/Loader";
import { useOpenState } from "src/features/episodes/store";
import { useTimerState } from "src/features/timer/store/timerStore";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

type Props = {
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

export const ChatInput: FC<Props> = ({
  onSubmitHandler,
  isLoading,
  content,
  setContent,
}) => {
  const [user, setUser] = useUserState((state) => [state.user, state.setUser]);
  const { authLoading, setIsOpenModal } = useGlobalState((state) => ({
    authLoading: state.authLoading,
    setIsOpenModal: state.setIsOpenModal,
  }));
  const [isMenuOpen, setIsMenuOpen] = useOpenState((state) => [
    state.isMenuOpen,
    state.setIsMenuOpen,
  ]);
  const [timeObj, downInitialTime] = useTimerState((state) => [
    state.time,
    state.downInitialTime,
  ]);
  const time = timeToSecond(timeObj);
  const downTime = timeToSecond(downInitialTime);

  const getPlaceholder = () => {
    if (!user || authLoading) return "ロード中です";

    if (time === 0 || time === downTime) return "再生してください";

    return "コメントを入力";
  };

  const onHandleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // 候補が表示されているときはEnterで候補を選択する

    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      !e.nativeEvent.isComposing &&
      !isLoading
    ) {
      e.preventDefault();
      const { form } = e.currentTarget;
      if (form) {
        form.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 z-[1] w-full border-t border-solid border-slate-200  bg-white p-2 lg:sticky lg:border-0">
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
            aria-label="コメントを入力"
            className="w-full flex-1 resize-none appearance-none rounded-md border border-gray-300  px-4 py-2 pr-10 placeholder:pt-1 placeholder:font-hiragino-sans placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:border-pink-500 disabled:bg-white"
            disabled={time === 0 || authLoading || time === downTime}
            maxLength={100}
            maxRows={4}
            onChange={(e) =>
              content.length <= 100 && setContent(e.currentTarget.value)
            }
            onKeyDown={onHandleKeyDown}
            placeholder={getPlaceholder()}
            value={content}
          />
          <div className="absolute right-2 flex flex-col ">
            <div
              className={`ml-1 text-xs transition-opacity ${
                content.length === 100 ? "text-red-400" : "text-gray-500"
              }
            ${content.length < 50 ? "opacity-0" : "opacity-100"}`}
            >
              {content.length > 50 && content.length.toString()}
            </div>
            <Button
              className="h-8 w-8 rounded-full border-none bg-teal-500 p-0 active:translate-y-0 disabled:opacity-100 lg:hidden"
              disabled={
                time === 0 ||
                !user ||
                content.length === 0 ||
                content.length > 100
              }
              type="submit"
            >
              {isLoading || authLoading ? (
                <Loader color="white" size="sm" />
              ) : (
                <PaperAirplaneIcon className="h-full w-full fill-white stroke-white" />
              )}
            </Button>
          </div>
        </div>

        <button
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          className="h-6 w-6 cursor-pointer transition-transform active:translate-y-0.5 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AdjustmentsHorizontalIcon />
        </button>
        <Button
          className="hidden h-9 w-9 place-items-center rounded-full bg-teal-500 p-0 lg:grid"
          disabled={
            time === 0 || !user || content.length === 0 || content.length > 100
          }
          type="submit"
        >
          {isLoading || authLoading ? (
            <Loader color="white" size="sm" />
          ) : (
            <PaperAirplaneIcon className="h-full w-full fill-white stroke-white" />
          )}
        </Button>
      </form>
      <p className="mt-4 hidden place-items-center text-sm text-dimmed lg:grid">
        ルールを守って良識のあるコメントをしましょう
      </p>
    </div>
  );
};
