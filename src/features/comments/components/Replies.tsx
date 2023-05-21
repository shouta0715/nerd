/* eslint-disable react/jsx-no-useless-fragment */
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { FC, Fragment, RefObject } from "react";
import { Loader } from "src/components/Elements/Loader";
import { Reply } from "src/features/comments/components/Reply";
import { useReplies } from "src/features/comments/hooks/useReplies";

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
    isFetching,
    closeClickHandler,
  } = useReplies({
    reply_id,
    reply_count,
    content,
  });

  return (
    <>
      {reply_count !== 0 && (
        <Disclosure>
          <Transition as={Fragment} show={isOpen}>
            <Disclosure.Panel as="ul" className="mt-4 space-y-4" static>
              {data?.pages
                .slice(0, showCount)
                .map((page) =>
                  page.replies.map((reply) => (
                    <Reply
                      key={reply.id}
                      original_id={reply_id}
                      reply={reply}
                    />
                  ))
                )}
              {isFetchingNextPage && isFetching && (
                <div className="flex w-full">
                  <Loader className="mx-auto" size="lg" variant="dots" />
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
          {!isFetchingNextPage && !isFetching && (
            <div className=" mt-2 flex w-full justify-between">
              <Disclosure.Button
                className="flex w-max items-center justify-end space-x-1 p-0 text-xs font-semibold text-indigo-500 hover:bg-transparent md:text-sm"
                onClick={clickHandler}
              >
                {controlLabel()}
                <span>
                  <ChevronUpIcon
                    className={`h-4 w-4 transform transition-transform ${
                      controlLabel() === "返信を閉じる" ? "" : "rotate-180 "
                    }

                  `}
                  />
                </span>
              </Disclosure.Button>
              <button
                className={`flex items-center space-x-1  text-xs font-bold text-indigo-500 md:text-sm ${
                  controlLabel() === "返信を閉じる" || !isOpen ? "hidden" : ""
                }`}
                onClick={closeClickHandler}
              >
                <span>閉じる</span>
                <ChevronUpIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </Disclosure>
      )}
    </>
  );
};
