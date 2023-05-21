import React from "react";
import { PinInput } from "src/components/Elements/PinInput/PinInput";
import { Text } from "src/components/Elements/Text";
import { Modal } from "src/components/Modal";
import { useDownModal } from "src/features/timer/hooks/useDownModal";
import { useTimerState } from "src/features/timer/store/timerStore";
import { timeToSecond } from "src/features/timer/utils/timeProcessing";
import { useCountDownModal } from "src/store/global/globalStore";

export const TimerModal = () => {
  const { mode, downInitialTime, changeMode } = useTimerState((state) => ({
    mode: state.mode,
    downInitialTime: state.downInitialTime,
    changeMode: state.changeMode,
  }));

  const [isOpen, setIsOpen] = useCountDownModal((state) => [
    state.isOpen,
    state.setIsOpen,
  ]);

  const onClose = () => {
    if (timeToSecond(downInitialTime) === 0 && mode === "down") changeMode();

    setIsOpen(false);
  };

  const { inputTime, padTime, handleChange, onSubmitHandler } = useDownModal();

  return (
    <Modal onClose={onClose} open={isOpen}>
      <Modal.Title>放送時間を入力してください。</Modal.Title>
      <Modal.Content>
        <p className="mb-4">
          <span className="mt-2 inline-block text-xs font-normal md:text-sm">
            設定した時間を0秒としてコメントが表示されます。
          </span>
          <span className="mt-0.5 inline-block text-xs text-red-500 underline decoration-dotted md:text-sm">
            ※正しい時間が入力されていない場合異なる時間のコメントが表示されます。
          </span>
        </p>
        <div className="flex flex-col items-center space-y-1">
          <div className="mx-auto">
            <PinInput
              changeHandler={handleChange}
              input={inputTime}
              submitHandler={onSubmitHandler}
              time={padTime}
            />

            <div className="mt-1.5 flex">
              <Text className="w-1/3 pr-4 text-center text-dimmed" size="xs">
                時間
              </Text>
              <Text className="w-1/3 text-center text-dimmed" size="xs">
                分
              </Text>
              <Text className="w-1/3 pl-3 text-center text-dimmed" size="xs">
                秒
              </Text>
            </div>
          </div>
        </div>
      </Modal.Content>
      <Modal.CancelButton
        className="mx-auto w-max"
        onClose={onSubmitHandler}
        size="md"
        type="submit"
      >
        {(inputTime === "000000" || !inputTime) && padTime === "000000"
          ? "キャンセル"
          : "設定"}
      </Modal.CancelButton>
    </Modal>
  );
};
