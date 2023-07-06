import { ArrowPathIcon, ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { FC } from "react";
import { Loader } from "src/components/Elements/Loader";
import { Chat } from "src/features/chats/components/Chat";
import { useLiveChats } from "src/features/live/hooks/useLiveChats";
import { LiveTimer, Time } from "src/features/timer/types";
import { useUserState } from "src/store/user/userState";

type Props = {
  episode_id: string;
  mode: LiveTimer["mode"];
  time: Time;
};

export const LiveChats: FC<Props> = ({ episode_id, mode, time }) => {
  const {
    data,
    handleRefetch,
    isLoading,
    isBottom,
    isRefetching,
    wsErrorRefetch,
    isLoadingWsRefetch,
    isWsError,
    isSubscription,
  } = useLiveChats({
    episode_id,
    mode,
    time,
  });
  const user = useUserState((state) => state.user);

  if (!user || isLoading) {
    return <Loader className="m-auto" size="xl" variant="dots" />;
  }

  return (
    <>
      <ul className="flex w-full flex-1 flex-col space-y-3 px-2  pb-2 pt-4 md:px-4">
        <p className="flex max-w-full justify-center break-words text-sm text-dimmed">
          {isSubscription && "リアルタイムで更新されます"}
          {mode === "finish" && "終了しました"}
          {(mode === "down" || mode === "notRegister" || isWsError) &&
            "右下のボタンを押すと、最新のコメントを読み込めます"}
        </p>
        {data?.map((chats) => (
          <Chat key={chats.id} chat={chats} />
        ))}
      </ul>
      <div className="sticky bottom-20 flex w-full justify-between px-2 lg:px-3">
        <button
          className={clsx(
            "flex h-9 w-9  cursor-pointer items-center justify-center  rounded-full border-none bg-indigo-600 shadow-md shadow-indigo-400 transition-all active:translate-y-1",
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
        <div
          className={clsx(
            "grid h-10 w-10 place-items-center  rounded-full bg-red-600 shadow-md shadow-red-400 transition-transform active:translate-y-1 lg:right-14",
            isSubscription || mode === "finish" ? "hidden" : "block"
          )}
        >
          {isRefetching || isLoadingWsRefetch ? (
            <Loader size="xl" theme="white" />
          ) : (
            <button
              className="grid h-full w-full place-items-center text-white "
              onClick={isWsError ? wsErrorRefetch : handleRefetch}
            >
              <ArrowPathIcon className="h-6 w-6 stroke-white" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
