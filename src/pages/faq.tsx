import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

import { NextPage } from "next";
import React from "react";
import { Layout } from "src/components/Layout/Layout";
import { useFaq } from "src/hooks/useFaq";

const Faq: NextPage = () => {
  const { faqMock } = useFaq();

  return (
    <Layout isShowSearchMenu={false}>
      <div className="container mx-auto flex-1 bg-white pb-8 pt-4">
        <section className="px-3 font-hiragino-sans md:px-6">
          <h2 className="pb-4 text-center font-hiragino-sans text-xl font-bold">
            よくある質問
          </h2>
          <ul>
            {faqMock.map((item) => (
              <Disclosure
                key={item.key}
                as="li"
                className="mt-7 border-y border-slate-300 py-3 first:mt-0 md:py-4"
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between">
                      <div className="flex items-center font-hiragino-sans text-sm font-bold md:text-base">
                        <div className="mr-2 grid h-6 w-6  place-items-center self-stretch rounded-xl bg-indigo-500 text-white">
                          Q
                        </div>
                        <p className="flex-1 text-left font-hiragino-sans">
                          {item.question}
                        </p>
                      </div>
                      {open ? (
                        <MinusIcon className="text-white-500 h-5 w-5 " />
                      ) : (
                        <PlusIcon className="text-white-500 h-5 w-5" />
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
        </section>
      </div>
    </Layout>
  );
};

export default Faq;
