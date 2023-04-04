import { ArrowDownIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { Chat } from "src/features/chats/components/Chat";
import { Chat as TypeeChat } from "src/features/chats/types";

type Props = {
  chats: TypeeChat[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bottomRef: (element: any) => void;
  isBottom?: boolean;
  entry: IntersectionObserverEntry | null;
  time: number;
};

export const Chats: FC<Props> = ({
  chats,
  bottomRef,
  isBottom,
  entry,
  time,
}) => (
  <ul className="relative mx-auto w-full flex-1 space-y-3 px-4 pb-1 pt-4 md:max-w-xl">
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
