import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { Text } from "src/components/Elements/Text";
import { TimeInput } from "src/components/Elements/TimeInput";
import { useOpenState } from "src/features/episodes/store";
import { ModeSwitch } from "src/features/timer/components/ModeSwitch";

export const SetTimerModal = () => {
  const [isTimerOpen, setIsTimerOpen] = useOpenState((state) => [
    state.isTimerOpen,
    state.setIsTimerOpen,
  ]);

  useEffect(() => () => setIsTimerOpen(false), [setIsTimerOpen]);

  return (
    <Transition.Root as={Fragment} show={isTimerOpen}>
      <Dialog
        as="div"
        className="relative z-50 lg:hidden"
        onClose={() => setIsTimerOpen(false)}
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
          <div className="flex min-h-full flex-col items-center justify-center p-4 text-center sm:p-0 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all sm:w-full sm:max-w-md">
                <Text size="sm">タイマー</Text>
                <Text className="mb-2 text-dimmed" size="xs">
                  表示されているタイマーの時間などを変更できます。
                </Text>
                <TimeInput />
                <ModeSwitch />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
