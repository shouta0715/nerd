import { ArrowDownIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { Button } from "src/components/Elements/Button";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { LiveChat } from "src/features/live/components/LiveChat";
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
  const { data, isBottom, entry, isRefetching, handleRefetch, isLoading, ref } =
    useLiveChats({
      time,
      episode_id,
      mode,
      isTimerLoading,
    });
  const user = useUserState((state) => state.user);

  if (!user || isLoading) {
    return <Loader className="m-auto" variant="dots" />;
  }

  return (
    <ul className=" mx-auto w-full flex-1 space-y-3 px-4 pb-1 pt-4 md:max-w-xl">
      {data?.map((chats) => (
        <LiveChat key={chats.id} chat={chats} />
      ))}
      <button
        className={`fixed bottom-[4.5rem] left-1/2 z-0 flex h-7 w-7 -translate-x-1/2   cursor-pointer items-center  justify-center rounded-full border-none bg-indigo-500 shadow-md shadow-black/[0.3]  transition-all active:translate-y-1 ${
          isBottom ? "translate-y-10 opacity-0" : "opacity-1 translate-y-0"
        }`}
        onClick={() => {
          entry?.target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ArrowDownIcon className="h-4 w-4 fill-white stroke-white stroke-2 text-white" />
      </button>
      <div className="border-t py-4">
        {isRefetching ? (
          <Loader className="mx-auto" variant="dots" />
        ) : (
          <Button
            ref={ref}
            className="mx-auto bg-indigo-500 text-white"
            onClick={handleRefetch}
            size="sm"
          >
            最新のコメントを読み込む
          </Button>
        )}
      </div>
    </ul>
  );
};
