import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { FaqProps } from "src/features/pages/faq/types";

export const AnswerItem: FC<Omit<FaqProps, "key">> = ({
  question,
  answer,
  defaultOpen,
}) => (
  <Disclosure
    as="li"
    className="mt-7 list-none rounded-md border border-slate-200 bg-white p-3 shadow first:mt-0 md:p-4"
    defaultOpen={defaultOpen}
  >
    {({ open }) => (
      <>
        <Disclosure.Button className="flex  w-full items-center justify-between">
          <div className=" flex items-center text-sm font-semibold ui-open:text-indigo-500 md:text-base">
            <div className="mr-2 grid h-6 w-6  place-items-center self-stretch rounded-xl bg-indigo-500 text-xs text-white ui-open:bg-indigo-500">
              Q
            </div>
            <p className=" flex-1 text-left">{question}</p>
          </div>
          {open ? (
            <MinusIcon className="text-white-500 h-6 w-6 self-stretch text-indigo-500" />
          ) : (
            <PlusIcon className="text-white-500 h-6 w-6 self-stretch" />
          )}
        </Disclosure.Button>
        <Disclosure.Panel className=" pb-2 pt-4 text-sm">
          {answer}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);
