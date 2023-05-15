import { ArrowDownIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import RotateArrowIcon from "public/icons/RotateArrowRightIcon.svg";
import { Loader } from "src/components/Elements/Loader";
import { Chat } from "src/features/chats/components/Chat";
import { useLiveChats } from "src/features/live/hooks/useLiveChats";
import { LiveTimer } from "src/features/timer/types";
import { useUserState } from "src/store/user/userState";

type Props = {
  time: LiveTimer["time"];
  episode_id: string;
  mode: LiveTimer["mode"];
  isTimerLoading: boolean;
};

export const LiveChats: FC<Props> = ({
  time,
  episode_id,
  mode,
  isTimerLoading,
}) => {
  const {
    data,
    isBottom,
    entry,
    isRefetching,
    handleRefetch,
    isLoading,
    bottomRef,
  } = useLiveChats({
    time,
    episode_id,
    mode,
    isTimerLoading,
  });
  const user = useUserState((state) => state.user);

  if (!user || isLoading) {
    return <Loader className="m-auto" size="xl" variant="dots" />;
  }

  return (
    <ul className="relative  flex w-full flex-1 flex-col space-y-3 px-2  py-4 md:px-4">
      <p className="flex max-w-full justify-center break-words text-sm text-dimmed">
        右下のボタンを押すと、最新のコメントを読み込めます。
      </p>
      {data?.map((chats) => (
        <Chat key={chats.id} animate={mode === "up"} chat={chats} />
      ))}
      <button
        className={`fixed bottom-[4.5rem] left-1/2 z-0 flex h-7 w-7 -translate-x-1/2 cursor-pointer items-center justify-center   rounded-full border-none  bg-indigo-500 shadow-md shadow-black/[0.3] transition-all active:translate-y-1 lg:bottom-10  lg:left-3/4 lg:-translate-x-3/4 ${
          isBottom || isBottom === undefined
            ? "translate-y-10 opacity-0 lg:hidden"
            : "opacity-1 translate-y-0"
        }`}
        onClick={() => {
          entry?.target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ArrowDownIcon className="h-4 w-4 fill-white stroke-white stroke-2 text-white" />
      </button>
      <div className="fixed bottom-20 right-2 grid h-11 w-11 place-items-center rounded-full bg-indigo-500 shadow-md shadow-indigo-400 transition-transform active:translate-y-1 lg:right-14">
        {isRefetching ? (
          <Loader color="white" size="sm" />
        ) : (
          <button
            className="grid h-full w-full place-items-center text-white "
            onClick={handleRefetch}
          >
            <RotateArrowIcon className="h-5 w-5 fill-transparent stroke-white stroke-2" />
          </button>
        )}
      </div>
      <div ref={bottomRef} className="absolute bottom-0 opacity-0" />
    </ul>
  );
};
