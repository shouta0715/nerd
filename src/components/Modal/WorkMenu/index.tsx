import { Dialog, Transition } from "@headlessui/react";
import React, { FC, Fragment } from "react";
import { ButtonLink } from "src/components/Elements/ButtonLink";
import { Text } from "src/components/Elements/Text";
import { useOpenState } from "src/features/episodes/store";
import { GetWorkQuery } from "src/graphql/work/workQuery.generated";

type Props = {
  data?: GetWorkQuery;
};

export const WorkMenuModal: FC<Props> = ({ data }) => {
  const [isNextOpen, setIsNextOpen] = useOpenState((state) => [
    state.isNextOpen,
    state.setIsNextOpen,
  ]);

  return (
    <Transition.Root as={Fragment} show={isNextOpen}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={() => setIsNextOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity">
            <span className="sr-only">閉じる</span>
          </div>
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full flex-col items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all">
                <section className=" border-solid border-slate-200">
                  <div className="mb-4 flex items-center justify-between">
                    <Text className="text-dimmed" size="sm">
                      エピソード
                    </Text>
                  </div>
                  <Text component="div">
                    <Text className="line-clamp-2 text-sm" component="p">
                      {data?.works_by_pk?.series_title}
                    </Text>
                  </Text>
                  <div className="mt-4 flex flex-wrap items-center justify-center">
                    {data?.works_by_pk?.series_id && (
                      <nav className="group relative my-2 flex cursor-pointer items-center justify-center pb-2">
                        <ButtonLink
                          as={`/series/${data?.works_by_pk?.series_id}`}
                          className="mx-auto flex w-full max-w-max items-center justify-center rounded-md border border-solid bg-gray-800 px-2 py-2 text-center text-xs font-bold text-white md:px-4 md:py-2 md:text-sm"
                          href={{
                            pathname: `/series/${data?.works_by_pk?.series_id}`,
                            query: { series_title: data?.works_by_pk?.title },
                          }}
                          size="xs"
                        >
                          シリーズ一覧へ
                        </ButtonLink>
                      </nav>
                    )}
                  </div>
                </section>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};