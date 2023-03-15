/* eslint-disable react/jsx-no-useless-fragment */
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, RefObject } from "react";
import { Loader } from "src/components/Elements/Loader/Loader";
import { Reply } from "src/features/comments/components/ReplyComment";
import { useComment } from "src/features/comments/hooks/useComment";

type Props = {
  reply_count: number;
  reply_id: string;
  content: RefObject<HTMLParagraphElement>;
};

export const Replies: FC<Props> = ({ reply_count, reply_id, content }) => {
  const {
    clickHandler,
    controlLabel,
    isOpen,
    data,
    showCount,
    isFetchingNextPage,
    closeClickHandler,
  } = useComment({
    reply_id,
    reply_count,
    content,
  });

  return (
    <>
      {reply_count !== 0 && (
        <Disclosure>
          <Transition show={isOpen} as={Fragment}>
            <Disclosure.Panel className="py-1" static as="ul">
              {data?.pages
                .slice(0, showCount)
                .map((replies) =>
                  replies.comments.map((reply) => (
                    <Reply key={reply.id} reply={reply} />
                  ))
                )}
              {isFetchingNextPage && (
                <div className="flex w-full">
                  <Loader className="mx-auto" variant="dots" />
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
          <div className="flex w-full justify-between">
            <Disclosure.Button
              className="mt-1 flex w-max items-center justify-end space-x-1 p-0 text-xs text-indigo-500 hover:bg-transparent md:text-sm"
              onClick={clickHandler}
            >
              {controlLabel()}
              <span>
                <ChevronUpIcon
                  className={`h-4 w-4 ${
                    controlLabel() === "返信を閉じる"
                      ? ""
                      : "rotate-180 transform"
                  }

                  `}
                />
              </span>
            </Disclosure.Button>
            <button
              onClick={closeClickHandler}
              className={`flex items-center space-x-1 text-xs text-indigo-500 md:text-sm ${
                controlLabel() === "返信を閉じる" || !isOpen ? "hidden" : ""
              }`}
            >
              <span>閉じる</span>
              <ChevronUpIcon className="h-4 w-4" />
            </button>
          </div>
        </Disclosure>
      )}
    </>
  );
};
