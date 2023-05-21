import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";
import { FaqProps } from "src/features/pages/faq/types";

export const AnswerItem: FC<Omit<FaqProps, "key">> = ({
  question,
  answer,
  defaultOpen,
}) => (
  <Disclosure as="div" className="pt-6" defaultOpen={defaultOpen}>
    {({ open }) => (
      <>
        <dt>
          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
            <span className="text-base font-semibold leading-7">
              {question}
            </span>
            <span className="ml-6 flex h-7 items-center">
              {open ? (
                <MinusSmallIcon aria-hidden="true" className="h-6 w-6" />
              ) : (
                <PlusSmallIcon aria-hidden="true" className="h-6 w-6" />
              )}
            </span>
          </Disclosure.Button>
        </dt>
        <Disclosure.Panel as="dd" className="mt-2 pr-12">
          <div className="text-sm leading-7 text-gray-600">{answer}</div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);
