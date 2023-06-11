import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Text } from "src/components/Elements/Text";
import { TimeInput } from "src/components/Elements/TimeInput";
import { MenuForm } from "src/components/Form/Menu";
import { useOpenState } from "src/features/episodes/store";
import { ModeSwitch } from "src/features/timer/components/ModeSwitch";

export const MenuModal = ({ live = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useOpenState((state) => [
    state.isMenuOpen,
    state.setIsMenuOpen,
  ]);

  return (
    <Transition.Root as={Fragment} show={isMenuOpen}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={() => setIsMenuOpen(false)}
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
              <Dialog.Panel className="transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:w-full sm:max-w-md sm:p-6">
                <section>
                  <div className="mb-2 flex items-center justify-between">
                    <Text size="sm">メニュー</Text>
                  </div>
                  <MenuForm />
                </section>
                {!live && (
                  <section className="border-t py-2 lg:py-6">
                    <Text size="sm">タイマー</Text>
                    <Text className="text-xs text-dimmed lg:mb-4 lg:mt-2">
                      モードを変更すると経過時間から表示か残り時間から表示か変更できます。
                    </Text>
                    <TimeInput />
                    <ModeSwitch />
                  </section>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
