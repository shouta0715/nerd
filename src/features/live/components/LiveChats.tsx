import { ArrowPathIcon, ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { FC } from "react";
import { Loader } from "src/components/Elements/Loader";
import { Chat } from "src/features/chats/components/Chat";
import { useLiveChats } from "src/features/live/hooks/useLiveChats";
import { LiveTimer } from "src/features/timer/types";
import { useUserState } from "src/store/user/userState";

type Props = {
  time: LiveTimer["time"];
  episode_id: string;
  mode: LiveTimer["mode"];
};

export const LiveChats: FC<Props> = ({ time, episode_id, mode }) => {
  const { data, isRefetching, handleRefetch, isLoading, isBottom } =
    useLiveChats({
      time,
      episode_id,
      mode,
    });
  const user = useUserState((state) => state.user);

  if (!user || isLoading) {
    return <Loader className="m-auto" size="xl" variant="dots" />;
  }

  return (
    <ul className="relative flex w-full flex-1 flex-col space-y-3 px-2  pb-2 pt-4 md:px-4">
      <p className="flex max-w-full justify-center break-words text-sm text-dimmed">
        右下のボタンを押すと、最新のコメントを読み込めます。
      </p>
      {data?.map((chats) => (
        <Chat key={chats.id} animate={mode === "up"} chat={chats} />
      ))}

      <div className="sticky bottom-20 flex w-full justify-start lg:bottom-4">
        <button
          className={clsx(
            "flex h-9 w-9 cursor-pointer items-center justify-center  rounded-full border-none bg-indigo-600 shadow-md shadow-indigo-400 transition-all active:translate-y-1",
            isBottom ? "pointer-events-none opacity-0" : " opacity-100"
          )}
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          <ArrowSmallDownIcon className="h-5 w-5 fill-white stroke-white stroke-2 text-white" />
        </button>
      </div>
      <div className="fixed bottom-20 right-2 grid h-11 w-11 place-items-center rounded-full bg-red-600 shadow-md shadow-red-400 transition-transform active:translate-y-1 lg:right-14">
        {isRefetching ? (
          <Loader size="xl" theme="white" />
        ) : (
          <button
            className="grid h-full w-full place-items-center text-white "
            onClick={handleRefetch}
          >
            <ArrowPathIcon className="h-6 w-6 stroke-white" />
          </button>
        )}
      </div>
    </ul>
  );
};
