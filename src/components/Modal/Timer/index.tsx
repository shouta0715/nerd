import React, { useEffect } from "react";
import { PinInput } from "src/components/Elements/PinInput/PinInput";
import { Text } from "src/components/Elements/Text";
import { Modal } from "src/components/Modal";
import { useDownModal } from "src/features/timer/hooks/useDownModal";
import { useTimerState } from "src/features/timer/store";
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

  useEffect(() => () => setIsOpen(false), [setIsOpen]);

  const { inputTime, padTime, handleChange, onSubmitHandler } = useDownModal();

  return (
    <Modal onClose={onClose} open={isOpen}>
      <Modal.Title>アニメの総再生時間の入力</Modal.Title>
      <Modal.Content>
        <p className="mb-4">
          <span className="mb-1 mt-2 inline-block text-xs font-normal md:text-sm">
            動画配信サービスの総再生時間に合わせて、アニメの放送時間を入力してください。
          </span>
          <span className="mb-1 mt-2 inline-block text-xs font-normal text-indigo-600 md:text-sm">
            例)アニメの長さが24分30秒の場合、00:24:30と入力してください。
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
