import { Transition } from "@headlessui/react";
import { ArrowSmallDownIcon, PlayIcon } from "@heroicons/react/24/solid";
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
  isPending: boolean;
  isSelfScroll: boolean;
};

export const Chats: FC<Props> = ({ chats, time, isPending, isSelfScroll }) => {
  const interval = useTimerState((state) => state.interval);
  const authLoading = useGlobalState((state) => state.authLoading);

  return (
    <>
      <ul className="relative flex w-full flex-1 flex-col space-y-3 px-2  pb-2 pt-4 md:px-4">
        <p className="flex max-w-full justify-center break-words text-sm text-dimmed">
          {interval.active
            ? "タイマーの時間に合わせて過去のその時間に投稿されたコメントが表示されます。"
            : "配信サービスのアニメと同時にタイマーをスタートさせてください。"}
        </p>
        <Transition
          as="button"
          className="absolute left-1/2 top-1/2 m-auto grid  -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-black p-4 transition-all"
          disabled={isPending || authLoading}
          enter="duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          onClick={interval.start}
          show={time === 0 && !interval.active}
        >
          {isPending || authLoading ? (
            <Loader size="xl" theme="white" />
          ) : (
            <PlayIcon className="h-10 w-10 fill-white" />
          )}
        </Transition>

        {chats?.map((comment) => (
          <Chat key={comment.id} chat={comment} />
        ))}
      </ul>
      <div className="sticky bottom-20 flex w-full justify-end px-2 lg:px-3">
        <button
          className={clsx(
            "flex h-9 w-9 cursor-pointer items-center justify-center  rounded-full border-none bg-indigo-600 shadow-md shadow-indigo-400 transition-all active:translate-y-1",
            isSelfScroll && chats.length
              ? "opacity-100"
              : "pointer-events-none opacity-0"
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
    </>
  );
};
