import { Transition } from "@headlessui/react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import { Loader } from "src/components/Elements/Loader/loaders/Loader";
import { Chat } from "src/features/chats/components/Chat";
import { Chat as TypeChat } from "src/features/chats/types";
import { useTimerState } from "src/features/timer/store/timerStore";

type Props = {
  chats: TypeChat[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bottomRef: (element: any) => void;
  isBottom?: boolean;
  entry: IntersectionObserverEntry | null;
  time: number;
  isLoading: boolean;
};

export const Chats: FC<Props> = ({
  chats,
  bottomRef,
  isBottom,
  entry,
  time,
  isLoading,
}) => {
  const interval = useTimerState((state) => state.interval);

  return (
    <ul className="relative mx-auto flex w-full flex-1 flex-col space-y-3 px-2 pb-1 pt-4 md:max-w-xl md:px-4">
      <Transition
        as="button"
        className="m-auto grid place-items-center rounded-full border bg-black p-4 transition-all"
        disabled={isLoading}
        enter="duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onClick={interval.start}
        show={time === 0 && !interval.active}
      >
        {isLoading ? (
          <Loader color="white" size="lg" />
        ) : (
          <PlayIcon className="h-10 w-10 fill-white" />
        )}
      </Transition>

      {chats?.map((comment) => (
        <Chat key={comment.id} animate chat={comment} />
      ))}
      <button
        className={`fixed bottom-[4.5rem] left-1/2 z-0 flex h-7 w-7 -translate-x-1/2   cursor-pointer items-center  justify-center rounded-full border-none bg-indigo-500 shadow-md shadow-black/[0.3]  transition-all active:translate-y-1 ${
          isBottom || time === 0
            ? "translate-y-10 opacity-0"
            : "opacity-1 translate-y-0"
        }`}
        onClick={() => {
          entry?.target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ArrowDownIcon className="h-4 w-4 fill-white stroke-white stroke-2 text-white" />
      </button>
      <div ref={bottomRef} className="absolute bottom-0 opacity-0" />
    </ul>
  );
};
