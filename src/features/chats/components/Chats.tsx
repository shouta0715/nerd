import { Transition } from "@headlessui/react";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React, { FC } from "react";
import { Loader } from "src/components/Elements/Loader";
import { Chat } from "src/features/chats/components/Chat";
import { Chat as TypeChat } from "src/features/chats/types";
import { useTimerState } from "src/features/timer/store";
import { useGlobalState } from "src/store/global/globalStore";

type Props = {
  chats: TypeChat[];
  time: number;
  isLoading: boolean;
  isSelfScroll: boolean;
};

export const Chats: FC<Props> = ({ chats, time, isLoading, isSelfScroll }) => {
  const interval = useTimerState((state) => state.interval);
  const authLoading = useGlobalState((state) => state.authLoading);

  return (
    <ul className="relative  flex w-full flex-1 flex-col space-y-3 px-2  py-4 md:px-4">
      <Transition
        as="button"
        className="absolute left-1/2 top-1/2 m-auto grid  -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-black p-4 transition-all"
        disabled={isLoading || authLoading}
        enter="duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onClick={interval.start}
        show={time === 0 && !interval.active}
      >
        {isLoading || authLoading ? (
          <Loader size="xl" theme="white" />
        ) : (
          <PlayIcon className="h-10 w-10 fill-white" />
        )}
      </Transition>

      {chats?.map((comment) => (
        <Chat key={comment.id} animate chat={comment} />
      ))}
      <button
        className={clsx(
          "fixed bottom-[4.5rem] left-1/2 z-0 flex h-7 w-7 -translate-x-1/2 cursor-pointer items-center justify-center   rounded-full border-none bg-indigo-500 shadow-md shadow-black/[0.3] transition-all active:translate-y-1 lg:bottom-10  lg:left-3/4 lg:-translate-x-3/4",
          isSelfScroll && chats.length ? "block" : "hidden"
        )}
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
      >
        <ArrowDownIcon className="h-4 w-4 fill-white stroke-white stroke-2 text-white" />
      </button>
    </ul>
  );
};
