/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ArrowUpIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { Avatar } from "src/components/Elements/Avatar";
import { Button } from "src/components/Elements/Button";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { useOpenState } from "src/features/episodes/store";
import { useLiveChatInput } from "src/features/live/hooks/useLiveChatInput";
import { LiveTimer, Time } from "src/features/timer/types";
import { useGlobalState } from "src/store/global/globalStore";
import { useUserState } from "src/store/user/userState";

type Props = {
  mode: LiveTimer["mode"];
  episode_id: string;
  time: Time;
  isTimerLoading: boolean;
};

export const LiveChatInput: FC<Props> = ({
  mode,
  episode_id,
  time,
  isTimerLoading,
}) => {
  const { content, setContent, onSubmitHandler, isLoading } = useLiveChatInput({
    mode,
    episode_id,
    time,
  });
  const user = useUserState((state) => state.user);
  const { authLoading, setIsOpenModal } = useGlobalState((state) => ({
    authLoading: state.authLoading,
    setIsOpenModal: state.setIsOpenModal,
  }));
  const [isMenuOpen, setIsMenuOpen] = useOpenState((state) => [
    state.isMenuOpen,
    state.setIsMenuOpen,
  ]);

  return (
    <div className="fixed bottom-0 left-0 w-full animate-fadeIn border-0 border-t border-solid border-slate-200 bg-white p-2">
      <form
        className="container mx-auto flex items-center justify-center space-x-2 opacity-100"
        onSubmit={onSubmitHandler}
      >
        <figure
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
          <ReactTextareaAutosize
            className="w-full resize-none appearance-none rounded-md border  border-gray-300 px-4 py-2 pr-10 placeholder:pt-1 placeholder:text-xs focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:border-red-500 disabled:bg-white disabled:placeholder:text-red-500"
            disabled={!user || isTimerLoading || mode === "finish"}
            maxLength={100}
            maxRows={4}
            onChange={(e) =>
              content.length <= 100 && setContent(e.currentTarget.value)
            }
            placeholder={mode === "finish" ? "終了しました" : "コメントを投稿"}
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
};
