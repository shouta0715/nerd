import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { BasicLayout } from "src/components/Layouts/BasicLayout";

import { useFaq } from "src/hooks/useFaq";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => {
  const { faqMock } = useFaq();

  return (
    <div className="container mx-auto flex-1 bg-gray-50 py-4">
      <section className="px-3 font-hiragino-sans md:px-6">
        <h2 className="pb-4 text-center font-hiragino-sans text-xl font-bold">
          よくある質問
        </h2>
        <ul>
          {faqMock.map((item) => (
            <Disclosure
              key={item.key}
              as="li"
              className="mt-7 rounded-md border border-slate-200 bg-white p-3 shadow first:mt-0 md:p-4"
              defaultOpen={item.defaultOpen}
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex  w-full items-center justify-between">
                    <div className="flex items-center font-hiragino-sans text-sm font-semibold ui-open:text-indigo-500 md:text-base">
                      <div className="mr-2 grid h-6 w-6  place-items-center self-stretch rounded-xl bg-indigo-500 text-xs text-white ui-open:bg-indigo-500">
                        Q
                      </div>
                      <p className="flex-1 text-left font-hiragino-sans">
                        {item.question}
                      </p>
                    </div>
                    {open ? (
                      <MinusIcon className="text-white-500 h-6 w-6 self-stretch text-indigo-500" />
                    ) : (
                      <PlusIcon className="text-white-500 h-6 w-6 self-stretch" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="pb-2 pt-4 font-hiragino-sans text-sm">
                    <p className="font-hiragino-sans">{item.answer}</p>
                    {item.components}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </ul>
        <p className="mt-6 text-sm text-dimmed">
          上記の内容で解決しない場合は、お問い合わせフォームよりお問い合わせください。
          <Link className="text-sm text-indigo-500 underline" href="/">
            お問い合わせフォーム
          </Link>
        </p>
      </section>
    </div>
  );
};

Page.getLayout = BasicLayout;
Page.getTitle = Meta(() => "FAQ - Nerd");

export default Page;
