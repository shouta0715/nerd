import { Transition } from "@headlessui/react";
import { ArrowSmallDownIcon, PlayIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Loader } from "src/components/Elements/Loader";
import { Chat } from "src/features/chats/common/components/Chat";
import { Chat as TypeChat } from "src/features/chats/common/types";
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
  const router = useRouter();

  return (
    <>
      <div className="relative flex w-full flex-1 flex-col gap-y-1.5 p-2 md:p-4">
        <div className="flex max-w-full flex-col items-center justify-center gap-y-1 break-words text-xs text-dimmed md:text-sm">
          <div>
            コメントは
            <button
              className="text-indigo-600 hover:underline"
              onClick={() =>
                router.replace({
                  query: {
                    mode: "comment",
                    slug: router.query.slug,
                    order: "new",
                  },
                })
              }
            >
              こちら
            </button>
          </div>
          <span>
            {interval.active
              ? "タイマーの時間に合わせて過去のその時間に投稿されたコメントが表示されます。"
              : "配信サービスのアニメと同時にタイマーをスタートさせてください。"}
          </span>
        </div>
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
            <>
              <PlayIcon className="h-10 w-10 fill-white" />
              <span className="sr-only">タイマーを開始する</span>
            </>
          )}
        </Transition>

        <ul>
          {chats?.map((comment) => (
            <Chat key={comment.id} chat={comment} />
          ))}
        </ul>
      </div>
      <div className="sticky bottom-20 flex w-full justify-end px-2 lg:px-3">
        <button
          aria-label={
            isSelfScroll
              ? "最新のコメントまでスクロール済み"
              : "最新のコメントまでスクロールする"
          }
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
